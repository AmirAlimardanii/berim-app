export const useUiStore = defineStore('useUiStore', () =>{

const sidebarOpen = ref(true)
const toggleSidebar = () => {
    sidebarOpen.value = !sidebarOpen.value
}


return { sidebarOpen, toggleSidebar }
},

 {
    persist: true,
  },


)