import { createAuthClient } from "better-auth/vue"

const authClient = createAuthClient()

export const useAuth = () => {

  const session = authClient.useSession()
  const user = computed(() => session.value.data?.user || null)

  const signInWithGithub = async () => {
    try {
      const data = await authClient.signIn.social({
        provider: "github",
        callbackURL: '/dashboard',
        errorCallbackURL: '/error',
      })
      return data
    } catch (error) {
      console.error("GitHub Sign-in Error:", error)
      throw error
    }
  }

  return {
    signInWithGithub,
    user
  }
}
``