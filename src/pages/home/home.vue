<template>
  <div class="home">
      <search/>
      <div class="main">
        <div class="bannar">
          <mt-swipe :auto="4000">
            <mt-swipe-item><img src="./imgs/bannar1.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="./imgs/bannar2.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="./imgs/bannar3.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="./imgs/bannar4.png" alt=""></mt-swipe-item>            
          </mt-swipe>
        </div>
        <div class="item-wrap">
          <div class="ttImg">
            <img src="./imgs/ttImg.png" alt="">
          </div>
          <div class="ttsc">
            <img src="./imgs/ttImg1.jpg" alt="">
            <img src="./imgs/ttImg2.jpg" alt="">
          </div>
          <div class="tt-img">
            <img src="./imgs/hot.jpg" alt="">
          </div>
          <div class="item-01">
              <div class="big-item-wrap"  v-for="(item,index) in hotBigItem" :key="item.id">
               <div class="big-item">
            <div class="item-img">
              <img :src="item.imgs.big" alt="">
            </div>
            <div class="item-txt">
              <p>{{item.name}}</p>
              <i>{{item.detail}}</i>
              <span class="item-discount">已减10元</span>
              <div class="item-price">
                <span class="unit">￥{{item.price}}/ <em>{{item.unit}}</em></span>
                <span class="plus" @click="addCart(item)">+</span>
              </div>
            </div>
            </div>
          </div>
          <div class="smallItem-wrap">
            <div class="smallItem">
              <div class="small-item" v-if="index<9" v-for="(item,index) in hotItem" :key="item.id">
              <div class="item-img">
                <img :src="item.imgs.min" alt="">
              </div>
              <div class="item-name">
                {{item.name}}
              </div>
              <div class="item-price">
                ￥{{item.price}}/{{item.unit}}
                <span class="plus" @click="addCart(item)" >+</span>
              </div>
            </div>
            </div>
          </div>
          </div>
        
        </div>
        <div class="tt-img">
          <img src="./imgs/hot.jpg" alt="">
        </div>
        <div class="item-featured" v-for="(item,index) in products" :key="item.id" v-if="index<2">
            <div class="title-img">
              <img :src="item.category_img" alt="">
            </div>
             <div class="smallItem-wrap">
            <div class="smallItem">
              <div class="small-item" v-for="(item,index) in item.products" :key="item.id" v-if="index<9">
              <div class="item-img">
                <img :src="item.imgs.min" alt="">
              </div>
              <div class="item-name">
                {{item.name}}
              </div>
              <div class="item-price">
                ￥{{item.price}}/{{item.unit}}
                <span class="plus" @click="addCart(item)">+</span>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div class="titleImg">
          <img src="./imgs/title.jpg" alt="">
        </div>
        <div class="titleImg">
          <img src="./imgs/title.jpg" alt="">
        </div>
        <div class="tt-img">
          <img src="./imgs/hot.jpg" alt="">
        </div>
        <div class="recommend">
          <div class="item" v-for="(item,index) in recommed" :key="item.id">
            <div class="item-img">
              <img :src="item.imgs.big" alt="">
            </div>
            <div class="item-txt">
              <p>{{item.name}}</p>
              <i>{{item.detail}}</i>
              <div class="item-price">
                <div class="unit">￥{{item.price}}/<b>{{item.unit}}</b></div>
                <div class="plus" @click="addCart(item)">+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import Search from '@/components/search/search.vue'
export default {
  components:{
      Search
  },
  data(){
    return{
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
      }
  },
  computed:{
    products(){
      return this.$store.state.computedCategories
    },
    hotItem(){
      return this.products[0].products
      console.log(this.products[0].products)
    },
    hotBigItem(){
      return this.hotItem.slice(0,1)
    },
    recommed(){
      let product=[]
      for(let i=0;i<this.products.length;i++){
        let item=this.products[i].products
        for(let j=0;j<item.length;j++){
          product.push(item[1])
          break
        }
      }
      return product
    },
    user(){
      return this.$store.state.user
    }
  }
}
</script>
<style lang="less" scoped>
@import url('../../style/var.less');
.bannar{
  width: 100%;
  height: 28%;
  img{
    width: 100%;
  }
}
.ttImg{
  width: 100%;
  img{
    width: 100%;
  }
}
.ttsc{
  overflow: hidden;
  background-color: #fff;
  padding:1rem;
  margin-bottom: 1rem;
  img{
    width: 49%;
    &:nth-child(1){
      float: left;
    }
    &:nth-child(2){
      float: right;
    }
  }
}
.tt-img{
  width: 100%;
  margin-top: 1rem;
  img{
    width: 100%;
  }
}
.big-item-wrap{
  background-color: #fff;
}
.big-item{
  width: 100%;
  overflow: hidden;
  padding: 2rem 0;
  .item-img{
    float: left;
    width: 37%;
    margin-left: 1rem;
    img{
      width: 100%;
    }
  }
  .item-txt{
    float: left;
    padding-left: 1rem;
    width: 50%;
    p{
      font-size: 1.8rem;
      margin-bottom:.5rem;
    }
    i{
      display: inline-block;
      width: 100%;
      font-size: 1.5rem;
      font-style: normal;
      color: @color-gray;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .item-discount{
      background-color: #ff8a65;
      color: white;
      font-size: 1.3rem;
      padding: .3rem;
      border-radius: 3px;
    }
    .item-price{
      overflow: hidden;
      font-size: 1.8rem;
      margin-top: 1rem;
      color: #ff8000;
      em{
        font-size: 1.5rem;
      }
      .unit{
        float: left;
      }
      .plus{
        width: 2rem;
        height: 2rem;
        line-height: 2rem;
        text-align: center;
        float: right;
        border:1px solid @color-gray;
        border-radius: 50%;
      }
    }
  }
}
.smallItem-wrap{
  width: 100%;
  overflow-x: scroll;
  background-color: #fff;  
  .smallItem{
    width: 10000px;
  }
  .small-item{
    width: 120px;
    padding: .5rem;
    float: left;
    .item-img{
      width: 100%;
    img{
      width: 100%;
      }
    }
    .item-name{
      text-align: center;
      font-size: 1.4rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .item-price{
      font-size: 1.3rem;
      color: #ff8000;
      .plus{
        display: inline-block;
        width: 1.5rem;
        border: 1px solid @color-gray;
        height: 1.5rem;
        border-radius: 50%;
        line-height: 1.5rem;
        text-align: center;
        font-weight: bolder;
      }
    }
  }
 
}
.item-featured{
  width: 100%;
  .title-img{
    width: 100%;
    img{
      width: 100%;
    }
  }
}
.titleImg{
  width: 100%;
  img{
    width:100%;
  }
}
.recommend{
  width: 100%;
  .item{
    width: 100%;
    overflow: hidden;
    padding: 1rem 0;
    background-color: #fff;
    .item-img{
      float: left;
      width: 130px;
      padding-left: 1rem;
      img{
        width: 100%;
      }
    }
    .item-txt{
      float: left;
      width: 53%;
      margin-left: 1rem;
      p{
        font-size: 1.8rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      i{
        display: inline-block;
        width: 100%;
        font-style: normal;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color:@color-gray;
      }
      .item-price{
        color: #ff8000;
        overflow: hidden;
        font-size: 1.7rem;
        margin-top: 3rem;
        .unit{
          float: left;
          b{
            font-size: 1.3rem;
          }
        }
        .plus{
          float: right;
          width: 2rem;
          height: 2rem;
          border: 1px solid @color-gray;
          line-height: 2rem;
          border-radius: 50%;
          text-align: center;
        }
      }
    }
  }
}
</style>


