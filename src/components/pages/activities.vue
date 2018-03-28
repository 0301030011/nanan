<template>
    <div class="content">
        <div class="title">活动空间</div>
        <ul class="items">
            <li v-for="activity in activities" @click="go_activity(activity.id)" class="item">
              <div class="item-title">{{ activity.title }}</div>
              <div class="item-content">{{ activity.content }}</div>
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
  name: 'activities',
  data () {
    return {
        activities:null
    }
  },
  mounted() {
    this.axios.post("http://www.xerus.cn/nanan/public/activities")
    .then(res => {this.activities=res.data.data})
  },
  methods:{
    go_activity(id){
        this.$router.push({
          name: 'activity',
          params: { id }
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/page.scss';
</style>