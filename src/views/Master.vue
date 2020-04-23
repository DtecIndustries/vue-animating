<template>
  <div>
    <h1>GSAP nested timelines</h1>
    <div id="container">
      <div class="tl1-images">
        <img class="first" src="../assets/logo.png" alt="logo">
        <img class="second" src="../assets/logo.png" alt="logo">
        <img class="third" src="../assets/logo.png" alt="logo">
        <img class="fourth" src="../assets/logo.png" alt="logo">
      </div>

      <img id="img-main" src="../assets/logo.png" alt="logo">
    </div>
    <button @click="play">Play</button>
  </div>
</template>

<script>
import gsap from 'gsap'

let masterTl = gsap.timeline()

export default {
  methods: {
    play(){
      masterTl.add(this.firstTl())
      masterTl.add(this.secondTl())
      masterTl.play()
    },
    firstTl(){
      let tl = gsap.timeline()

      tl.to('.first', {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: 'bounce.out'
      })

      tl.to('.second', {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: 'bounce.out'
      }, '<.3')

      tl.to('.third', {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: 'bounce.out'
      }, '<.3')

      tl.to('.fourth', {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: 'bounce.out'
      }, '<.3')

      return tl
    },
    secondTl(){
      let tl = gsap.timeline()

      tl.to('#img-main', {
        opacity: 1,
        filter: 'blur(0)',
        scale: 1,
        duration: 0.4,
        ease: 'slow'
      })

      return tl
    }
  }
}
</script>

<style>
.tl1-images img{
  transform: scale(0);
  opacity: 0;
  margin: 0.8em;
  display: block;
  height: 2.5em;
  width: auto;
}

#img-main{
  height: 8em;
  width: 8em;
  opacity: 0;
  filter: blur(2px);
}
</style>