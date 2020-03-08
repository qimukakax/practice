<template>
  <div id="app">
    <Navbar :nav-list="navList"></Navbar>
    <div class="box">
      <router-view></router-view>
    </div>
    <Tabbar :nav-list="navList"></Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar.vue'
import Navbar from '@/components/Navbar.vue'
export default {
   components: {
     Tabbar,
     Navbar
   },
   data() {
     return{
        navList: [
          {
            title: '电影'
          },
          {
            title: '音乐'
          },
          {
            title: '图书'
          },
          {
            title: '图片'
          }
        ]
     }
   }
}

</script>
<style lang="scss">
.box{
  margin: 1rem 0;
}
</style>
