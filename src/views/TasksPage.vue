<script setup>
import {ref, onMounted} from 'vue';
import { useRouter } from 'vue-router';
import database from '../supabase';
import { useUserStore } from '../stores/user';
import { useRobotsStore } from '../stores/robots';

const tasks = ref([])
const loading = ref(false)
const router = useRouter()
const user = useUserStore()

const robotsStore = useRobotsStore();
const robots = robotsStore.robots;

async function getTasks(){
  loading.value = true;
  try {
  const { data} = await database
  .from('tasks')
  .select('*')
  .eq('user', `${user.name}`)

  tasks.value = data
  //data.value.target = tasks.value
  console.log(data)
  loading.value = false;
  } catch (error) {
    console.log(error)
  }

}
const mv = ref(false)

const open =async(task)=>{
  if(task.completed){
    mv.value = true
    return O;
  } else {
    if (task.type === 'staking'){
    router.push(`trading/${task.id}`)
  } else 
  if (task.type === 'mining'){
    router.push(`mining/${task.id}`)
  } else 
  if (task.type === 'trading1'){
    router.push(`trading/${task.id}`)
}else 
  if (task.type === 'trading2'){
    router.push(`trading/${task.id}`)
}
  }

}
const subscribedRobot = ref("")
const getSubscriptionRobot = async()=>{
  subscribedRobot.value = robots.filter(obj => obj.name === user.subscription)[0];
  console.log("subscribedRobot", subscribedRobot.value)
}

const loading1 = ref(false)

const setNewTaskDate = async()=>{
  const today = new Date()
console.log("today => ",today)
const tomorrow =  new Date()
tomorrow.setDate(today.getDate() + 1)
//returns the tomorrow date
console.log("tomorrow => ",tomorrow)

  try {
    await database
    .from('users')
    .update({
      new_task_date:tomorrow,
    })
    .eq("name", user.name)
  } catch (error) {
    console.log("In updateUserDate(): ", error)

  }
}

const addTasks=async()=>{
  const currentDate = new Date()
  try {
    const {data} = await database
  .from('users')
  .select("new_task_date")
  .eq("name",user.name)
   console.log("userNewDate => ",data[0].new_task_date)
  const standardDate = new Date(data[0].new_task_date)
  console.log("standardDate => ",standardDate)
  if(standardDate.getDate() === currentDate.getDate()){
  try {
  await database
  .from('tasks')
  .insert([
    tasks1.value[0],
    tasks1.value[1],
    tasks1.value[2],
    tasks1.value[3],
  ])
  console.log("tasks added")
  } catch (error) {
    console.log("In addTask1(): ", error)
  }
  }

  } catch (error) {
    console.log("In addTask2(): ", error)
  }
 


 
}

const refresh = async()=>{
  loading1.value = true
  await addTasks();
  await setNewTaskDate();
  await getTasks();
  loading1.value = false
}

onMounted(() => {
  getSubscriptionRobot()
  getTasks()
})

  const tasks1 = ref([{
    name: "Tache1",
    type:"staking",
    typeColor: "blue",
    robot: subscribedRobot.name,
    robotIcon: "https://api.dicebear.com/5.x/bottts/svg?seed=Princess",
    completed:false,
    reward: parseFloat(subscribedRobot.t1),
    user: `${user.name}`,
  },
  {
    name: "Tache2",
    type:"trading1",
    typeColor: "pink",
    robot: subscribedRobot.name,
    robotIcon: "https://api.dicebear.com/5.x/bottts/svg?seed=Scooter",
    completed:false,
    reward: parseFloat(subscribedRobot.t2),
    user:  `${user.name}`,
  },
  {
    name: "Tache3",
    type:"trading2",
    typeColor: "green",
    robot: subscribedRobot.name,
    robotIcon: "https://api.dicebear.com/5.x/bottts/svg?seed=rgr",
    completed:false,
    reward: parseFloat(subscribedRobot.t3),
    user:  `${user.name}`,
  },
  {
    name: "Tache4",
    type:"mining",
    typeColor: "amber",
    robot: subscribedRobot.name,
    robotIcon: "https://api.dicebear.com/5.x/bottts/svg?seed=Pepper",
    completed:false,
    reward: parseFloat(subscribedRobot.t4),
    user: `${user.name}`,
  },
  
  
  
  
  ])
</script>

<template>
    <div class="slide-in-from-right">
    <div class="head1">
        Taches
    </div>

    <v-progress-linear v-if="loading"
 class="mt-5"
 height="20"
      indeterminate
      color="yellow-darken-2"
    ></v-progress-linear>

    <div v-for="task in tasks" v-bind="id">
 <v-hover 
        v-slot="{ isHovering, props }"
      > 
 <v-card 
 variant = 'contained'
 v-bind="props"
 elevation="2"
  :class="isHovering ? ` bg-${task.typeColor}-lighten-5` : ` bg-${task.typeColor}-lighten-5`"
 class="my-7 mx-8 flex flex-row align-middle justify-start p-4
       rounded-2xl drop-shadow-lg"
       @click = "open(task)">
     <img class="w-12 h-12 rounded-full mr-6"
      :src="task.robotIcon"
       alt="Robot Avatar">
       <div class="grid grid-cols-1 gap-1">
     <p class="pt-1 font-bold text-md"
     :class="`text-${task.typeColor}-darken-4`"
     >{{ task.name }}</p> 
     <p class=" font-bold text-sm"
     :class="`text-${task.typeColor}-darken-4`"
     > {{ task.type }} </p>
    </div>

    <div class="abs">
    <font-awesome-icon 
    :class="task.completed? 'text-emerald-600': 'text-red-600'"
     icon="fa-solid fa-circle-check" />
    </div>
 </v-card> 
 </v-hover>
</div>

    </div>
    <v-btn :loading="loading1"
    @click="refresh()"
    size="large" >
     <strong>Raffraichir</strong> 
    </v-btn>
<v-dialog v-model="mv">
   <v-alert
  color="info"
  title="OOUPS !!!!"
  text="Cette tache est complète."
></v-alert>
</v-dialog>
   
</template>

<style scoped>

.abs{
    @apply text-xl;

    position: absolute;
    left: 90%;
}

</style>