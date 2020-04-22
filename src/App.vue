<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Modal</router-link> |
      <router-link to="/list">List</router-link> |
      <router-link to="/drawer">Drawer</router-link>
    </div>
    <transition name="slide-fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

input {
  display: inline-block;
  box-sizing: border-box;
  width: 30%;
  height: 1.8em;
  padding: 0.5em;
  margin: 0.2em;
  font: 0.8em 'Avenir', Helvetica, sans-serif;
}

button {
  margin: 0.5em;
  padding: 0.8em 1.6em;
  border: none;
  border-radius: 0.3em;
  background-color: #42b983;
  color: white;
}

.modal{
  min-width: 350px;
  min-height: 350px;
  background-color: #ddd;
  padding: 10px;
  margin: 0 auto;
  margin-top: 20px;
}

/*** TRANSITIONS ***/
.fade-enter,
.fade-leave-to{
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.5s ease-out;
}

.slide-fade-enter{
  transform: translateX(20px);
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active{
  transition: all 0.2s ease;
}

.slide-fade-leave-to{
  transform: translateX(-20px);
  opacity: 0;
}

.slide-up-enter{
  transform: translateY(10px);
}

.slide-up-enter-active{
  transition: all 0.2s ease;
}

.slide-up-move{
  transition: transform 0.2s ease;
}
</style>
