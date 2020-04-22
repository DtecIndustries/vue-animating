<template>
  <div>
    <button @click="isOpen = !isOpen">My profile</button>

    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
      :css="false"
    >
      <div class="profile-drawer" v-if="isOpen">
        <img src="../assets/logo.png" alt="logo" />
        <div>item</div>
        <div>item</div>
        <div>item</div>
        <div>item</div>
      </div>
    </transition>
  </div>
</template>

<script>
import Velocity from 'velocity-animate'

export default {
  data(){
    return {
      isOpen: false
    }
  },
  methods: {
    beforeEnter(el){
      el.style.opacity = 0
      el.style.width = '0em'
    },
    enter(el, done){
      Velocity(
        el,
        { opacity: 1, width: '12em' },
        { duration: 1000,  easing: [60,10], complete: done }
      )
    },
    leave(el, done){
      Velocity(
        el,
        { opacity: 0, width: '0em' },
        { duration: 500,  easing: 'easeInCubic', complete: done }
      )
    }
  }
}
</script>

<style>
.profile-drawer{
  background-color: #ddd;
  padding: 2em;
}

.profile-drawer img{
  height: 2.5em;
  width: auto;
}

.profile-drawer div{
  background-color: #cecece;
  padding: 2em;
}
</style>