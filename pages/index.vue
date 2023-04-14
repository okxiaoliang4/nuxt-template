<script setup lang="ts">
definePageMeta({
  requiresAuth: true,
  roles: ['admin', 'user'],
  permissions: ['index'],
})
</script>

<template>
  <div>
    Hello
  </div>
</template>
