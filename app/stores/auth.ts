export const useAuthStore = defineStore('useAuthStore', () =>{

const loading = ref(false)
const { signInWithGithub, user } = useAuth()

const signIn = async () => {
  try {
    loading.value = true
    const result = await signInWithGithub()
    console.log("Sign in successful:", result)
  } catch (err) {
    console.error("Sign in failed:", err)
  }finally{
    loading.value = false
  }
}

return { loading, signIn, user }


})