<template>
	<div class="content">
		<service class="service"></service>
		<div class="center-group">
			<weather class="weather"></weather>
			<div class="center-group-footer">
				<div class="footer-left">
					<older class="older"></older>
					<volunteer class="volunteer"></volunteer>
					<activity class="activity"></activity>
				</div>
				<policy class="policy"></policy>
			</div>
		</div>
		<div class="right-group">
			<persional class="persional" @click.native="landed"></persional>
			<message class="message"></message>
			<about class="about" @click.native="aboutus"></about>
		</div>
	</div>
</template>

<script>
import service from './units/service'
import weather from './units/weather'
import older from './units/older'
import volunteer from './units/volunteer'
import activity from './units/activity'
import policy from './units/policy'
import persional from './units/persional'
import message from './units/message'
import about from './units/about'
import router from '../router'
export default {
  name: 'layout',
  data () {
    return {

    }
  },
  components:{
  	service,
  	weather,
  	older,
  	volunteer,
  	activity,
  	persional,
  	policy,
  	message,
  	about
  },
  methods:{
	  landed:()=>{
		  router.push({path:'/landed'})
	  },
	  aboutus:()=>{
		  router.push({path:'/aboutus'})
	  }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/blur.scss';
@import '../style/rectangle.scss';
@import '../style/flex.scss';
@mixin rectangle($width,$height){
	width:$width;
	height:$height;
	border-radius:5px;
}
.flex{
	display:flex;
	justify-content:space-between;
}
.content{
	@include rectangle(1136px,680px);
	@extend .flex;
}
.service{
	@include rectangle(288px,100%);
	@extend .blur;
}

.center-group{
	@include rectangle(648px,100%);
	@extend .flex;
	flex-direction:column;
	.weather{
		@include rectangle(100%,160px);
		@extend .blur;
	}
	.center-group-footer{
		@include rectangle(100%,500px);
		@extend .flex;
		.footer-left{
			@include rectangle(340px,100%);
			@extend .flex;
			flex-wrap:wrap;
			.older,.volunteer{
				@include rectangle(160px,160px);
				@extend .blur;
			}
			.activity{
				@include rectangle(100%,320px);
				margin-top:20px;
				@extend .blur;
			}
		}
		.policy{
			@include rectangle(288px,100%);
			@extend .blur;
		}
	}
}

.right-group{
	@include rectangle(160px,100%);
	@extend .flex;
	flex-direction:column;
	.persional,.about{
		@include rectangle(160px,160px);
		@extend .blur;
	}
	.message{
		@include rectangle(160px,320px);
		@extend .blur;
		.persional,.about{
		@include rectangle(160px,160px);
		}
	.message{
		@include rectangle(160px,320px);
		margin:20px 0;
		}
	}
}
</style>