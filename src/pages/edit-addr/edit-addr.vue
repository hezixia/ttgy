<template>
  <div class="editAddr">
      <headerGreen headerTitle="编辑收货地址"/>
      <div class="main">
          <div class="input-wrap">
               <span>收货人</span>
               <input type="text">
          </div>
          <div class="input-wrap">
               <span>收货人手机</span>
               <input type="text">
          </div>
          <div class="input-wrap">
               <span>收货地址</span>
               <b><i class="glyphicon glyphicon-map-marker"></i>害怕啦大家发你的说法</b>
               <em class="glyphicon glyphicon-chevron-right"></em>
          </div>
          <div class="input-wrap">
               <span></span>
               <input type="text">
          </div>
          <div class="input-wrap">
               <span>门牌</span>
               <input type="text">
          </div>
           <div class="input-wrap">
               <span>类型<i>(选填)</i></span>
               <div class="select-wrap">
                   <div class="select">
                       <i class="glyphicon glyphicon-ok-sign color"></i>家
                    </div>
                     <div class="select">
                       <i class="glyphicon glyphicon-ok-sign"></i>公司
                    </div>
               </div>
               
          </div>
          <div class="save-btn">
              保存并使用
          </div>
          <div class="del-btn">
              删除地址
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
    background-color: #fff;
    font-size: 1.4rem;
    padding: 1rem 0;
    border-top: 1px solid gray;
    span{
        display: inline-block;
        width: 25%;
        margin-left: .5rem;
        i{
            color: gray;
            font-style: normal;
            font-size: 1.2rem;
        }
    }
    input{
        width: 60%;
        border: none;
        outline: none;
    }
    b{
        display:inline-block; 
        font-weight: normal;
        width: 60%;
        i{
            padding-right: .3rem;
            color: gray;
        }
    }
    em{
        width: 5%;
        color: gray;
    }
    .select-wrap{
        width: 60%;
        display: inline-block;
        overflow: hidden;
        .select{
            float: left;
            margin-left: 2rem;
            i{
                padding-right: .5rem;
                font-size: 1.5rem;
            }
            .color{
                color: #ff8000;
            }
        }
    }
}
.save-btn{
    width: 90%;
    text-align: center;
    background: #ff8000;
    color: #fff;
    margin-left: 5%;
    padding: 1rem 0;
    border-radius: 10px;
    margin-top: 1rem;
    font-size: 1.5rem;
    
}
.del-btn{
    width: 90%;
    text-align: center;
    background: #f8f8f8;
    color: gray;
    margin-top: 1rem;
    margin-left: 5%;
    padding: 1rem 0;
    border-radius: 10px;
    font-size: 1.5rem;
}
</style>


