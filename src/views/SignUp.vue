<script setup>
import Preloader from "../components/Preloader.vue"
import {reactive, ref, watch, onMounted} from 'vue'
import database from "../supabase.js"
import router from '../router'
const errorMessage = ref("No error")
const errorColor = ref("text-green-600")
const isFormValid = ref(false)
const regions = ref([
  "Centre", "Littoral", "West", "East", "South",
  "Far North", "Adamaoua", "North", "NorthWest", "SouthWest"
]);

const paymentMethods = ['Mobile Money', 'Orange Money', 'Mobile Money and Orange Money'];
const gender = ['Male', 'Female'];
const message= ref("Creating Account ... ")
const loadColor=ref("bg-emerald-800")

const sex = ref(null)
const isCreatingAccount = ref(false)

const countries = ref([])

const user =  reactive({
    profileName: '',
    fullName: '',
    city: '',
    state: '',
    email:'',
    whatsapp:"",
    momo: '',
    om: '',
    password1: '',
    password2: '',
    profileImg: '',
   
}
)


const BASE_URL = 'https://countriesnow.space/api/v0.1/countries'

const getCountries = async () => {
  const response = await fetch(`${BASE_URL}`).then(response =>
   response.json())
  const { data } = response
  // user.state = data
  data.forEach((country) => {
    countries.value.push(country.country)
   // console.log(country) // {"country": "Afghanistan", "cities": [ "Herat", "Kabul", "Kandahar", "Molah", ...]}
  })
  console.log(countries.value)
}

const mop = ref(null)
const orangeSelected= ref(false)
const mtnSelected= ref(false)

