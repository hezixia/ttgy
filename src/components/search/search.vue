<template>
  <div class="search">
      <div class="search-img">
        <img src="./imgs/tomorrow.png" alt="">
      </div>
      <div class="site">
        洪浪北(地铁站)<i class="glyphicon glyphicon-chevron-down"></i>
      </div>
      <div class="glyphicon glyphicon-search search-btn"></div>
  </div>
</template>
<style lang="less" scoped>
@import url('../../style/var.less');
  .search{
    position: fixed;
    top: 0;
    height: 3rem;
    overflow: hidden;
    padding: 0 1rem;
    line-height: 3rem;
    border-bottom: 3px solid @color-gray;
    width: 100%;
    .search-img{
      float: left;
      width: 17%;
      img{
        width: 100%;
      }
    }
    .site{
      width: 50%;
      float: left;
      margin-left: .5rem;
      font-size: 1.3rem;
      color: @color-green;
      margin-top: 2px;
      i{
        margin-left: 5px;
      }
    }
    .search-btn{
      float: right;
      font-size: 2rem;
      line-height: 3rem;
      color: #3a3a3a;
    }
  }
</style>

