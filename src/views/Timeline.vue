<template>
  <div>
    <h1>GSAP timeline</h1>
    <div class="images">
      <img class="first" src="../assets/logo.png" alt="logo">
      <img class="second" src="../assets/logo.png" alt="logo">
      <img class="third" src="../assets/logo.png" alt="logo">
      <img class="fourth" src="../assets/logo.png" alt="logo">
      <img class="fifth" src="../assets/logo.png" alt="logo">
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  mounted(){
    let tl = gsap.timeline({ repeat: 3, repeatDelay: 1 }) /* use repeat: -1 to loop infinite */

    //default timeline behavior: each timeline animation starts after previous animation 
    tl.to('.first', { x: 700, duration: 2, ease: 'expo.out' })

    //animation start absolute within timeline
    tl.to('.second', { x: 700, duration: 2, ease: 'expo.out' }, 0.5)

    //animation start relative within timeline
    tl.to('.third', { x: 700, duration: 2, ease: 'expo.out' }, '-=.75')

    //animation starts at same time as previous animation
    tl.to('.fourth', { x: 700, duration: 2, ease: 'expo.out' }, '<')

    //animation starts at same time as previous animation + relative delay
    tl.to('.fifth', { x: 700, duration: 2, ease: 'expo.out' }, '<.5')
  }
}
</script>

<style>
.images img{
  margin: 0.8em;
  display: block;
  height: 2.5em;
  width: auto;
}
</style>