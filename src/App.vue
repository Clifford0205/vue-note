<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
      |
      <router-link :to="{ name: 'VmodelComputed' }">V-model</router-link>
      |
      <router-link :to="{ name: 'emit' }">emit</router-link>
      |
      <router-link :to="{ name: 'sync' }">sync</router-link>
      |
      <router-link :to="{ name: 'props' }">Props</router-link>
      |
      <router-link :to="{ name: 'slot' }">Slot</router-link>
      |
      <router-link :to="{ name: 'select' }">Select</router-link>
      |
      <router-link :to="{ name: 'Ref' }">Ref</router-link>
      |
      <router-link :to="{ name: 'Chart' }">Chart</router-link>
      |
      <router-link :to="{ name: 'DatePicker' }">DatePicker</router-link>
      |
      <router-link :to="{ name: 'CheckBox' }">CheckBox</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import './assets/scss/main';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
