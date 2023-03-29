<script setup>
import {ref, onMounted, computed} from 'vue'
import database from '../supabase';
import { useUserStore } from '../stores/user';
import { useRouter } from 'vue-router';
const loader = ref(0)
const modalVisible = ref(false)

const router = useRouter()

const shower =  ref ([false, false, false, false, 
                    false, false, false, false,
                    false, false, false, false,
                    false, false, false, false,
                    false, false, false, false, ])
const n = ref(0)
const user = useUserStore()

async function credit() {
  try {
    const {data} =  await database
    .from('users')
    .select('*')
    .eq('name',user.name)

    try {
   await database
  .from('users')
  .update({ balance: parseFloat(parseFloat(data[0].balance) + 2.23).toFixed(2) })
  .eq('name', user.name)
  modalVisible.value = false
  router.push('/tasks')
  } catch (error) {
    console.log(error);
  }

  } catch (error) {
    console.log(error);
  }
}


function simulate(){
  console.log(shower.value)
 setInterval(() => {
  shower.value[n.value] = true
  console.log(n.value)

  n.value ++
 }, 5000);
}

onMounted(() => {
    //loading();
    let interval = setInterval(() => {
        if (loader.value < 100) {
            loader.value = loader.value + 0.45;
        } else {
          clearInterval(interval);
          modalVisible.value = true;
        }
      }, 500);
      simulate();

    })

</script>



<template>
    <div class="bg-black fade-in">
      <div class="py-5 font-bold text-3xl text-center">  Mining Process</div>

     <div class="mx-5 text-lg font-normal grid grid-cols-1 gap-3 mb-10 ">
    <div class="phrase" v-if="shower[0]">
        Starting_Stratum_on__________________________________
    </div>
    <p class="phrase" v-if="shower[1]">__stratum+tcp://stratum.btcguild.com:3001....________</p>

    <p class="phrase" v-if="shower[2]">  Binding_thread_2_to_cpu_2  </p>
    <p class="phrase" v-if="shower[3]">    Binding_thread_0_to_cpu_0 </p>
 <br>
 <p class="text-amber-500 phrase" v-if="shower[4]">4_miner_threads_started_using_'sha256d'__ </p>
 <p class="text-amber-500 phrase" v-if="shower[5]">_algorithm_______________________________________</p>
 <br>

    <p class="phrase" v-if="shower[6]"> thread_1:_2097152_hashes,_3004_khashes/s_____ </p>
    <p class="phrase" v-if="shower[7]"> thread_2:_2097152_hashes,_3004_khashes/s_____ </p>
    <p class="phrase" v-if="shower[8]"> thread_3:_2097152_hashes,_3004_khashes/s_____ </p>
    <p class="phrase" v-if="shower[9]"> thread_0:_2097152_hashes,_3004_khashes/s_____ </p>
    <p class="text-green-500 phrase" v-if="shower[10]">accepted_1/1_(100%)_2097152_hashes,______</p>
    <p class="text-green-500 phrase" v-if="shower[11]">_2875_khashes/s________________________  </p>

    <br>
 <p class="text-amber-500 phrase" v-if="shower[12]">    Stratum_detected_new_block...</p>
 <br> 

 <p class="phrase" v-if="shower[13]"> thread_1:_2097152_hashes,_3004_khashes/s </p>
    <p class="phrase" v-if="shower[14]"> thread_2:_2097152_hashes,_3004_khashes/s </p>
    <p class="phrase" v-if="shower[15]"> thread_3:_2097152_hashes,_3004_khashes/s </p>
    <p class="phrase" v-if="shower[16]"> thread_0:_2097152_hashes,_3004_khashes/s </p>
    <p class="text-red-500 phrase" v-if="shower[17]">    denied_1/2_(100%)_2097152_hashes,</p>
    <p class="text-red-500 phrase" v-if="shower[18]">_2875_khashes/s______________  </p>
  <br>
  <p class="text-blue-500 phrase" v-if="shower[19]">Astroboy_is_Closing__stratum+tcp://stratum.</p> 
  <p  class="text-blue-500 phrase" v-if="shower[20]">_btcguild.com:3001....______________________</p>

  </div>
</div>

<div class="bg-black
    grid grid-cols-1 ">
       <p class="titre">Mining BTC...</p> 
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

</div>

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
              class="mx-8 mb-8 mt-3"
               color = "success"
                variant="elevated"
                @click="credit()"
              >Encaisser</v-btn>
          </v-card>
     
      </v-dialog>

</template>

<style scoped>


.phrase {
  overflow: hidden; /* hide the text initially */
  animation: reveal 5s steps(500, end) forwards; /* start the animation */
}
.xxx .p{
  @apply phrase
}

@keyframes reveal {
  from {
    width: 0; /* start with 0 width */
  }
  to {
    width: 100%; /* end with full width */
  }
}
</style>