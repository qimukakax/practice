<template>
  <van-tabbar route active-color="#ff0036">
    <van-tabbar-item to="/movie" icon="video" @click="select1">
      电影
    </van-tabbar-item>
    <van-tabbar-item to="/music" icon="music" @click="select2">
      音乐
    </van-tabbar-item>
    <van-tabbar-item to="/book" icon="bookmark" @click="select3">
      图书
    </van-tabbar-item>
    <van-tabbar-item to="/photoes" icon="photo" @click="select4">
      图片
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import datacenterBus from '@/assets/datacenterBus.js'
export default {
  data() {
      return {
      }
  },
  methods: {
    select1(){
      datacenterBus.$emit("getValue",this.navList[0].title);
      this.title = this.navList[0].title
    },
    select2(){
      datacenterBus.$emit("getValue",this.navList[1].title);
      this.title = this.navList[1].title
    },
    select3(){
      datacenterBus.$emit("getValue",this.navList[2].title);
      this.title = this.navList[2].title
    },
    select4(){
      datacenterBus.$emit("getValue",this.navList[3].title);
      this.title = this.navList[3].title
    }
  },
  props: ['navList']
}
</script>
