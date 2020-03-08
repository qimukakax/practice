<template>
  <div class="nav" >
    <div class="left" @click="onClickLeft">首页</div>{{this.value}}
  </div>
</template>
<script>
import datacenterBus from '@/assets/datacenterBus.js'
export default {
  data() {
      return {
        value: '电影'
      }
  },
  methods: {
    onClickLeft(){
      this.$router.push({path:'/movie'}) 
      this.value = '电影'
    }
  },
  created(){
    var that = this 
    datacenterBus.$on("getValue",function(val){
      that.value = val
    })
    if(this.$route.path == '/movie'){
      this.value = '电影'
    }else if(this.$route.path == '/music'){
      this.value = '音乐'
    }else if(this.$route.path == '/book'){
      this.value = '图书'
    }else if(this.$route.path == '/photo'){
      this.value = '图片'
    }
  },
}
</script>

<style lang="scss" scoped>
.nav{
  background: #dddddd;
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  font-size: 0.35rem;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  .left{
    position: absolute;
    left: 0.2rem;
  }
}

</style>