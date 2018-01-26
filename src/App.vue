<template>
  <div id="app">
    <tabBar v-if="tabBarShow"/>
    <router-view></router-view>
  </div>
</template>

<script>
import tabBar from '@/components/tabBar.vue'
import api from '@/api/api.js'
export default {
  name:'app',
  components: {
    tabBar
  },
  data(){
    return{
      categories:[],
      products:[]
    }
  },
  created(){
    let that=this
    async function getData() {
      let result = await that.$http.get(api.host+'/categories')
      that.categories = result.data
      let res = await that.$http.get(api.host+'/products')
      that.products = res.data
      that.computedCategories()
    }
    getData()
  },
  methods:{
    computedCategories(){
      for(let i=0; i<this.products.length; i++){
        for(let j=0;j<this.categories.length;j++){
          if(this.products[i].categoryId===this.categories[j].id){
            this.categories[j].products.push(this.products[i])
          }
        }
      }
      this.$store.commit('SAVE_COMPUTEDCATEGORIES',this.categories)
    }
  },
   computed:{
      tabBarShow(){
          return this.$store.state.tabBarShow
      }
   }
}
</script>

