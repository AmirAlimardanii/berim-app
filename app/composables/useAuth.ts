import { createAuthClient } from "better-auth/client"

const authClient = createAuthClient()

export const useAuth = () => {
  const signInWithGithub = async () => {
    try {
      const data = await authClient.signIn.social({
        provider: "github",
        callbackURL: '/dashboard',
      })
      return data
    } catch (error) {
      console.error("GitHub Sign-in Error:", error)
      throw error
    }
  }

  return {
    signInWithGithub,
  }
}
``