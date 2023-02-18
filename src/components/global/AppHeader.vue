<template>
<nav class="navbar bg-body-tertiary">
  <div class="container-fluid d-flex justify-content-between">
    <router-link to="/" class="navbar-brand ms-3"> App </router-link>
    <div class="d-flex justify-content-end">
      <router-link class="btn btn-secondary" to="/users"> Users </router-link>
      <router-link class="btn btn-secondary ms-2" to="/"> Posts </router-link>
    </div>
  </div>
</nav>
</template>
<style scoped>
.navbar {
  background: lightgrey !important;
}
</style>