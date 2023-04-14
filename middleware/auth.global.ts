export default defineNuxtRouteMiddleware((to) => {
  const authStore = useAuthStore()
  if (to.meta.requiresAuth && !authStore.auth.access_token)
    return navigateTo('/login')
})
