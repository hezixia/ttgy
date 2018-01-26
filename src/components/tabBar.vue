<template>
  <div class="tabBar">
      <router-link to="/" class="home" :class="{'activeColor':active===1}" @click="active=1">
         <i class="glyphicon glyphicon-home"></i>
         <p>首页</p> 
      </router-link>
      <router-link to="/category" class="categories" :class="{'activeColor':active===2}" @click="active=2">
         <i class="glyphicon glyphicon-th-large"></i>
         <p>分类</p> 
      </router-link>
      <router-link to="/cart" class="cart" :class="{'activeColor':active===3}" @click="active=3">
         <i class="glyphicon glyphicon-shopping-cart"></i>
         <p>购物车</p> 
      </router-link>
      <router-link to="/mine" class="mine" :class="{'activeColor':active===4}" @click="active=4">
         <i class="glyphicon glyphicon-user"></i>
         <p>我的</p> 
      </router-link>
  </div>
</template>
<script>
export default {
  data(){
      return{
          active:0
      }
  },
  methods:{
  }
}
</script>

<style lang="less" scoped>
@import url('../style/var.less');
.tabBar{
    width: 100%;
    display: flex;
    border-top: 2px solid @color-gray;
    font-size: 1.3rem;
    position: fixed;
    bottom: 0;
    height: 4rem;
    a{
        flex: 1;
        text-align: center;
        color: @color-gray;
        text-decoration: none;
        i{
            font-size: 2rem;
            padding-top: .2rem;
        }
    }
    .activeColor{
        color:@color-green;
    }
}
</style>

