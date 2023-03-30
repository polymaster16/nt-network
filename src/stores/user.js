import { defineStore } from 'pinia'

export const useUserStore = defineStore({
    id: 'user-store',
    state: () => ({
        name: 'user.name',
        fullName : 'user.fullName',
        profileIcon : 'user.profileIcon',
        whatsapp : 'user.whatsapp',
        email :' user.email',
        password : 'user.password',
        city : 'user.city',
        country : 'user.country',
        balance: 'user.balance',
        subscription:'',
        new_task_date:''
    }),
    actions: {
        print() {
            console.log("User infos are;")
            console.log(this.fullName+ ', '
            +this.whatsapp+ ', '+ this.email+ ', '
            +this.password+ ', '+
            this.city+ ', '
            +this.country+ ', ') 

        }
    },
  })

  
  
  
  
  
  
