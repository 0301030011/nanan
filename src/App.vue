<template>
  <div id="app" :style="{ height:height+'px' }">
    <router-view id="content"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      height:document.documentElement.clientHeight
    };
  },
  mounted() {
    this.height = `${document.documentElement.clientHeight}px`;
    const that = this;
    window.onresize = function temp() {
        that.height = `${document.documentElement.clientHeight}px`;
    };
},
  created(){
    this.height=document.documentElement.clientHeight;
  }
}
</script>

<style lang="scss">
#app{
  background-image:url('./image/bg.jpg');
  background-size:cover;
  display:flex;
  justify-content:center;
  align-items:center;
}
</style>
