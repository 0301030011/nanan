<template>
	<div class="content">
		<p class="title">老人</p>
		<div class="detail">这些需要关注的老人</div>
	</div>
</template>

<script>
export default {
  name: 'older',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/unit.scss';
.content{
	display:flex;
	flex-direction:column;
    #content{
    	background-color:#800040;
    }
}
</style>