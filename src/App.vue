<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
   

    <div class="app">

      <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/about">About</RouterLink> |
        <RouterLink to="/marketing">Marketing</RouterLink>

      </nav>
      <RouterView />
    </div>
  </header>

  
</template>
<style>
.app{
  margin:0 auto;
  text-align: center;
}

</style>
