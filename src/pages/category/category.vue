<template>
  <div class="category">
      <div class="main">
          <div class="main1" :class="{'change':activePages===false}">
          <div class="top-search">
              <div class="search" @click="changePages()">
              <i class="glyphicon glyphicon-search"></i> 起一个                  
              </div>
          </div>
          <div class="main-wrap">
              <div class="cate-option">
                  <div class="option" v-for="(item,index) in computedCategories" :key="item.id" :class="{'active':activeCate===index}" @click="changeActiveCate(item,index)">{{item.name}}</div>                            
              </div>
              <div class="option-detail">
                  <div class="detail-title">
                      {{activeCateName}}
                      <span @click="toShop()">全部&nbsp;&gt;</span>
                  </div>
                  <div class="detail-product">
                      <div class="product" v-for="(item,index) in cids" :key="index" @click="toShopCid(item.name,index)">
                          <div class="product-img">
                              <img :src="item.img" alt="">                              
                          </div>
                          <div class="product-name">{{item.name}}</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="main2" :class="{'change':activePages===true}">
          <div class="top-search2">
              <div class="return" @click="changePages()"><i class="glyphicon glyphicon-chevron-left"></i>返回</div>
              <div class="input-search"><i class="glyphicon glyphicon-search"></i>
              <input type="text" placeholder="新鲜水果,生鲜"></div>
              <div class="search-btn">搜索</div>
          </div>
          <div class="hot-search">
              <div class="hot-title">热门搜索</div>
              <div class="hot-product">
                  <span>橙</span>
              </div>
          </div>
      </div>
      </div>
  </div>
</template>
<style lang="less" scoped>
@import url('../../style/var.less');
.main{
    top: 0;
}
.main1{
    width: 100%;
    height: 100%;
}
.top-search{
    width: 100%;
    text-align: center;
    background-color: #f8f8f8;
    height: 6%;
    position: relative;
    .search{
        background-color: #eee;
        width: 95%;
        height: 2rem;
        border-radius: 5px;
        position: absolute;
        top: .5rem;
        left: .8rem;
        line-height: 2rem;
        color: @color-gray;
    }
}
.change{
        display:none;
    }
.main-wrap{
    width: 100%;
    overflow: hidden;
    height: 94%;
    .cate-option{
        float: left;
        background-color: #f5f5f5;
        font-size: 1.3rem;
        height: 100%;
        width: 27%;
        .option{
            width: 100%;
            text-align: center;
            height: 40px;
            line-height: 40px;
            padding-left: 2px;
        }
        .active{
            background-color: #fff;
            color: @color-green;
            padding-left: 0px;
            border-left: 2px solid @color-green;
        }
    }
    .option-detail{
        float: left;
        background: #fff;
        width: 73%;
        height: 100%;
        .detail-title{
            width: 100%;
            text-align: center;
            font-size: 1.3rem;
            padding: .8rem 0;
            position: relative;
            span{
                position: absolute;
                right: 1rem;
                font-size: 1.2rem;
            }
        }
        .detail-product{
            width: 100%;
            overflow: hidden;
            .product{
                float: left;
                width: 33%;
                margin-bottom: 1rem;
                .product-img{
                    width: 70px;
                    height: 70px;
                    margin-left: 10px;
                    img{
                        width: 70px;
                        height: 70px;
                    }
                }
                .product-name{
                    text-align: center;
                }
            }
        }
    }
   
}
.main2{
    width: 100%;
    height: 100%;
    .top-search2{
        width: 100%;
        background: #fff;
        overflow: hidden;
        padding: 1rem 0;
        border-bottom: 1px solid @color-gray;
        font-size: 1.3rem;
        height: 9%;
        .return{
            float: left;
            margin-top: 5px;
            width: 16%;  
            color: @color-green;                    
        }
        .input-search{
            float: left;
            margin-left: 1rem;
            background-color: #eee;
            height: 2.5rem;
            line-height: 2.5rem;  
            width: 65%;                                
            input{
                border: none;
                background-color: #eee;
                width: 90%;   
                padding-left: 2rem;  
                outline: none;     
            }
            i{
                padding-left: 1rem;
                display: inline-block;
                width: 5%;
            }
        }
        .search-btn{
            float: right;
            margin-top: 5px;  
            width: 13%;
            text-align: center; 
            color: @color-green;                    
                 
        }
    }
    .hot-search{
        width: 100%;
        background: #fff;
        height: 91%;
        .hot-title{
            width: 100%;
            color: @color-gray;
            padding: 1rem .5rem;
        }
        .hot-product{
            width: 100%;
            overflow: hidden;
            span{
                background-color: #eee;
                padding:.5rem 1rem;
                float: left;
                margin-left: 1rem;
                margin-bottom:1rem;
                border-radius: 5px;
            }
        }
    }
    
}
</style>
<script>
export default {
  data(){
      return{
          activeCate:0,
          activeCateName:'满得下者',
          activePages:true,
      }
  },
  computed:{
      computedCategories(){
          return this.$store.state.computedCategories                  
      },
      cids(){
         return this.computedCategories[this.activeCate].cids
      }
  },
  methods:{
      changeActiveCate(item,index){
          this.activeCate=index
          this.activeCateName=item.name
          this.$store.commit('SAVE_CATENAME',item.name)
          this.$store.commit('SAVE_CATEINDEX',index)
          this.$store.commit('SAVE_ACTIVE_CID','全部')
          this.$store.commit('SAVE_ACTIVE_CIDINDEX',-1) 
      },
      changePages(){
          this.activePages=!this.activePages;
      },
      toShop(){
          this.$router.push('/shop')
      },
      toShopCid(item,index){
          this.$router.push('/shop')
          this.$store.commit('SAVE_ACTIVE_CID',item)
          this.$store.commit('SAVE_ACTIVE_CIDINDEX',index)           
      }
  }
}
</script>

