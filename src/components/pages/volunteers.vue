<template>
    <div class="content">
        <div class="title">志愿者列表</div>
        <ul class="list">
            <li v-for="volunteer in volunteers" class="man">
                <div :style="{backgroundImage: 'url(' + volunteer.avatar + ')'}" class="avatar"></div>
                <div class="info">
                    <h2 class="name">{{ volunteer.name }}<span v-if="volunteer.name==null">未知</span></h2>
                    <ul>
                        <li class="name">性别：{{volunteer.sex}}<span v-if="volunteer.sex==null">未知</span></li>
                        <li class="name">年龄：{{volunteer.both}}<span v-if="volunteer.both==null">未知</span></li>
                        <li class="name">工作：{{volunteer.job}}<span v-if="volunteer.job==null">未知</span></li>
                        <li class="name">爱好：{{volunteer.hobby}}<span v-if="volunteer.hobby==null">未知</span></li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'volunteers',
  data () {
    return {
        volunteers:null
    }
  },
  mounted() {
    this.axios.post("http://www.xerus.cn/nanan/public/volunteers")
    .then(res => {this.volunteers=res.data})
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