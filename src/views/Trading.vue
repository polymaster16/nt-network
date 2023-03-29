<script setup>
import {ref, onMounted} from 'vue'
import database from '../supabase';
import { useUserStore } from '../stores/user';
import { useRouter } from 'vue-router';
const loader = ref(0);
const modalVisible = ref(false);
const l2 = ref(false);
const user = useUserStore();
const router = useRouter();
const add = async()=>{
    loader.value++
 
}

const id = ref();
const task = ref({});

const getId=()=>{
  
  const curl = router.currentRoute.path;

  const currentRoutePath = ref(null);

  const setCurrentRoutePath = () => {
    const resolved =  router.resolve({
      name: router.currentRoute.name,
      params: router.currentRoute.params,
    });

    currentRoutePath.value = resolved.href;
  };

 setCurrentRoutePath();
  console.log("current Route path: ", currentRoutePath.value)

  console.log("curl: "+ curl);

  const matches = currentRoutePath.value.match(/\d+/g)
  if(matches) {
    id.value = parseInt(matches[0])
   // textValue.value = stringValue.value.replace(matches[0], '')
  } else {
    id.value = 0
   // textValue.value = stringValue.value
  }
  
  console.log("id: "+ id.value);
}
  const getTask = async()=>{
    getId();
    try {
    const {data} =  await database
    .from('tasks')
    .select('*')
    .eq('id',id.value)
  task.value = data[0]
  console.log("task: ",task.value.reward)
    }catch(err){
      console.log(err)
    }
  }

async function credit() {
  l2.value = true
  await getTask();
  //get curret user infos
  try {
    const {data} =  await database
    .from('users')
    .select('*')
    .eq('name',user.name)

   // update the user's balance
    try {
   await database
  .from('users')
  .update({ balance: parseFloat(parseFloat(data[0].balance) + parseFloat(task.value.reward)).toFixed(2) })
  .eq('name', user.name)
  //modalVisible.value = false

   //updtate the tasks' status
   try {
   await database
  .from('tasks')
  .update({ completed: true })
  .eq('id', id.value)
  l2.value = false
  modalVisible.value = false
  router.push('/tasks')
   }
   catch(err){
    console.log(err)
   }
  } catch (error) {
    console.log(error);
  }
  } catch (error) {
  console.log(error);
  }
}


onMounted(() => {
    //loading();
    getTask();
    let interval = setInterval(() => {
        if (loader.value < 100) {
            loader.value = loader.value + 5;
        } else {
          clearInterval(interval);
          modalVisible.value = true;
        }
      }, 500);
}
)

</script>


<template>
    <img
    src="../assets/trad2.gif"
    alt="Trading..."/>
  
    <div class="bg-black
    grid grid-cols-1 ">
       <p class="titre">Trading crypto...</p> 
       <p class="t2">ID: tch-129 </p> 
       <p class="t2">Robot: Astro </p> 
       <p class="t2">Reward: 2.223 USDT</p> 

       <v-progress-linear
       class="mt-4 mb-2"
      :model-value="loader"
      color="amber"
      height="30"
      striped
    ></v-progress-linear>

    <p class="font-bold text-2xl text-center mb-6">{{ loader }}%</p>

    <v-dialog v-model="modalVisible"
        transition="dialog-bottom-transition"
        width="auto"
      >
      <v-card>
            <v-toolbar
              color="success"
              title="Success"
            ></v-toolbar>
            <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBG9TVH09JvGRHgNhARU1DEumAw3IvDsiwHg&usqp=CAU"
           >
            <v-card-text>
              <div class="text-xl">La Tache1 est complète.. !</div>
              <div class="text-xl">Votre compte a été crédité de
                 <div class="font-bold">2.223 USDT</div> </div>
            </v-card-text>
              <v-btn
              :loading="l2"
              class="mx-8 mb-8 mt-3"
               color = "success"
                variant="elevated"
                @click="credit()"
              >Encaisser</v-btn>
          </v-card>
     
      </v-dialog>


    </div>

</template>

<style scoped>

</style>