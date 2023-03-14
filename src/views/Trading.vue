<script setup>
import {ref, onMounted} from 'vue'
const loader = ref(0);
const modalVisible = ref(false);


const add = async()=>{
    loader.value++
 
}

onMounted(() => {
    //loading();
    let interval = setInterval(() => {
        if (loader.value < 100) {
            loader.value = loader.value + 5;
        } else {
          clearInterval(interval);
          modalVisible.value = true;
        }
      }, 500);
})

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
              class="mx-8 mb-8 mt-3"
               color = "success"
                variant="elevated"
                @click="modalVisible = false"
              >Encaisser</v-btn>
          </v-card>
     
      </v-dialog>

    </div>

</template>

<style scoped>
.titre{
@apply  
font-bold text-2xl text-center mt-8;

}
.t2{
@apply  
font-bold text-lg text-left ml-4
}
</style>