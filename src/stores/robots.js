import { defineStore } from 'pinia'

export const useRobotsStore = defineStore({
    id: 'robots-store',
    state: () => ({
        robots: [],
    }),
    actions: {
        print() {
            console.log("User infos are;")
            console.log(this);
        }
    },
  })

  
  
  
  
  
  
