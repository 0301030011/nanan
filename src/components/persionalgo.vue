<template>
	<div class="content">
		<h1 class="con">关于我们</h1>
        <div class="blank"></div>
                <div>{{ persionalgo.avatar}}</div>
        
                <div>{{ persionalgo.id}}</div>
                <div>{{ persionalgo.name}}</div>
                <div>{{ persionalgo.role}}</div>
                <div>{{ persionalgo.brth}}</div>
                <div>{{ persionalgo.job}}</div>
                <div>{{ persionalgo.address}}</div>
                <div>{{ persionalgo.telepone}}</div>
                <div>{{ persionalgo.hobby}}</div>
	</div>
</template>


<script>
import axios from 'axios';
export default {
  name: 'persionalgo',
  data () {
    return {
        persionalgo:null
    }
  },
  created(){
      axios.post('http://www.xerus.cn/nanan/public/userinfo')
      .then(response=>{
         console.log(response);
         this.persional = response.data;
      })
      .catch(error=>{
          console.log(error);
          alert('网络错误，不能访问');
      })
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