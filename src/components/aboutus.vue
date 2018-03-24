<template>
	<div class="content">
		<h1 class="con">关于我们</h1>
        <div class="blank"></div>
        <ul>
            <li class="con">关于我们关于我们关于我们关于我们</li>
            <li class="con">关于我们关于我们关于我们关于我们</li>
            <li class="con">关于我们关于我们关于我们关于我们</li>
            <li class="con">关于我们关于我们关于我们关于我们</li>
            <li class="con">关于我们关于我们关于我们关于我们</li>
            <li class="con">关于我们关于我们关于我们关于我们</li>
            <li class="con">关于我们关于我们关于我们关于我们</li>
            <li class="con">关于我们关于我们关于我们关于我们</li>
            <li class="con">关于我们关于我们关于我们关于我们</li>
            <li class="con">关于我们关于我们关于我们关于我们</li>            
        </ul>
	</div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/unit.scss';
@import '../style/blur.scss';
@import '../style/rectangle.scss';
#content{
    @include rectangle(1136px,680px);
    @extend .blur;
}
.con{
    text-align: center;
}
.blank{
    height: 100px;
}
li{
    margin-bottom: 10px;
    font-size: 18px;
}
</style>