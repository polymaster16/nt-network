<template>
   <div class="slide-in-from-right">
 <div class="head1">
    Robots
 </div>

 <v-progress-linear v-if="loading"
 class="mt-5"
      indeterminate
      color="yellow-darken-2"
    ></v-progress-linear>

 <div v-else  v-for="robot in robots" v-bind="id">
 <v-hover 
        v-slot="{ isHovering, props }"
      > 
 <v-card 
 @click="navigator.push(`robots/${robot.id}`)"
 v-bind="props"
 elevation="2"
  :class="isHovering ? ` bg-${robot.bgColor}-lighten-2` : ` bg-${robot.bgColor}-lighten-1`"
 class="my-7 mx-8 flex flex-row align-middle justify-start p-4
       rounded-2xl drop-shadow-lg">
     <img class="w-12 h-12 rounded-full mr-6"
      :src="robot.imgIcon"
       alt="Robot Avatar">
       <div class="grid grid-cols-1 gap-1">
     <p class="pt-1 font-bold text-md"
     :class="`text-${robot.bgColor}-darken-4`"
     >{{ robot.name }}</p> 
     <p class=" font-bold text-sm"
     :class="`text-${robot.bgColor}-darken-4`"
     > {{ robot.entry }} USDT</p>
    </div>

 </v-card> 
 </v-hover>
</div>
</div>
</template>

<script setup>
import database from '../supabase';
import {ref, onMounted} from 'vue'
import { useRouter } from 'vue-router';
import { useRobotsStore } from '../stores/robots';

const loading = ref(false)
const navigator = useRouter();

const robotsStore = useRobotsStore();
const robots = robotsStore.robots;

const getRobots = async()=>{
  loading.value = true
    try {
        const { data } = await database
  .from('robots')
  .select('*')
 robots.value = data

 robots.value.sort(
   (x, y) => 
    (parseInt(x.entry) < parseInt(y.entry) ) ? -1 :
     (parseInt(x.entry) >parseInt(y.entry) ) ? 1 :
       0);

 console.log("data"+data)
 console.log("robots"+robots.value)
 loading.value = false
    } catch (error) {
        console.log(error)
    }
}
 
onMounted(() => {
      //  getRobots();
      console.log(JSON.stringify(robotsStore))
    }
    )
 




</script>