export function usePermission() {
  const userStore = useUserStore()

  const hasPermission = (permission: string) => {
    return userStore.user.permissions.includes(permission)
  }

  return { hasPermission }
}
