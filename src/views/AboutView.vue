<template>
  <div class="phrase">
    Lorem_ipsum_dolor_sit_amet, consectetur adipiscing elit. Quisque tempus nunc erat, ut molestie libero accumsan eget. Duis aliquet diam quis quam congue vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In dictum, lorem a dictum lobortis, leo nulla aliquet augue, at placerat odio risus vitae nisl. Suspendisse ligula felis, euismod facilisis mattis et, sodales nec purus. Nullam vel augue massa. Maecenas elementum luctus vestibulum. Proin convallis hendrerit elit, et mattis magna pretium eu. Integer imperdiet leo ut nunc blandit sollicitudin. Sed faucibus finibus ante, eu sollicitudin mi laoreet vitae. Nulla commodo eros eget eros viverra consectetur. Sed sed mauris ac sapien tempus laoreet. Morbi consequat mattis posuere. Nulla quis urna vestibulum augue sollicitudin mattis. Nunc et dolor vel ex dapibus mollis non vel ex. Cras sem sem, pellentesque et sapien quis, rhoncus pulvinar ante.
  </div>
</template>

<script setup>
import {ref} from 'vue'
const word = ref("Hey you, come over here")

</script>
<style>
  
.phrase {
  overflow: hidden; /* hide the text initially */
  animation: reveal 5s steps(500, end) backwards; /* start the animation */
}

@keyframes reveal {
  from {
    width: 0; /* start with 0 width */
  }
  to {
    width: 100%;  /* end with full width */
  }
}
</style>