const maleProfiles = [
"https://api.dicebear.com/6.x/avataaars/svg?seed=Garfield&eyebrows=default,defaultNatural,raisedExcited&eyes=closed,default,happy&mouth=default,smile",
"https://api.dicebear.com/6.x/avataaars/svg?seed=Jasper&eyebrows=default,defaultNatural,raisedExcited&eyes=closed,default,happy&mouth=default,smile",
"https://api.dicebear.com/6.x/avataaars/svg?seed=johnnnnn&eyebrows=default,defaultNatural,raisedExcited&eyes=closed,default,happy&mouth=default,smile",
"https://api.dicebear.com/6.x/avataaars/svg?seed=Casper&eyebrows=default,defaultNatural,raisedExcited&eyes=closed,default,happy&mouth=default,smile",
"https://api.dicebear.com/6.x/avataaars/svg?seed=Boby&eyebrows=default,defaultNatural,raisedExcited&eyes=closed,default,happy&mouth=default,smile",
"https://api.dicebear.com/6.x/avataaars/svg?seed=Miakkkk&eyebrows=default,defaultNatural,raisedExcited&eyes=closed,default,happy&mouth=default,smile",
"https://api.dicebear.com/6.x/avataaars/svg?seed=Daisyi&eyebrows=default,defaultNatural,raisedExcited&eyes=closed,default,happy&mouth=default,smile",
"https://api.dicebear.com/6.x/avataaars/svg?seed=Angeli&eyebrows=default,defaultNatural,raisedExcited&eyes=closed,default,happy&mouth=default,smile",
"https://api.dicebear.com/6.x/avataaars/svg?seed=Bearoo&eyebrows=default,defaultNatural,raisedExcited&eyes=closed,default,happy&mouth=default,smile",
"https://api.dicebear.com/6.x/avataaars/svg?seed=Babybo&eyebrows=default,defaultNatural,raisedExcited&eyes=closed,default,happy&mouth=default,smile",
"https://api.dicebear.com/6.x/avataaars/svg?seed=Garfieldsss&eyebrows=default,defaultNatural,raisedExcited&eyes=closed,default,happy&mouth=default,smile",
"https://api.dicebear.com/6.x/avataaars/svg?seed=n&eyebrows=default,defaultNatural,raisedExcited&eyes=closed,default,happy&mouth=default,smile",
"https://api.dicebear.com/6.x/avataaars/svg?seed=Babybovvcxdf&eyebrows=default,defaultNatural,raisedExcited&eyes=closed,default,happy&mouth=default,smile",
"https://api.dicebear.com/6.x/avataaars/svg?seed=Daisyi&eyebrows=default,defaultNatural,raisedExcited&eyes=closed,default,happy&mouth=default,smile",
"https://api.dicebear.com/6.x/avataaars/svg?seed=johnnnnn&eyebrows=default,defaultNatural,raisedExcited&eyes=closed,default,happy&mouth=default,smile",
"https://api.dicebear.com/6.x/avataaars/svg?seed=Bearoo&eyebrows=default,defaultNatural,raisedExcited&eyes=closed,default,happy&mouth=default,smile",
"https://api.dicebear.com/6.x/avataaars/svg?seed=henryyy&eyebrows=default,defaultNatural,raisedExcited&eyes=closed,default,happy&mouth=default,smile",
"https://api.dicebear.com/6.x/avataaars/svgseed=Bearoo&eyebrows=default,defaultNatural,raisedExcited&eyes=closed,default,happy&mouth=default,smile&skinColor=ae5d29,d08b5b,edb98a",
"https://api.dicebear.com/6.x/avataaars/svg?seed=Miakkkk&eyebrows=default,defaultNatural,raisedExcited&eyes=closed,default,happy&mouth=default,smile&skinColor=ae5d29,d08b5b,edb98a",
"https://api.dicebear.com/6.x/avataaars/svg?seed=Casperooo&eyebrows=default,defaultNatural,raisedExcited&eyes=closed,default,happy&mouth=default,smile&skinColor=ae5d29,d08b5b,edb98a",
"https://api.dicebear.com/6.x/avataaars/svg?seed=Bella&eyebrows=default,defaultNatural,raisedExcited&eyes=closed,default,happy&mouth=default,smile&skinColor=ae5d29,d08b5b,edb98a",
]
const femaleProfiles = [
"https://api.dicebear.com/6.x/avataaars/svg?seed=mel&eyebrows=default,defaultNatural,raisedExcited&eyes=closed,default,happy&mouth=default,smile&skinColor=ae5d29,d08b5b,edb98a",
"https://api.dicebear.com/6.x/avataaars/svg?seed=kevin&eyebrows=default,defaultNatural,raisedExcited&eyes=closed,default,happy&mouth=default,smile&skinColor=ae5d29,d08b5b,edb98a",
"https://api.dicebear.com/6.x/avataaars/svg?seed=le&eyebrows=default,defaultNatural,raisedExcited&eyes=closed,default,happy&mouth=default,smile&skinColor=ae5d29,d08b5b,edb98a",
"https://api.dicebear.com/6.x/avataaars/svg?seed=leticii&eyebrows=default,defaultNatural,raisedExcited&eyes=closed,default,happy&mouth=default,smile&skinColor=ae5d29,d08b5b,edb98a",
"https://api.dicebear.com/6.x/avataaars/svg?seed=leticiaaaa&eyebrows=default,defaultNatural,raisedExcited&eyes=closed,default,happy&mouth=default,smile&skinColor=ae5d29,d08b5b,edb98a",
"https://api.dicebear.com/6.x/avataaars/svg?seed=rut&eyebrows=default,defaultNatural,raisedExcited&eyes=closed,default,happy&mouth=default,smile&skinColor=ae5d29,d08b5b,edb98a",
"https://api.dicebear.com/6.x/avataaars/svg?seed=nell&eyebrows=default,defaultNatural,raisedExcited&eyes=closed,default,happy&mouth=default,smile&skinColor=ae5d29,d08b5b,edb98a",
"https://api.dicebear.com/6.x/avataaars/svg?seed=nellyy&eyebrows=default,defaultNatural,raisedExcited&eyes=closed,default,happy&mouth=default,smile&skinColor=ae5d29,d08b5b,edb98a",
]

