import { acceptHMRUpdate, defineStore } from 'pinia'

interface Auth {
  access_token: string
  refresh_token: string
}
export const useAuthStore = defineStore('auth', () => {
  const auth = ref<Auth>({
    access_token: '',
    refresh_token: '',
  })
  return { auth }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
