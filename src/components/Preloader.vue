<template>
    <div :class="props.bcolor"
    class="flex flex-row items-center justify-center
     p-10">
     
        <p class="loading">
       {{ props.msg }}
    </p>
    </div>
</template>


<script setup>
import { defineProps } from 'vue';

const props = defineProps(['msg','bcolor'])


</script>


<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Itim&family=Pacifico&display=swap');

.loading{
    font-family: 'Itim', cursive;
    font-family: 'Pacifico', cursive;
    animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;

    @apply text-green-100
     text-6xl font-extrabold text-center
     pt-11 pb-11 animate-bounce
    
}
@keyframes loading {
    
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

.lds-circle {
  display: inline-block;
  transform: translateZ(1px);
}
.lds-circle > div {
  display: inline-block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  background: rgb(203, 239, 212);
  animation: lds-circle 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
@keyframes lds-circle {
  0%, 100% {
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: rotateY(3600deg);
  }
}

</style>