watch(mop, (val)=>{
  console.log(val)
if(val== "Mobile Money"){
  mtnSelected.value = true
  orangeSelected.value = false

} else 
if(val== "Orange Money"){
  orangeSelected.value = true
  mtnSelected.value = false

} else if(val== "Mobile Money and Orange Money"){
  mtnSelected.value = true
  orangeSelected.value = true
}

});

watch(sex, (val)=>{
  console.log("gender: ", val)
  const iMale = Math.floor(Math.random() * (21 - 0 + 1)) + 0;
  const iFemale = Math.floor(Math.random() * (8 - 0 + 1)) + 0;

  if(val == "Male"){
    user.profileImg = maleProfiles[iMale];
    console.log(user.profileImg)
  } else if(val == "Female"){
    user.profileImg = femaleProfiles[iFemale];
    console.log(user.profileImg)
  }

});

const createUser= async()=> {
  isCreatingAccount.value = true
 try {
  await database
  .from('users')
  .insert({
    name: user.profileName,
    fullName: user.profileName,
    city: user.city,
    country: user.state,
    email: user.email,
    whatsapp:user.whatsapp,
    password: user.password1,
    profileIcon: user.profileImg,
    balance: 10,
    })
     alert("Account created succesfully")
    router.push({ path: '/login' })
    .then((r)=>window.location.reload())
    .catch(err => alert("ERROR"))
    

 } catch (error) {
  alert(error)
 }
}

const checkEmpty =async()=>{ 
  if(user.fullName==""){
    errorColor.value = "text-pink-600"
    errorMessage.value = "FullName cannot be empty"
  } else
  if(user.city==""){
    errorColor.value = "text-pink-600"
    errorMessage.value = "City cannot be empty"
  } else
  if(user.whatsapp==""){
    errorColor.value = "text-pink-600"
    errorMessage.value = "Whatsapp Number cannot be empty"
  } else
  if(user.om==""){
    errorColor.value = "text-pink-600"
    errorMessage.value = "Orange Money number cannot be empty"
  } else
  if(user.fullName==""){
    errorColor.value = "text-pink-600"
    errorMessage.value = "Mobile Money number cannot be empty"
  } else if(user.password1==""){
    errorColor.value = "text-pink-600"
    errorMessage.value = "Password cannot be empty"
  } 
else{alert("1st valdation successful")}
}

const verify=async()=>{
  if(user.profileName==""){
    errorColor.value = "text-pink-600"
    errorMessage.value = "Profile Name cannot be empty"
  } else
  if(user.fullName==""){
    errorColor.value = "text-pink-600"
    errorMessage.value = "FullName cannot be empty"
  } else
  if(user.city==""){
    errorColor.value = "text-pink-600"
    errorMessage.value = "City cannot be empty"
  } else
  if(user.profileImg ==""){
    errorColor.value = "text-pink-600"
    errorMessage.value = "Gender cannot be empty"
  } else
  if(user.whatsapp==""){
    errorColor.value = "text-pink-600"
    errorMessage.value = "Whatsapp Number cannot be empty"
  } else
  if((user.om=="") && (orangeSelected == true)){
    errorColor.value = "text-pink-600"
    errorMessage.value = "Orange Money number cannot be empty"
  } else
  if((user.momo=="") && (mtnSelected == true)){
    errorColor.value = "text-pink-600"
    errorMessage.value = "Mobile Money number cannot be empty"
  } else if(user.password1==""){
    errorColor.value = "text-pink-600"
    errorMessage.value = "Password cannot be empty"
  } else
      if(user.password1!== user.password2){
    errorMessage.value = "Passwords do not match"
    errorColor.value = "text-red-600"
  }
  else 
  if(user.whatsapp.length!=9){
    errorMessage.value = "Enter a valid whatsapp number"
    errorColor.value = "text-red-600"
}
  else if((user.email.includes("@gmail.com") ||
   user.email.includes("@yahoo.fr")) === false) {
    errorMessage.value = "Enter a valid email"
    errorColor.value = "text-red-600"
   }
else{
  errorMessage.value = "You filled the form correctly"
  errorColor.value = "text-green-600"
  isFormValid.value = true
  localStorage.setItem('@userName',user.profileName)
  localStorage.setItem('@userKey',user.password1)
 
  try {
    await createUser();
  } catch (error) {
    alert("Acount not created...")
  }

}

    }

    onMounted(() => {
      getCountries();
    })
