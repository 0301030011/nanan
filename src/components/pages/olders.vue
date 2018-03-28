<template>
    <div class="content">
        <div class="title">老人列表</div>
        <ul class="list">
            <li v-for="older in olders" class="man">
                <div :style="{backgroundImage: 'url(' + older.avatar + ')'}" class="avatar"></div>
                <div class="info">
                    <h2 class="name">{{ older.name }}<span v-if="older.name==null">未知</span></h2>
                    <ul>
                        <li class="name">性别：{{older.sex}}<span v-if="older.sex==null">未知</span></li>
                        <li class="name">年龄：{{older.both}}<span v-if="older.both==null">未知</span></li>
                        <li class="name">工作：{{older.job}}<span v-if="older.job==null">未知</span></li>
                        <li class="name">爱好：{{older.hobby}}<span v-if="older.hobby==null">未知</span></li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'olders',
  data () {
    return {
        olders:null
    }
  },
  mounted() {
    this.axios.post("http://www.xerus.cn/nanan/public/volunteers")
    .then(res => {this.olders=res.data})
    // .then(res => {console.log(res.data)})
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