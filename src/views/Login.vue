<template>
      <div class="bg-gradient-to-r from-blue-200 to-emerald-200 ... 
       flex justify-center align-middle py-8 fade-in">

        <v-card transition="slide-x-transition"
         class="mx-auto px-6 py-8 " max-width="344">
        <v-form
          v-model="form"
          class="mb-5"
        >
        <div class="text-xl text-gray-700
         font-extrabold mb-5 text-center curs">LOGIN</div>
          <v-text-field
            v-model="name"
            class="mb-2"
            clearable
            label="User Name"
          ></v-text-field>
  
          <v-text-field
            v-model="password"
            label="Password"
            placeholder="Enter your password"
          ></v-text-field>
  
          <br>
  
          <v-btn   
            :loading="loading"
            block
            color="grey-darken-4"
            size="large"
            variant="elevated"
            @click="login"
          >
            Log In
          </v-btn>
          </v-form>
          <div class="text-center ">
          <v-btn variant="text"
          @click="router.push('/signup')"
          class="text-sm font-bold text-blue-500 mt-4
           hover:text-blue-700 focus:text-pink-600 ">
           Create an account instead
          </v-btn>
          </div>  
      </v-card>

      
        </div>

        
   
  </template>

<script setup>
 import {ref, onMounted} from 'vue'
 import { useRouter } from "vue-router";
 import database from "../supabase.js"
import { useUserStore } from '../stores/user';


 const router = useRouter();
 const name= ref()
 const password= ref()
 const loading= ref(false)

 const showLogin = ref(false)
 const userStore = useUserStore();


 const setUserStore = async() =>{
  try {
    const {data} =  await database
    .from('users')
    .select('*')
    .eq('name',name)
      
    const user = data[0];
    userStore.$state = user

    console.log('userStoreName' , userStore.fullName);
   userStore.print()
   } catch (error) {
     console.log(error.message)
   }
 }


const login = async() => {
  const str = ref()
  const str2 = ref()
  loading.value = true
  try{
    const { data, error } = await database
  .from('users')
  .select('*')

  str.value = data.filter((x)=> x.password === password.value)
  str2.value = data.filter((x)=> x.name === name.value)

  console.log(str.value)
  if(str.value.length > 0 && str2.value.length > 0 ){
    localStorage.setItem('@userName', name.value)
    localStorage.setItem('@userKey', password.value)
    loading.value = false
    setUserStore()                                                  
    router.push('/home')
  } else {
    alert("wrong username or password. Try again please")
    name.value =""
    password.value =""
    loading.value = false
  }
  }
  catch(error) {
    alert("error: "+error.message)

}
}

onMounted(()=>{
  name.value = localStorage.getItem("@userName") ;
  password.value = localStorage.getItem("@userKey") ;
  console.log("name: "+name.value+" password: "+password.value)
  console.log("mounted home");
});


</script>


<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Itim&family=Pacifico&display=swap');

.curs{
  font-family: 'Itim', cursive;
}
 .imgh{
        width: auto;
        height: 50rem;
        background-image: url('https://cdn.pixabay.com/photo/2013/07/18/10/56/pile-163497_960_720.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
       }

       
 
   
</style>