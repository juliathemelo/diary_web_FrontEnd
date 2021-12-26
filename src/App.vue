<template>
  <main>
    <router-view />
  </main>
</template>
<script>
export default {
  name: 'App',
  data: () => ({
    routes: [
      {name: 'Home', path: {path: '/'}},
    ]
  })
};
</script>
