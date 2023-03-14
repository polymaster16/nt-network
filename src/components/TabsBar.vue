<template>
    <v-card>
      <v-tabs
      align-tabs="center"
        bg-color="black"
      >
        <v-tab class="py-4">
            <router-link to="/home">
         <font-awesome-icon icon="fa-solid fa-house" class=" " />
        </router-link>
        </v-tab>
        <v-tab>
            <router-link to="/robots">
            <font-awesome-icon icon="fa-solid fa-robot" />
        </router-link>
        </v-tab>
        <v-tab>
        <router-link to="/tasks">
        <font-awesome-icon icon="fa-solid fa-bars-progress" />
        </router-link>
        </v-tab>
        <v-tab>
            <router-link to="/profile">   
            <font-awesome-icon icon="fa-solid fa-user" />
            </router-link>
        </v-tab>
       
      </v-tabs>
    </v-card>
  </template>

  <style scoped>
  .v-card .v-tabs .v-tab{
    @apply text-lg
  }
</style>

<script setup>

</script>