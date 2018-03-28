<template>
    <div class="content">
        <div class="title">政策展示</div>
        <ul class="items">
            <li v-for="policy in policies" @click="go_policy(policy.id)" class="item">
              <div class="item-title">{{ policy.title }}</div>
              <div class="item-content">{{ policy.content }}</div>
            </li>
        </ul>
<!--         <div class="arrow">
            <div @click="previous">◀</div>
            <div @click="next"  style="margin-left:20px;">▶</div>
        </div> -->
    </div>
</template>

<script>
export default {
  name: 'policies',
  data () {
    return {
        policies:null
    }
  },
  mounted() {
    this.axios.post("http://www.xerus.cn/nanan/public/policies")
    .then(res => {this.policies=res.data.data})
  },
  methods:{
    go_policy(id){
        this.$router.push({
          name: 'policy',
          params: { id }
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/page.scss';
</style>