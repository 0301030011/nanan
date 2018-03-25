<template>
    <div class="content">
        <div class="title">{{ policy.title }}</div>
        <div class="detail">{{ policy.content }}</div>
    </div>
</template>

<script>
export default {
  name: 'policy',
  data () {
    return {
        policy:null,
    }
  },
  mounted() {
    this.axios.post("http://www.xerus.cn/nanan/public/policy",{id:this.$route.params.id})
    .then(res => {this.policy=res.data.data[0]})
  }
}
</script>

<style lang="scss" scoped>
    @import '../../style/detail.scss';
</style>