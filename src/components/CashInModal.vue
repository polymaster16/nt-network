<template>
    <v-dialog v-model="props.visibility"
        transition="dialog-bottom-transition"
        width="auto"
      >
      <v-card>
            <v-toolbar
              :color="props.color"
              title="Complet"
            ></v-toolbar>
            <img 
            :src="props.imageLink"
           >
            <v-card-text>
              <div class="text-xl">{{ props.m1 }}</div>
              <div class="text-xl">{{ props.m2 }}
                 <div class="font-bold">{{ props.credit }} USDT</div> </div>
            </v-card-text>
              <v-btn
              class="mx-8 mb-8 mt-3"
               :color = "props.color"
                variant="elevated"
                @click="props.handleClose"
              >Encaisser</v-btn>
          </v-card>
     
      </v-dialog>

</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps(['m1', 'm2', 'color', 
 'visibility','credit','handleClose', 'imageLink'])
</script>