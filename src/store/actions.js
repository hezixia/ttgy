import http from 'axios'
import api from '@/api/api.js'
export default{
    login(store,userObj){
       return http.get(api.host+'/users?phone='+userObj.phone)
            .then(res=>{
                if(res.data.length>0){
                    http.get(api.host+'/users/'+res.data[0].id+'/carts')
                        .then(res=>{
                            store.commit('SAVE_CARTS',res.data)
                        })
                        store.commit('LOGIN',res.data[0])                       
                }else{
                    http.post(api.host+'/users',userObj)
                        .then(res=>{
                            if(res.data.id>0){
                                store.commit('LOGIN',res.data)                               
                            }
                        })
                }
            })
        
    },
    addCart(store,item){
        let cartBol=true
        for(let i=0;i<store.state.carts.length;i++){
            if(item.product_id===store.state.carts[i].product_id){
                cartBol=false
                let newLocalCartProduct = Object.assign({}, store.state.carts[i])
                newLocalCartProduct.num++
                http.patch(api.host+'/carts/'+store.state.carts[i].id,{
                    num:newLocalCartProduct.num
                })
                .then(res=>{
                    store.commit('ADD_CART',res.data)
                })
            }
        }
        if(cartBol){
                let product={
                    name:item.name,
                    unit:item.unit,
                    product_id:item.id,
                    price:item.price,
                    num:1,
                    img:item.imgs.min,
                    checkBol:true,
                    userId:store.state.user.id
                }
                http.post(api.host+'/carts',product)
                .then(res=>{
                    store.commit('ADD_CART',res.data)
                })
        }
    },
    subCart(store,item){
        for(let i=0;i<store.state.carts.length;i++){
            if(item.product_id===store.state.carts[i].product_id){
                if(store.state.carts[i].num>1){
                    let newLocalCartProduct=Object.assign({},store.state.carts[i])
                    newLocalCartProduct.num--                    
                    http.patch(api.host+'/carts/'+store.state.carts[i].id,{
                        num:newLocalCartProduct.num
                    })
                    .then(res=>{
                        store.commit('SUB_CARTS',res.data)
                    })
                }else{
                    http.delete(api.host+'/carts/'+item.id)
                        .then(res=>{
                            store.commit('DEL_CARTS',item)
                        })
                }
            }
        }
    },
    changeCheckBol(store,item){
        http.patch(api.host+'/carts/'+item.id,{
            checkBol:!item.checkBol
        })
            .then(res=>{
                store.commit('CHANGE_CHECKBOL',res.data)
            })
    }
}