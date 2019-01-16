<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>Welcome to routing!</h1>
    <router-link :to="{ name: 'home' }" exact>Home</router-link>
    <router-link :to="{ name: 'login' }">Login</router-link>
    <router-link :to="{ name: 'stories' }">Stories</router-link>
    <!--route outlet-->
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1s linear;
}

.fade-enter-to {
  opacity: 0.8
}
.router-link-active {
color: green;
}
</style>
