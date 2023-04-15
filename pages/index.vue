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
    <ElButton>123</ElButton>
  </div>
</template>