</script>


<template>
<div v-if="isCreatingAccount">
<Preloader :msg="message" :bcolor="loadColor"/>
</div>
 <div v-else>
  <div v-motion-fade>
<v-row class="bg-gradient-to-r from-amber-200 to-emerald-200 ... 
       flex justify-center align-middle py-8" justify="center">
      <v-col
        cols="12"
        sm="10"
        md="8"
        lg="6"
      >
        <v-card ref="form">
          <div class="text-2xl text-gray-700
         font-extrabold mt-6 text-center curs">Create an Account</div>
          <v-card-text>
            <div class="text-xl font-bold my-2">
                User Infos
            </div>
            <v-text-field
              ref="profileName"
              v-model="user.profileName"
              label="Profile Name"
              placeholder="eg: John_D"
              required
            ></v-text-field>
            <v-text-field
              ref="fullName"
              v-model="user.fullName"
              label="Full Name"
              placeholder="eg: John Doe"
              required
            />
            <v-select
              v-model="sex"
              label="Gender"
              :items="gender"
            ></v-select>
            <v-text-field
              ref="city"
              v-model="user.city"
              label="City"
              placeholder="eg: Yaoundé"
              required
            ></v-text-field>
            <v-select
              v-model="user.state"
              label="Country"
              required
              :items="countries"
              placeholder="Centre"
            ></v-select>
            <div class="text-xl font-bold my-2">
                Contacts
            </div>

            <v-text-field
              v-model="user.email"
              label="Email"
              type = "email"
              required
              placeholder="eg: akpojohn6@gmail.com"
            ></v-text-field>

            <v-text-field
              v-model="user.whatsapp"
              label="Whatsapp Number"
              required
              placeholder="eg: 659036855"
            ></v-text-field>

           
            <div class="text-xl font-bold my-2">
                Passwords
            </div>
            <v-text-field
              v-model="user.password1"
              label="Set Password"
              required
              placeholder="79938"
              type="password"
            ></v-text-field>
            <v-text-field
              v-model="user.password2"
              label="Enter password again"
              required
              placeholder="79938"
              type="password"

            ></v-text-field>
          </v-card-text>
    <div v-if="!errorMessage.includes('No error')"
    class="text-xl font-bold text-center mb-4" :class="errorColor">{{ errorMessage }}</div>
          <v-divider class="mt-1"></v-divider>
 <div class="mx-8">
  <v-btn   
    :loading="loading"
    block
    color="success"
    size="large"
    variant="elevated"
    @click="verify"
  >
   Submit
  </v-btn></div>
         
          <div
          class="my-10 text-center ">
          <router-link to="/login" 
          class="text-lg font-bold text-blue-500
           hover:text-blue-700 focus:text-pink-600 ">Login instead</router-link>
          </div>
        </v-card>
      </v-col>
</v-row>
</div>
</div>
  </template>

<style scoped>
 .img1{
        width: auto;
        height: 50rem;
        background-image: url('https://cdn.pixabay.com/photo/2014/10/21/12/28/money-496229_960_720.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    @import url('https://fonts.googleapis.com/css2?family=Itim&family=Pacifico&display=swap');
.curs{
  font-family: 'Itim', cursive;
}
</style>