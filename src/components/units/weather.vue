<template>
	<div class="content">
		<div class="title">天气预报</div>
		<div class="detail">
			<iframe allowtransparency="true" frameborder="0" width="620" height="140" scrolling="no" src="//tianqi.2345.com/plugin/widget/index.htm?s=2&z=2&t=0&v=0&d=5&bd=0&k=000000&f=000000&ltf=009944&htf=cc0000&q=0&e=0&a=1&c=54511&w=620&h=100&align=center"></iframe>
		</div>
	</div>
</template>

<script>
export default {
  name: 'weather',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/unit.scss';
#content{
	background-color:#FD8008;
}
</style>