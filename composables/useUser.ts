import { acceptHMRUpdate, defineStore } from 'pinia'

interface User {
  roles: string[]
  permissions: string[]
}
export const useUserStore = defineStore('user', () => {
  const user = ref<User>({
    roles: ['admin'],
    permissions: ['index'],
  })
  return { user }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
