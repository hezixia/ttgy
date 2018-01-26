<template>
  <div class="header">
      <div class="return" @click="returnLastPages()"><i class="glyphicon glyphicon-chevron-left"></i></div>
      <div class="header-title">{{headerTitle}}</div>
  </div>
</template>
<style lang="less" scoped>
@import url('../style/var.less');
    .header{
        width: 100%;
        position: relative;
        font-size: 1.5rem;
        line-height: 3rem;
        color:@color-green;
        .return{
            position: absolute;
            left:1rem;
        }
        .header-title{
            text-align: center;
        }
    }
</style>
<script>
export default {
  props:['headerTitle'],
  methods:{
      returnLastPages(){
          this.$router.go(-1)
      }
  }
}
</script>

