
<script setup>
import database from '../supabase';
import {ref, onMounted, computed} from 'vue'
import { useRouter } from 'vue-router';
import { useRobotsStore } from '../stores/robots';

const robot = ref([])
const loading = ref(false)
const router = useRouter()
const show = ref(false)

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

onMounted(() => {
        getId();
        getMyRobot();
        //getRobot();
        console.log(robot.value)

        //console.log("OD: ",JSON.stringify(router.params.id));

    })

</script>

<template>
    <div class="flex-col justify-center align-middle pb-8">
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
</template>

