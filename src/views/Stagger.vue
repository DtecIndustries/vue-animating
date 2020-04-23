<template>
  <div>
    <h1>GSAP stagger example</h1>
    <div id="container">
      <div v-for="card in cards" :key="card.id" class="card" ></div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  data(){
    return {
      cards: [
        { id: 4883 },
        { id: 5456 },
        { id: 6351 },
        { id: 7674 },
        { id: 2455 },
        { id: 3544 }
      ]
    }
  },
  mounted(){
    gsap.from('.card', {
      duration: 0.5,
      opacity: 0,
      scale: 0,
      y: 200,
      ease: 'power1',
      stagger: {
        each: 0.1,
        from: 'center'
      }
    })
  }
}
</script>

<style>
#container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>