<template>
  <div class="login">
      <div class="main">
        <HeaderGreen headerTitle="手机号快捷登录"/>          
          <div class="login-wrap">
              <div class="phone"><i class="glyphicon glyphicon-phone"></i>
              <input type="text" placeholder="手机号" v-model="phone"></div>
                <div class="login-btn" @click="login()">登录</div>
          </div>
      </div>
  </div>
</template>
<style lang="less" scoped>
.main{
    top: 0;
    bottom: 0;
    background: url('./imgs/login-bg.png');
    background-size: contain;
}
.login-wrap{
    position: absolute;
    top: 30%;
    width: 100%;
    padding: 2rem;
    font-size: 1.5rem;
    .phone{
        border-bottom: 1px solid gray;
        padding-bottom: 1rem;
        input{
            border: none;
            outline: none;
            background-color: transparent;
            color: gray;
        }
    }
    .login-btn{
        width: 100%;
        background-color: gray;
        color: #fff;
        text-align: center;
        margin-top: 1rem;
        padding: .5rem 0;
    }
}
</style>
<script>
import HeaderGreen from '@/components/header.vue'
export default {
  components:{
      HeaderGreen
  },
  data(){
      return{
          phone:'',
      }
  },
  methods:{
      login(){
          let reg=/^1[3,5,8]\d{9}/g
          if(reg.test(this.phone)){
              let userObj={
              phone:this.phone
            }
            this.$store.dispatch('login',userObj)
            .then(action=>{
                this.$msg('提示','登录成功')
                this.$router.push('/')
            })
          }else{
              this.$msg('提示','请输入正确的手机号')
          }
      }
  },
  computed:{
      user(){
          return this.$store.user
      }
  }
}
</script>


