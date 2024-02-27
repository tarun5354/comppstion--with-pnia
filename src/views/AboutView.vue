<template>
  <div class="about">
    <h1>about</h1>
    <button @click="storeCounter.increment" class="counter-button">{{ storeCounter.count }}</button>

    </div>
    <h2>{{ storeCounter.username}}</h2>


  <form @submit.prevent="handleSubmit">
   <h4> the password editor:</h4>
    <input v-model="storeCounter.password" type="text" id="numbers" />
    
  </form>
    </template>


<script setup>
import {useCounterStore} from '@/stores/counter';


const storeCounter=useCounterStore()




</script>


<style>
.counter-button{
  font-size: 50px;
}

</style>



 

