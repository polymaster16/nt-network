<script setup>
import {ref} from 'vue';
  const tasks = ref([{
    id:"t1",
    name: "Tache1",
    type:"staking",
    typeColor: "blue",
    robot:"Astro-boy",
    robotIcon: "https://api.dicebear.com/5.x/bottts/svg?seed=Princess",
    completed:false,

  },
  {
    id:"t2",
    name: "Tache2",
    type:"trading1",
    typeColor: "pink",
    robot:"Astro-boy",
    robotIcon: "https://api.dicebear.com/5.x/bottts/svg?seed=Scooter",
    completed:false,


  },
  {
    id:"t3",
    name: "Tache3",
    type:"trading2",
    typeColor: "green",
    robot:"Astro-boy",
    robotIcon: "https://api.dicebear.com/5.x/bottts/svg?seed=rgr",
    completed:false,


  },
  {
    id:"t4",
    name: "Tache4",
    type:"mining",
    typeColor: "amber",
    robot:"Astro-boy",
    robotIcon: "https://api.dicebear.com/5.x/bottts/svg?seed=Pepper",
    completed:false,


  },
  
  
  
  
  ])
</script>

<template>
    <div class="slide-in-from-right">
    <div class="head1">
        Taches
    </div>


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
       rounded-2xl drop-shadow-lg">
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
</template>

<style scoped>

.abs{
    @apply text-xl;

    position: absolute;
    left: 90%;
}

</style>