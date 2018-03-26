<template>
	<div class="content">
    <div class="cont">
      <h1 class="con">注册</h1>
      <div class="input">
    <p>邮箱: <input type="text" v-model="email"></p>
      </div>
      <div class="input">
    <p>密码: <input type="password" v-model="password"></p>    
      </div>
      <div class="input">
    <p>姓名: <input type="text" v-model="name"></p>
      </div>
		<button @click="register" class="ture">确定</button>
    <button @click="landed" class="register">返回</button>
    </div>
    <div class="clear"></div>
    <p class="red con">{{msg}}</p>
	</div>
</template>

<script>
import axios from "axios";
export default {
  name: "registered",
  data() {
    return {
      email: null,
      password: null,
      name: null,
      status: null,
      msg: null
    };
  },
  methods: {
    register: function() {
      axios
        .post("http://www.xerus.cn/nanan/public/register", {
          email: this.email,
          password: this.password,
          name: this.name
        })
        .then(response => {
          console.log(response);
          this.status = response.data.status;
          if (this.status == 0) {
            this.$router.push("/landed");
          } else if (this.status == 1) {
            this.msg = "邮箱已经存在";
            this.email = null;
            // this.password = null;
            // this.name = null;
          }
          // this.msg = response.data.msg;
        })
        .catch(error => {
          console.log(error);
          alert("网络错误，不能访问");
        });
    },
    landed: function() {
      this.$router.push("/landed");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../style/unit.scss";
@import "../style/landed.scss";
</style>