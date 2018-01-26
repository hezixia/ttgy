<template>
    <div class="cart">
        <headerGreen headerTitle="购物车"/>
        <div class="edit">编辑</div>
        <div class="finish active">完成</div>
        <div class="main">
            <div class="address">
                <div class="site-img"><i class="glyphicon glyphicon-map-marker"></i></div>
                <div class="my-address">
                    <div class="address-data">
                        <span class="name">keke</span>
                        <span class="number">13286806672</span>
                        <span class="home">家</span>
                    </div>
                    <div class="site">洪浪北大家安防监控电路设计覅饿哦就仿佛</div>
                </div>
                <div class="seleted-btn">&gt;</div>
            </div>
            <div class="product-List">
                <div class="list-title">
                    <span>商品清单</span>
                    <span>总量约3.75kg</span>
                </div>
                <div class="item-wrap">
                <div class="item" v-for="(item,index) in carts" :key="index">
                    <div class="checked" :class="{'check':checkBol===false}" @click="changeCheckBol(item)"></div>
                    <div class="item-img">
                        <img :src="item.img" alt="">
                    </div>
                    <div class="item-txt">
                        <p>{{item.name}}</p>
                        <b>{{item.unit}}g</b>
                        <div class="txt-bottom">
                            <div class="price">￥{{item.price}} <span>明日达</span></div>
                            <div class="num">
                                <div class="sub" @click="subCart(item)">-</div>
                                <div class="number">{{item.num}}</div>
                                <div class="sub" @click="addCart(item)">+</div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="count-wrap">
                <div class="selected select"> 全选</div>
                <div class="count">合计：<span>￥{{count.toFixed(2)}}</span></div>
                <div class="count-btn">结算(1)</div>
                <div class="del-txt active">清空购物车</div>
                <div class="del active">删除</div>
            </div>
        </div>
    </div>
</template>
<script>
import headerGreen from '@/components/header.vue'
export default {
  components:{
      headerGreen
  },
  data(){
      return{
          checkBol:true
      }
  },
  created(){
      if(!(this.user.id>0)){
          this.$router.push('/login')
      }
  },
  computed:{
      user(){
          return this.$store.state.user
      },
      carts(){
          return this.$store.state.carts
      },
      count(){
          let price=0
          for(let i=0;i<this.carts.length;i++){
           price += (this.carts[i].num * this.carts[i].price)
          }
          return price
      }
  },
  methods:{
       addCart(item){
          if(this.user.id>0){
            this.$store.dispatch('addCart',item)              
          }else{
              this.$msg('提示','未登录，请登录')
              .then(action=>{
                  this.$router.push('/login')
              })
          }
      },
      subCart(item){
          this.$store.dispatch('subCart',item)
      },
      changeCheckBol(item){
          this.checkBol=!this.checkBol
          this.$store.dispatch('changeCheckBol',item)
      }
  }
}
</script>
<style lang="less" scoped>
@import url('../../style/var.less');
.active{
    display: none;
}
.edit{
    position: absolute;
    color: @color-green;
    top: 5px;
    right: 1rem;
    font-size: 1.5rem;
}
.finish{
     position: absolute;
    color: @color-green;
    top: 5px;
    right: 1rem;
    font-size: 1.5rem;
}
.address{
    width: 100%;
    overflow: hidden;
    font-size: 1.5rem;
    padding: 2rem .5rem;
    background:url('./imgs/border.png'),url('./imgs/border.png');
    background-position: left bottom,left top;
    background-repeat: repeat-x;
    background-color: #fff;
    .site-img{
        float: left;
        color: #ff8000;
        width: 5%;
        margin-top: 10px;
    }
    .my-address{
        float: left;
        margin-left: 1rem;
        width: 80%;
        .address-data{
            span{
                margin-right: 1rem;
            }
            .home{
                border: 1px solid #ff8000;
                color: #ff8000;
                font-size: 1.1rem;
                padding:.2rem .5rem;
                border-radius: 5px;
            }
        }
        .site{
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            width:100%;
            color: @color-gray;
            font-size: 1.3rem;
        }
    }
    .seleted-btn{
        float: right;
        width: 5%;
        font-size:2rem;
        margin-top: 10px;
    }
}
.product-List{
    width: 100%;
    background: #fff;
    margin-top: .5rem;
    .list-title{
        overflow: hidden;
        color: @color-gray;
        padding:.5rem;
        border-bottom: 1px solid @color-gray;
        font-size: 1.1rem;
        span{
            &:nth-child(1){
                float: left;
            }
            &:nth-child(2){
                float: right;
            }
        }
    }
    .item-wrap{
        margin-bottom:4rem;
    }
    .item{
        width: 100%;
        font-size: 1.3rem;
        background-color: #fff;
        overflow: hidden;
        border-bottom: 1px solid @color-gray;
        padding: 1rem 0;
        .checked{
            width: 17px;
            height: 17px;
            border-radius: 50%;
            margin: 3rem .5rem;
            float: left;
            background: url('./imgs/check.jpg') 1px 0 no-repeat ;
        }
        .check{ 
            background: none;
            border: 1px solid @color-gray;
            border-radius: 50%;
        }
        .item-img{
            float: left;
            width: 25%;
            margin-right: 1rem;
            img{
                width: 100%;
            }
        }
        .item-txt{
            float: left;
            width: 55%;
            p{
                margin-bottom:2rem;
            }
            b{
                font-size: 1.2rem;
                font-weight: normal;
                color:@color-gray;
            }
            .txt-bottom{
                overflow: hidden;
                width: 100%;
                margin-top:.3rem;                
                .price{
                    float: left;
                    font-size: 1.5rem;
                    color: red;
                    span{
                        display: inline-block;
                        border:1px solid #ff8000;
                        background-color: #ff8000;
                        color:white;
                        font-size:1rem;
                        padding: 1px ;
                        border-radius: 5px;
                    }
                }
                .num{
                    float: right;
                    overflow: hidden;
                    width: 40%;
                    .sub{
                        color: #ff8000;
                        border: 1px solid @color-gray;
                        font-size: 1.5rem;
                        border-radius: 50%;
                        width: 2rem;
                        height: 2rem;
                        float: left;
                        text-align: center;
                        line-height: 2rem;
                    }
                    .number{
                        float: left;
                        width: 30%;
                        text-align: center;
                    }
                }
            }
        }
    }
}
.count-wrap{ 
    position: fixed;
    background: #fff;
    height: 4rem;
    line-height: 4rem;
    overflow: hidden;
    bottom: 4rem;
    width: 100%;
    .selected{
        float: left;
        padding-left: 25px;
        background: url('./imgs/check.jpg') 2px 15px no-repeat;
    }
    .select{
        background: url('./imgs/check1.jpg') 2px 15px no-repeat;
    }
    .count{
        float: right;
        padding-right: 8rem;
        span{
            font-size: 1.5rem;
            color:#ff8000;
        }
    }
    .count-btn{
        position: absolute;
        right: 0;
        background-color: #ff8000;
        width: 80px;
        height: 4rem;
        top:0;
        line-height: 4rem;
        text-align: center;
        font-size: 1.4rem;
        color:#fff;
    }
    .del{
         position: absolute;
        right: 0;
        background-color: red;
        width: 80px;
        height: 4rem;
        top:0;
        line-height: 4rem;
        text-align: center;
        font-size: 1.4rem;
        color:#fff;
    }
    .del-txt{
        position: absolute;
        top: 0;
        right: 8rem;
        font-size: 1.2rem;
    }
}
</style>


