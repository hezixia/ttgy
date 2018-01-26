<template>
  <div class="shop">
      <HeaderGreen :headerTitle="cateName"/>
      <div class="search glyphicon glyphicon-search"></div>
      <div class="main">
          <div class="cids-wrap">
              <div class="cids">
                  <div class="cid" :class="{'active':activeCids==='全部'}" @click="changeAll()">全部</div>
                  <div class="cid" :class="{'active':activeCids===item.name}" @click="changeCid(item,index)" v-for="(item,index) in cateNames.cids" :key="item.id">{{item.name}}</div>                 
              </div>
          </div>
          <div class="sort-wrap">
              <div class="sort">综合</div>
              <div class="sort">销量</div>
              <div class="sort">价格</div>              
          </div>
          <div class="product-wrap">
              <div class="product" v-for="(item,index) in activeCidsProducts" :key="item.id">
                  <div class="product-img">
                      <img :src="item.imgs.min" alt="">
                  </div>
                  <div class="product-txt">
                      <p>{{item.name}}</p>
                      <b>{{item.detail}}</b>
                      <i>{{item.unit}}</i>
                      <div class="product-price">
                          <div class="price">￥{{item.price}}<span>明日达</span></div>
                          <div class="plus" @click="addCart(item)">+</div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="cart"  @click="toCart()">
              <i class="glyphicon glyphicon-shopping-cart"></i>
              <div class="cart-num" v-show="count>0">{{count}}</div>
          </div>
      </div>
  </div>
</template>
<script>
import HeaderGreen from '@/components/header.vue'
export default {
  components:{
      HeaderGreen
  },
  data(){
      return{
        activeCids:'全部',
        activeCidsIndex:-1
      }
  },
  methods:{
      changeCid(item,index){
          this.activeCids=item.name
          this.activeCidsIndex=index
      },
      changeAll(){
          this.activeCids='全部'
          this.activeCidsIndex=-1
      },
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
      toCart(){
          this.$router.push('/cart')
      }
  },
 created(){
        this.activeCids=this.cid
        this.activeCidsIndex=this.cidIndex
  },
  computed:{
      cateName(){
          return this.$store.state.cateName
      },
      cateIndex(){
          return this.$store.state.cateIndex          
      },
      cid(){
          return this.$store.state.cid
      },
      cidIndex(){
          return this.$store.state.cidIndex
      },
      cateNames(){
          let products=this.$store.state.computedCategories
          for(let i=0;i<products.length;i++){            
              if(this.cateName===products[i].name){
                 return products[i]
              }
          }
      },
      products(){
         return this.$store.state.computedCategories[this.cateIndex].products
      },
      activeCidsProducts(){
          if(this.activeCidsIndex>-1){
              let index=this.activeCidsIndex
              return this.products.filter(item=>item.cidsIndex===index)
          }else{
              return this.products
          }
      },
      user(){
          return this.$store.state.user
      },
      count(){
          let result = 0
          for(let i=0;i<this.$store.state.carts.length;i++){
              result += this.$store.state.carts[i].num
          }
          return result 
      }

  }
}
</script>
<style lang="less" scoped>
@import url('../../style/var.less');
.main{
    bottom: 0;
}
.search{
    position: absolute;
    top: 7px;
    right: 10px;
    font-size: 1.8rem;
    color: @color-green;
}
.cids-wrap{
    width: 100%;
    overflow-x: scroll;
    height: 8%;
    .cids{
        width: 1000px;
        overflow: hidden;
        background-color: #fff;        
        .cid{
            width: 70px;
            float: left;
            padding-bottom: 2px;
            text-align: center; 
            line-height: 3rem;           
        }
        .active{
            padding-bottom: 0;
            border-bottom: 2px solid @color-green;
            color: @color-green;
        }
    }
}
.sort-wrap{
    width: 100%;
    display: flex;
    line-height: 3rem;
    height: 6%;
    .sort{
        flex: 1;
        text-align: center;
    }
}
.product-wrap{
    background-color: #fff;  
    height: 86%;
    overflow-y: scroll;
    .product{
        padding: 10px;        
        width: 100%;
        overflow: hidden;
        border-bottom: 1px solid @color-gray;          
        .product-img{
            width: 30%;
            margin-right: 10px;
            float: left;
            img{
                width: 100%;
            }
        }
        .product-txt{
            float: left;
            width: 60%;
            p{
                width: 100%;
                font-size: 1.3rem;
            }
            b{
                display: block;
                font-size: 1.1rem;
                font-weight: normal;
                color: @color-gray;
                margin-bottom: 5px;                
            }
            i{
                color: @color-gray;
            }
            .product-price{
                overflow: hidden;
                .price{
                    float: left;
                    font-size: 1.7rem;
                    color: #ff8000;
                    span{
                        color: #fff;
                        font-size: 1.1rem;
                        background-color: #ff8000;
                        padding: .2rem;
                        border-radius: 5px;
                        margin-left: 10px;
                    }
                }
                .plus{
                    float: right;
                    font-size: 2rem;
                    color: #ff8000;
                    border: 1px solid @color-gray;
                    width: 2rem;
                    height: 2rem;
                    text-align: center;
                    line-height: 2rem;
                    border-radius: 50%;
                }
            }
        }
    }
}
.cart{
    background-color: @color-green;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    line-height: 80px;
    text-align: center;
    position: absolute;
    bottom: 0;
    i{
        font-size: 3rem;
        color: #fff;
    }
    .cart-num{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        line-height: 20px;
        position: absolute;
        background-color: #ff8000;
        top: 0;
        right: 0;
        color: white;
    }
}
</style>

