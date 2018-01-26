<template>
  <div class="mine">
      <div class="main">
        <div class="header">
          <div class="header-top">
            <div class="txt">
              <p>13286806672</p>
              <span>签到送好礼</span>
            </div>
            <div class="vip">
              <i class="glyphicon glyphicon-qrcode"></i>
              <p>会员码</p>
            </div>
          </div>
          <div class="header-bottom">
            <div class="item">
              <p>积分</p>
              <span>0</span>
            </div>
            <div class="item">
              <p>余额</p>
              <span>0</span>
            </div>
            <div class="item">
              <p>优惠券</p>
              <span>0</span>
            </div>
            <div class="item">
              <p>礼品</p>
              <span>0</span>
            </div>
          </div>
        </div>
        <div class="order">
          <div class="orderImg glyphicon glyphicon-list-alt"></div>
          <div class="myOrder">我的订单</div>
          <div class="allOrder">全部订单 <i class="glyphicon glyphicon-menu-right"></i> </div>
        </div>
        <div class="order-type">
          <div class="type">
            <i class="glyphicon glyphicon-credit-card"></i>
            <p>待付款</p>
          </div>
           <div class="type">
            <i class="glyphicon glyphicon-bed"></i>
            <p>待发货</p>
          </div>
           <div class="type">
            <i class="glyphicon glyphicon-piggy-bank"></i>
            <p>待收货</p>
          </div>
           <div class="type">
            <i class="glyphicon glyphicon-comment"></i>
            <p>待评价</p>
          </div>
           <div class="type">
            <i class="glyphicon glyphicon-transfer"></i>
            <p>退换货</p>
          </div>
        </div>
        <div class="vip-center">
          <div class="vipIcon glyphicon glyphicon-queen"></div>
          <span>会员中心</span>
          <div class="vip-more">享等级特权 <i class="glyphicon glyphicon-menu-right"></i></div>
        </div>
        <div class="vip-center">
          <div class="vipIcon glyphicon glyphicon-registration-mark"></div>
          <span>企业购</span>
          <div class="vip-more"> <i class="glyphicon glyphicon-menu-right"></i></div>
        </div>
        <div class="vip-center">
          <div class="vipIcon glyphicon glyphicon-headphones"></div>
          <span>在线客服</span>
          <div class="vip-more"><i class="glyphicon glyphicon-menu-right"></i></div>
        </div>
      </div>
  </div>
</template>
<style lang="less" scoped>
@import url('../../style/var.less');
.main{
  top: 0;
}
.header{
  background: url('./imgs/login-bg.png')0 0 no-repeat;
  .header-top{
    padding: 2rem 0;
    padding-left: 5rem;
    overflow: hidden;
    .txt{
      float: left;
       p{
        font-size: 1.5rem;
        margin-bottom: 1rem;      
      }
      span{
        font-size: 1.1rem;
        background-color: #ff8000;
        padding: 4px;
        color: white;
        border-radius: 10px;
      }
    }
   .vip{
     float: right;
     color:@color-gray;
     width: 100px;
     text-align: center;
     i{
       font-size: 2.5rem;
     }
   }
  }
  .header-bottom{
    display: flex;
    text-align: center;
    padding: 2rem 0;
    .item{
      flex: 1;
      span{
        color: #ff8000;
      }
    }
  }
}
.order{
  width: 100%;
  overflow: hidden;
  background-color: #fff;
  height: 4rem;
  line-height: 4rem;
  border-bottom: 1px solid @color-gray;
  .orderImg{
    float: left;
    font-size: 2.3rem;
    margin:0 1rem;
    color: @color-gray;
    margin-top: 10px;
  }
  .myOrder{
      font-size: 1.2rem;
      float: left;
  }
  .allOrder{
    float: right;
    color: @color-gray;
  }
}
.order-type{
  display: flex;
  background-color: #fff;
  padding: 2rem 0 1rem 0;
  color: @color-gray;
  margin-bottom: 1rem;
  .type{
    flex: 1;
    text-align: center;
    i{
      font-size: 2rem;
    }
  }
}
.vip-center{
  background-color: #fff;
  overflow: hidden;
  height: 4rem;
  line-height: 4rem;
  padding: 0 1rem;
  border-bottom: 1px solid @color-gray;
  .vipIcon{
    float: left;
    margin-right: 1rem;
    font-size: 1.8rem;
    margin-top: 10px;
    color: @color-gray;
  }
  span{
    float: left;
  }
  .vip-more{
    float: right;
    font-size: 1.1rem;
    color: @color-gray;
  }
}
</style>

