<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/b7/4d725b6395350b02.jpg_640x200_cb692cdc.jpg'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/9a/796d72cef4e26802.jpg_640x200_96010f70.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  //受限于scoped，所以选择样式穿透
  .wrapper >>> .swiper-pagination-bullet-active
    background: red !important
  .wrapper
    // 这里是固定页面元素的做法，不让页面因为图片暂时没有加载出来而出现浮动
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background: #eee
    .swiper-img
      width: 100%
</style>
