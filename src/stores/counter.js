import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)  
  
  const oddoreven=computed(()=>{
    if(count.value%2===0){
      return 'even'}
    return 'odd '
  })
  
  function increment() {
    count.value++
  }
  function decrement(){
    count.value--
  }
const username=ref('')
const password=ref('password')
const addPass = (pass) => {
  password = pass;
}
 

  return { count, doubleCount, increment,decrement ,oddoreven,username,password,addPass }
})
