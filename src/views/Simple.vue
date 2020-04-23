<template>
  <div>
    <h1>Simple GSAP example</h1>
    <transition appear @before-enter="beforeEnter" @enter="enter" :css="false">
      <div class="card"></div>
    </transition>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  methods: {
    beforeEnter(el){
      el.style.opacity = 0
      el.style.transform = 'scale(0,0)'
    },
    enter(el, done){
      gsap.to(el, {
        duration: 1,
        opacity: 1,
        scale: 1,
        ease: 'bounce.out',
        onComplete: done
      })
    }
  }
}
</script>

<style>

</style>