import { createAuthClient } from "better-auth/vue"

const authClient = createAuthClient()

export const useAuth = () => {

  const session = authClient.useSession()
  const user = computed(() => session.value.data?.user || null)
  const {csrf} = useCsrf();
  const headers = new Headers()
  headers.append("csrf-token", csrf)

  const signInWithGithub = async () => {
    try {
      const data = await authClient.signIn.social({
        provider: "github",
        callbackURL: '/dashboard',
        errorCallbackURL: '/error',
        fetchOptions:{
          headers,
        }
      })
      return data
    } catch (error) {
      console.error("GitHub Sign-in Error:", error)
      throw error
    }
  }

    const logOut = async () => {
      const {csrf} = useCsrf();
      const headers = new Headers()
      headers.append("csrf-token", csrf)

    try {
      const data = await authClient.signOut({
        fetchOptions:{
          headers,
        }
      })
      navigateTo('/')
      return data
    } catch (error) {
      console.error(" Sign-out Error:", error)
      throw error
    }
  }

  return {
    signInWithGithub,
    logOut,
    user
  }
}
``