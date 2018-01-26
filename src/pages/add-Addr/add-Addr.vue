<template>
  <div class="addAddr">
      <headerGreen headerTitle="新增收货地址"/>
      <div class="main">
          <div class="input-wrap">
              <span>收货人</span>
              <input type="text" placeholder="收货人姓名">
          </div>
           <div class="input-wrap">
              <span>收货人手机</span>
              <input type="text" placeholder="手机号码">
          </div>
          <div class="input-wrap">
              <span>收货地址</span>
              <b><i class="glyphicon glyphicon-map-marker"></i>快捷掉分的</b>
              <em class="glyphicon glyphicon-chevron-right"></em>
          </div>
          <div class="input-wrap">
              <span>门牌</span>
              <input type="text" placeholder="例：71号501室">
          </div>
          <div class="input-wrap">
              <span>类型<i>(选填)</i></span>
              <div class="select-wrap">
                  <div class="select ">
                      <i class="active glyphicon glyphicon-ok-circle"></i>家
                  </div>
                  <div class="select">
                      <i class="glyphicon glyphicon-ok-circle"></i>公司
                  </div>
              </div>
          </div>
          <div class="save-btn">
              保存并使用
          </div>
      </div>
  </div>
</template>
<script>
import headerGreen from '@/components/header.vue'
export default {
  components:{
      headerGreen
  }
}
</script>
<style lang="less" scoped>
.main{
    bottom: 0;
}
.input-wrap{
    width: 100%;
    padding: 1rem .5rem;
    background-color: #fff;
    border-top: 1px solid gray;
    font-size: 1.5rem;    
    span{
        display: inline-block;
        width: 30%;
        i{
            font-size: 1.2rem;
            color: gray;
            font-style: normal;
        }
    }
    input{
        width: 60%;
        border: none;
        outline: none;
    }
    b{
        width: 60%;
        display: inline-block;
        font-weight: normal;
        i{
            color: gray;
            margin-right: 5px;
        }
    }
    em{
        width: 5%;
        color: gray;
    }
    .select-wrap{
        display: inline-block;
        overflow: hidden;
        .select{
            float: left;
            margin-right: 2rem;
            i{
                padding-right: 5px;
            }
            .active{
                color: #ff8000;
            }
        }
    }
}
.save-btn{
    color: white;
    font-size: 1.5rem;
    width: 90%;
    margin-left: 5%;
    padding: 1rem 0;
    background-color: gray;
    border-radius: 10px;
    text-align: center;
    margin-top: 1rem;
}
</style>


