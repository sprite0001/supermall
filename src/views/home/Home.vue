<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommends="recommends"></home-recommend>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  import HomeSwiper from './childComps/HomeSwiper.vue'
  import HomeRecommend from './childComps/HomeRecommend.vue'
  import {getHomeMultiData} from 'network/home.js'

  export default {
    name: "Home",
    components:{
      NavBar,
      HomeSwiper,
      HomeRecommend
    },
    data(){
      return {
        banners: [],
        recommends:[]
      }
    },
    created(){
      getHomeMultiData().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    }
  }
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color: #fff
  }
</style>
