<script setup>
import TabsBar from './components/TabsBar.vue';
import TopBar from './components/TopBar.vue';
import { ref , onMounted, watch } from 'vue';
import database from './supabase';
import { useRouter } from 'vue-router';
import { useUserStore } from './stores/user';
import { useRobotsStore } from './stores/robots';

const router = useRouter();
const currentRouteName = router.currentRoute.value.name;

const tabBarVisible = (currentRouteName=== 'login') ? true : false;

const userStore = useUserStore();
const robots = ref([])
 const robotsStore = useRobotsStore()
 const name = ref()
 const loading = ref(false)
const setUserStore = async() =>{
  try {
    const {data} =  await database
    .from('users')
    .select('*')
    .eq('name',name.value)
      
    const user = data[0];
    userStore.$state = user

    console.log('userStoreName' , userStore.fullName);
   userStore.print()
   } catch (error) {
     console.log(error.message)
   }
 }

const setRobotsStore = async()=>{
  loading.value = true
    try {
        const { data } = await database
  .from('robots')
  .select('*')
 robots.value = data

 robots.value.sort(
   (x, y) => 
    (parseInt(x.entry) < parseInt(y.entry) ) ? -1 :
     (parseInt(x.entry) >parseInt(y.entry) ) ? 1 :
       0);

       robotsStore.$state = {
        robots: robots.value
       }
 console.log("data"+data)
 console.log("robots"+robots.value)
 console.log(robotsStore.robots)

 loading.value = false
    } catch (error) {
        console.log(error)
    }
}
onMounted(() => {
  name.value = localStorage.getItem('@userName')
  console.log("App mounted")
  console.log("name: ",  name)
  setUserStore();
  setRobotsStore();

})




</script>

<template>
   <TopBar/>

   <div 
   class="bg-gradient-to-r from-blue-100 to-indigo-100 ... 
       flex flex-col justify-center align-middle ">
<router-view/>
 </div>

  <TabsBar/>
</template>

<style scoped>

</style>
