<template>
  <div class="list">
    <input type="text" v-model="newContact" placeholder="name" />
    <button @click="addContact">Add contact</button>
    <ul>
      <li v-for="contact in contacts" :key="contact">
        {{ contact }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      newContact: '',
      contacts: [ 'Luke Skywalker', 'Kylo Ren', 'Leia Organa' ]
    }
  },
  methods: {
    addContact(){
      this.contacts.push(this.newContact)
      this.newContact = ''
    }
  }
}
</script>

<style>
.list ul li{
  list-style: none;
  padding-bottom: 0.35em;
}
</style>
