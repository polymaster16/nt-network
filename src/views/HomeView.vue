<script setup>
 import {ref, onMounted} from 'vue'
 import { useRouter} from 'vue-router';

 const router = useRouter();
 const loadSign = ref(false)
 const willSlideOut = ref(true);
 const name = ref(null)

 onMounted(() => {
  console.log("Home page mounted")
  name.value = localStorage.getItem('@userName')
  console.log("Ze name",name.value)
 })

</script>

<template>
      <div class = "fade-in mx-4">
     <div class="head1 mb-8 mt-9">
      Bienvenue sur notre plateforme...
    </div>

    <div class="flex flex-row justify-center mb-9">
  <img class="bag2" src="../assets/plat.svg" alt="">
    </div>

    <div class="flex flex-row justify-center mt-8 mb-9">
    <v-btn 
    class="bg-red-500 text-white scara" rounded="pill" size="small">
      Tutorielle
    </v-btn>
  </div>

    <div v-if="name==='user.name'?true:false">
    <div class="head1 mb-4 mt-9">
    Vous n'avez pas encore de compte visiblement...
    </div>
    <div class="flex flex-row justify-center mb-9">
  <img class="bag" src="../assets/createAcc.svg" alt="">
</div>
    <div class="flex flex-row justify-center mt-8 mb-9">
    <v-btn @click="router.push('/signup')"
    class="bg-emerald-400 scara" rounded="pill" size="large">
      Créer un compte
    </v-btn>
  </div>
</div>

<div v-else>
  <div class="head1 mb-4 mt-9">
    Le Principe Est Très Simple...
    </div>
    <div class="flex flex-row justify-center mb-9">
  <img class="bag" src="../assets/bitco.svg" alt="">
</div>


<v-timeline side="end" align="start">
    <v-timeline-item
      dot-color="pink"
      size="small"
    >
      <div class="d-flex">
        <strong class="me-4">1-</strong>
        <div>
          <strong>Rechargez votre compte</strong>
          <div class="text-caption">
           Transferez des bitcoins à votre compte NT network
          </div>
        </div>
      </div>
    </v-timeline-item>

    <v-timeline-item
      dot-color="teal-lighten-3"
      size="small"
    >
      <div class="d-flex">
        <strong class="me-4">2-</strong>
        <div>
          <strong>Embauchez un Robot!</strong>
          <div class="text-caption mb-2">
            le robot seras chargé de faire des 
            travaux comme du mining, trading pour vous ramener des benefices
          </div>
        </div>
      </div>
    </v-timeline-item>

    <v-timeline-item
      dot-color="pink"
      size="small"
    >
      <div class="d-flex">
        <strong class="me-4">3-</strong>
        <div>
          <strong>Validez vos taches</strong>
          <div class="text-caption mb-2">
            Validez vos taches pour vous rassurer que le robot fait
             bien son travail et collecter ses commissions progréssivement
          </div>
        </div>
      </div>
    </v-timeline-item>

    <v-timeline-item
      dot-color="teal-lighten-3"
      size="small"
    >
      <div class="d-flex">
        <strong class="me-4">4-</strong>
        <div>
          <strong>Retirez l'argent de votre compte</strong>
          <div class="text-caption">
           Quand vous souhaiterez utiliser votre argent, vous pourrez transferer
             vos bitcoins à votre wallet favori.
          </div>
        </div>
      </div>
    </v-timeline-item>
  </v-timeline>


  <div class="head1 mb-9 mt-9">
    Nous <span class="text-red">sommes</span> vraiment sur et rentable
    </div>
    <div class="flex flex-row justify-center mb-9">
  <img class="bag scama" src="../assets/safe.svg" alt="">
</div>


<div class="head1 mb-9 mt-9">
    Nous avons une <span class="text-red">grande</span>  communauté
    </div>
    <div class="flex flex-row justify-center mb-9">
  <img class="bag comspin" src="../assets/community.svg" alt="">
</div>

</div>

      <div class="grid grid-cols-4 gap-8 mx-4 mb-9">
        <v-btn
          icon
          color="success"
        >
        <font-awesome-icon class="text-3xl font-extrabold" icon="fa-brands fa-whatsapp" shake />
        </v-btn>
        <v-btn
          icon
          color="blue"
        >
        <font-awesome-icon class="text-3xl font-extrabold" icon="fa-brands fa-facebook"  />
        </v-btn>
        <v-btn
          icon
          color="red"
        >
        <font-awesome-icon class="text-2xl font-extrabold" icon="fa-brands fa-youtube"  />
        </v-btn>
        <v-btn
          icon
          color="blue-lighten-1"
        >
        <font-awesome-icon class="text-3xl font-extrabold" icon="fa-brands fa-telegram"  />
        </v-btn>
      </div>
</div>
</template>

<style scoped>
.bag{
  width: 70%;
  height: auto;
}
.bag2{
  width: 90%;
  height: auto;
}

.comspin{
  animation: comspin 4s ease-in-out infinite;
}

@keyframes comspin{
0%{
  transform: rotate(0deg); 
}
50%{
  transform: rotate(60deg); 
}
100%{
  transform: rotate(0deg); 
}

}

.scama{
  animation: scama 2s ease-in-out infinite;
}


@keyframes scama{
0%{
  transform: scale(100%); 
}
50%{
  transform: scale(95%); 
}
100%{
  transform: scale(100%); 
}

}



</style>
