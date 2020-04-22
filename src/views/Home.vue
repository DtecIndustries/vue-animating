<template>
  <div class="home">
    <button @click="toggleModal">Open</button>
    <div v-if="isOpen" class="modal">
      <button @click="toggleModal">Close</button>
    </div>
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