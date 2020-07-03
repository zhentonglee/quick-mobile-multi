<template>
  <div class="home">
    <div class="test">this page show test</div>
  </div>
</template>

<script>

export default {
  name: 'Home'
};
</script>

<style lang="less">
.home {
  .test {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 1s;
    font-size: 24px;
  }
}
</style>
