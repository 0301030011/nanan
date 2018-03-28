<template>
    <div class="content">
        <div class="title">{{ activity.title }}</div>
        <div class="detail">{{ activity.content }}</div>
    </div>
</template>

<script>
export default {
  name: 'activity',
  data () {
    return {
        activity:null,
    }
  },
  mounted() {
    this.axios.post("http://www.xerus.cn/nanan/public/activity",{id:this.$route.params.id})
    .then(res => {this.activity=res.data.data})
  }
}
</script>

<style lang="scss" scoped>
    @import '../../style/detail.scss';
</style>