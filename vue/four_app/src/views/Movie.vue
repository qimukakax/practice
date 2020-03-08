<template>
  <div class="movie">
    <ul class="box">
      <li class="movie-info" v-for="(item , index) in movieList" :key="index">
        <img :src="item.images.small" alt="">
        <div class="movie-text">
          <h3>{{item.title}}</h3>
          <p>演员</p>
          <p>评分</p>
          <p>上映时间</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return{
      movieList: []
    }
  },
  created(){
    axios.get('https://bird.ioliu.cn/v1?url=https://douban.uieee.com/v2/movie/in_theaters?start=0&count=10')
    .then( (res) => {
      this.movieList = res.data.subjects
      console.log(res.data.subjects);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
    console.log(this.movieList)
  }
}
</script>
<style lang="scss" scoped>
.movie-info{
  display: flex;
  width: 7.1rem;
  margin: 0 auto;
  padding: 0.2rem 0;
  position: relative;
  &::after{
    content: '';
    display: block;
    width: 100%;
    border-bottom: 1px solid #000;
    transform: scaleY(0.5);
    position: absolute;
    left: 0;
    bottom: 0;
  }
  img{
    width: 2rem;
    height: 3rem;
    background: #000;
  }
  .movie-text{
    padding-left: 0.2rem;
  }
}
</style>