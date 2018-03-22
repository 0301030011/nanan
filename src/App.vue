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
      clientHeight:document.documentElement.clientHeight
    };
  },
  beforeUpdate() {
      // 动态设置背景图的高度为浏览器可视区域高度
      // 首先在Virtual DOM渲染数据时，设置下背景图的高度．
      this.clientHeight.height = `${document.documentElement.clientHeight}px`;
      // 然后监听window的resize事件．在浏览器窗口变化时再设置下背景图高度．
      const that = this;
      window.onresize = function temp() {
          that.clientHeight = `${document.documentElement.clientHeight}px`;
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
    background-color: #927;
  display:flex;
  justify-content:center;
  align-items:center;
}
#content{
} 
</style>
