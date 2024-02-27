<template>
    <div class="home">
     <div class="count"> {{ storeCounter.count }} </div> 

     </div>
     </template>
     <script setup>
         import { useCounterStore } from '@/stores/counter';
          const storeCounter=useCounterStore()
    </script>