<template>
  <div id="app">
    user
  </div>
</template>

<style lang="less">
@import '../../styles/reset.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
@media (min-width: 640px) {
  html {
    height: 100%;
    font-size: 64PX !important;
  }
  body {
    min-height: 100%;
    width: 100%;
    background-color: #f0f3f5;
    font-size: 24PX !important;
  }
  #app {
    background-color: #ffffff;
    min-height: 100vh;
    max-width: 640PX;
    margin: 0 auto;
    position: relative;
  }
}
</style>
