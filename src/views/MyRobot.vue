
<script setup>
import database from '../supabase';
import { useUserStore } from '../stores/user';
import {ref, onMounted, computed} from 'vue'
import { useRouter } from 'vue-router';
import { useRobotsStore } from '../stores/robots';

const robot = ref([])
const loading = ref(false)
const router = useRouter()
const show = ref(false)

const user = useUserStore();

const robotsStore = useRobotsStore();
const robots = robotsStore.robots;


const getMyRobot = async () =>{
robot.value = robots.filter(obj => obj.id === id.value)[0];
}

const getRobot = async()=>{
  loading.value = true
    try {
        const { data } = await database
  .from('robots')
  .select('*')
  .eq('id', id.value)
 robot.value = data[0]
 console.log("data: "+JSON.stringify(data))
 console.log("robot: "+robot.value.name)
 loading.value = false
    } catch (error) {
        console.log(error)
    }
}

const id = ref();

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

const l2 = ref(false)

async function debit(){
  l2.value = true
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
  .update({ balance: parseFloat(parseInt(data[0].balance) - parseInt(robot.value.entry)).toFixed(2) })
  .eq('name', user.name)
  //modalVisible.value = false
   console.log(data[0].balance, " - ", robot.value.entry)
   //create new transaction
   try {
   await database
  .from('transactions')
  .insert({ 
    type: "debit", 
    amount: robot.value.entry,
    user: user.name,
    created_at: new Date()})

try {
  await database
  .from('users')
  .update({
     subscription: robot.value.name,
     new_task_date: new Date(),
     })
  .eq('name', user.name)
} catch (error) {
  console.log(error)
}

  l2.value = false
   embaucherVisisble.value = false
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

const embaucherVisisble = ref(false)

onMounted(() => {
        getId();
        getMyRobot();
        //getRobot();
        console.log(robot.value)

        //console.log("OD: ",JSON.stringify(router.params.id));

    })

</script>

<template>
    <div :class="`bg-${robot.bgColor}-lighten-5`"
    class=" flex-col justify-center align-middle pb-8">
    <div :color="robot.bgColor"
    class="head1">
        {{robot.name}}
    </div>
    <v-card :ripple="true"
    class="mx-auto"
    max-width="344"
  >
    <v-img 
    :aspect-ratio="1"
      :src="robot.imgIcon"
      cover
    ></v-img>

    <v-card-title>
      Bonjour, je suis {{ robot.name }}
    </v-card-title>

    <div class=" tesxt-sm text-gray-500 mx-4">
      {{ robot.description }}
    </div>

    <v-card-actions>
      <v-btn
      rounded="xl"
      @click="embaucherVisisble = true"
        :color="robot.bgColor"
        variant="text"
      >
        Embaucher
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        @click="show = !show"
      >
      <font-awesome-icon icon="fa-solid fa-circle-chevron-down" class="text-xl"/></v-btn>
    </v-card-actions>

    <v-fab-transition>
      <div v-show="show" class="mb-4">
    
        <v-divider></v-divider>
        <div class=" tesxt-sm text-amber-600 mx-4 ">
         <div class="font-extrabold">Entrée: </div> <div> {{robot.entry}} USD</div> 
        </div>
        <div class=" tesxt-sm text-emerald-600 mx-4 ">
         <div class="font-extrabold">Sortie: </div> <div> {{robot.cashout}} USD</div> 
        </div>


      </div>
    </v-fab-transition>
  </v-card>

</div>


<v-dialog v-model="embaucherVisisble"
        transition="dialog-bottom-transition"
        width="auto"
      >
      <v-card>
            <v-toolbar
              :color="`${robot.bgColor}`"
              :title="`Embaucher ${robot.name}`"
            ></v-toolbar>
            <v-card-text>
              <div class="text-md">Vous voulez embaucher {{robot.name}}, celà vas vous couter 
                {{robot.entry}} USD. Vous devez effectuer vos 4 taches cotidiennes pour percevoir vos gains!</div>
              
            </v-card-text>
              <v-btn
              :loading="l2"
              class="mx-8 mb-8 mt-3"
              :color="`${robot.bgColor}`"
                variant="elevated"
                @click="debit()"
              ><font-awesome-icon icon="fa-solid fa-circle-check" class=" mr-6"/>  Embaucher</v-btn>
          </v-card>
     
      </v-dialog>
</template>

