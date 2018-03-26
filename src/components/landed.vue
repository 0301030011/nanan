<template>
	<div class="content">    
    <div class="cont">
      <h1 class="con">登陆</h1>
      <div class="input">
    <p>邮箱: <input type="text" v-model="email"></p>
      </div>
      <div class="input">
    <p>密码: <input type="password" v-model="password"></p>
      </div>
		<button @click="landed" class="ture">确定</button>
    <button @click="registered" class="register">注册</button>
    </div>
    <div class="clear"></div>
    <p class="red con">{{msg}}</p>
    
	</div>  
</template>

<script>
import axios from "axios";
export default {
  name: "landed",
  data() {
    return {
      email: null,
      password: null,
      status: null,
      msg: null
    };
  },
  methods: {
    landed: function() {
      axios
        .post("http://www.xerus.cn/nanan/public/login", {
          email: this.email,
          password: this.password
        })
        .then(response => {
          console.log(response);
          this.status = response.data.status;
          if (this.status == 0) {
        this.$router.push("/persionalgo");
      } else if (this.status == 1) {
        this.msg = "邮箱或密码错误!!!";
        this.email = null;
        this.password = null;
      }
          // this.msg = response.data.msg;
        })
        .catch(error => {
          console.log(error);
          alert("网络错误，不能访问");
        });
      
    },
    registered: function() {
      this.$router.push("/registered");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../style/unit.scss";
@import "../style/landed.scss";
</style>