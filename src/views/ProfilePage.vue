<script setup>
import { useUserStore } from '../stores/user';

const userStore = useUserStore();


</script>


<template>
    <div class="slide-in-from-right">
    <div class="head1">
        Mon Profile
    </div>

    <v-card  class="flex flex-row
     align-middle bg-white  gap-4
     justify-center
     my-7 mx-4 lg:mx-9 p-4 rounded-2xl drop-shadow-lg ">
     <img class="w-20 h-20 rounded-full mr-6"
      :src="userStore.profileIcon"
       alt="user Avatar">
       <div class="grid grid-cols-1 gap-1">
     <p class="pt-1 font-bold text-2xl text-stone-700"
     >{{ userStore.name }}</p> 
     <p class=" font-bold text-md  text-stone-700"
     >
     <font-awesome-icon icon="fa-solid fa-wallet" class="mr-2"/>
      100{{ userStore.balance }} USDT</p>
    </div>

    </v-card>

    <v-card class=" my-7 mx-4 lg:mx-9 p-4 gap-2 rounded-2xl drop-shadow-lg  grid grid-cols-1">
       <p class="text-xl text-center font-bold mb-1"> 
        <font-awesome-icon icon="fa-solid fa-circle-info" class="mr-3"/>Infos</p> 
       <p class="text-md font-semibold">- Nom:  {{ userStore.fullName }}</p> 
       <p class="text-md font-semibold">- Email:  {{ userStore.email }}</p> 
       <p class="text-md font-semibold">- Tel:  {{ userStore.whatsapp }}</p> 
       <br>
       <p class="text-md font-semibold">Ville:  {{ userStore.city }}</p> 
       <p class="text-md font-semibold">Pays:  {{ userStore.country }}</p> 
    </v-card>

    <v-card class=" my-7 mx-4 lg:mx-9 p-4 gap-2 rounded-2xl drop-shadow-lg  grid grid-cols-1">
       <p class="text-xl text-center font-bold mb-1"> 
        <font-awesome-icon icon="fa-solid fa-wallet" class="mr-4"/>Wallet</p> 
       <p class="text-md font-semibold">- Solde: 100 {{ userStore.balance }} USDT</p> 
       <p class="text-md font-semibold">- IC:  0{{ userStore.ic }} USDT</p> 
       <p class="text-md font-semibold">- BC:  0{{ userStore.bc }} USDT</p> 
       <br>
       <p class="text-xl text-center font-bold mb-1"> 
        <font-awesome-icon icon="fa-solid fa-face-smile-beam" class="mr-4"/>Revenues</p> 
       <p class="text-md font-semibold">- BC:  0{{ userStore.bc }} USDT</p> 
       <br>

      <v-btn    
      class="mx-10 bg-blue-500 text-white font-bold" rounded = 'pill'>
      <font-awesome-icon icon="fa-solid fa-money-bill" class="mr-4" />
        Voir Les Transactions
      </v-btn>
    </v-card>
<div class="grid grid-cols-2 gap-6 justify-center mb-8 mx-6">

    <v-btn stacked color="green-darken-2" class= "text-white" rounded="pill">
        Recharger Mon<br> Compte
    </v-btn>

    <v-btn stacked color="amber-darken-2" class="text-white " rounded="pill">
        Retirer L'argent de mon compte
    </v-btn>
</div>

</div>
</template>

<style scoped>

</style>