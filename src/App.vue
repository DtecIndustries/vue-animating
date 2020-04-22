<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
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
</style>
