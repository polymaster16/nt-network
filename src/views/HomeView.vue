<script setup>
 import {ref, onUnmounted} from 'vue'

 const willSlideOut = ref(true);

 onUnmounted(() => {
    console.log("home will be inmounted")
  willSlideOut.value = false;
 
})


</script>

<template>
      <div class = "fade-in">
     <div class="head1">
      HomePage
    </div>
      Hello my friend 
      <font-awesome-icon icon="fa-solid fa-user-secret" />

</div>
</template>
