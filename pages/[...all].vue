<script lang="ts" setup>
</script>

<template>
  <div class="page-not-found">
    <h1>404</h1>
    <p>Page not found.</p>
  </div>
</template>

<style>
.page-not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

h1 {
  font-size: 10rem;
  margin-bottom: 0;
  text-align: center;
  animation: bounce 1s ease-in-out infinite;
}

p {
  font-size: 2rem;
  text-align: center;
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-50px);
  }
}
</style>
