

<template>
  
 <div clas="home">
  <div class="home">
    <div class="count"> {{ storeCounter.count }} </div> 
  </div>
  <div class="buttons">
    <button @click="storeCounter.decrement">-</button>
    <button @click="storeCounter.increment">+</button>
  </div>
  <hr>
  <div>
    this counter is :{{ storeCounter}}
  </div>
  <div> the odd or even number  {{ storeCounter.oddoreven }}</div>
  <hr>
  <div>
   <h4> the editor:</h4>
    <input 
    v-model="storeCounter.count"
    type="text"
    id="numbers">
  </div>

  <div>
   <h4> the editor:</h4>
    <input 
    v-model="storeCounter.username"
    type="text"
    id="numbers">
  </div>
   
 </div>
</template>

<script setup>
import Counter from '@/components/Counter.vue'

import { useCounterStore } from '@/stores/counter';
const storeCounter=useCounterStore()







</script>


<style>

.count{
  font-size: 50px;
  margin: 20px;
}
.buttons button{
  font-size: 30px;
  margin: 20px;

}



</style>
