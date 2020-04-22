<template>
  <div class="home">
    <button @click="toggleModal">Open</button>
      <transition name="fade">
        <div v-if="isOpen" class="modal">
          <button @click="toggleModal">Close</button>
        </div>
      </transition>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data(){
    return {
      isOpen: false
    }
  },
  methods: {
    toggleModal(){
      this.isOpen = !this.isOpen
    }
  }
}
</script>
<style>
.fade-enter{
  opacity: 0;
}

.fade-enter-active{
  transition: opacity 0.5s ease-out;
}

.fade-leave-to{
  opacity: 0;
}

.fade-leave-active{
  transition: opacity 0.5s ease-out;
}
</style>