<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot  name="item-icon"></slot></div>
    <div v-else><slot  name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text" ></slot></div>
  </div>

</template>

<script>
    export default {
      name: "TabBarItem",
      //接收父组件的值
      props:{
        path: String,
        activeColor:{
          type: String,
          default: 'red'
        }
      },
      data(){
        return {
          //isActive: true
        }
      },
      computed:{
        isActive(){
          //如果当前活跃的路由和点击的path一致 激活状态
          return this.$route.path.indexOf(this.path) != -1
        },
        activeStyle(){
          return this.isActive ? {color: this.activeColor}:{}
        }
      },
      methods:{
        itemClick(){
          console.log('点击了');
          this.$router.push(this.path)
        }
      }
    }
</script>

<style scoped>

  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }


</style>
