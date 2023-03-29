import { defineStore } from 'pinia'

export const useTasksStore = defineStore({
    id: 'tasks-store',
    state: () => ({
        tasks: [],
    }),
    actions: {
        print() {
            console.log("User infos are;")
            console.log(this);
        }
    },
  })

  
  
  
  
  
  
