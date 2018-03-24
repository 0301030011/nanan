<template>
	<div class="content">
		<div class="title" @click="jump">关于我们</div>
	</div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {

    }
  },
  methods:{
    jump:function(){
      this.$router.push('/aboutus');
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/unit.scss';
#content{
	background-color:#108001;
}
</style>