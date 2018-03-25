<template>
    <div class="content">
      <div class="title">消息</div>
      <div class="detail">
        <ul>
          <li>政策展示政策展示政策展示政策展示政策展示政策展示政策展示政策展示政策展示</li>
          <li>政策展示政策展示政策展示政策展示政策展示政策展示政策展示政策展示政策展示</li>
          <li>政策展示政策展示政策展示政策展示政策展示政策展示政策展示政策展示政策展示</li>
          <li>政策展示政策展示政策展示政策展示政策展示政策展示政策展示政策展示政策展示</li>
          <li>政策展示政策展示政策展示政策展示政策展示政策展示政策展示政策展示政策展示</li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'activities',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/blur.scss';
@import '../../style/rectangle.scss';
@import '../../style/flex.scss';
.content{
    @include rectangle(1136px,680px);
    @extend .flex;
    @extend .blur;
}
</style>