<template>

    <div>
        <h1> the username is {{ storeCounter.username }}</h1>
        <h3>the password is {{ storeCounter.password }}</h3>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nemo sapiente voluptas rerum accusamus assumenda quam? Impedit dolor dicta pariatur non quia eligendi, voluptatem dignissimos, ad ipsum adipisci expedita quos!</p>
    </div>
</template>
<script setup>
import { useCounterStore } from '@/stores/counter';
const storeCounter=useCounterStore()



</script>