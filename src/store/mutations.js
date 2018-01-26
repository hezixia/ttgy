export default{
    SAVE_COMPUTEDCATEGORIES(state,data){
        console.log(data)
        state.computedCategories=data
    },
    //保存当前选择的分类名称
    SAVE_CATENAME(state,data){
        state.cateName=data
    },
    SAVE_CATEINDEX(state,index){
        state.cateIndex=index
    },
    SAVE_ACTIVE_CID(state,item){
        state.cid=item
    },
    SAVE_ACTIVE_CIDINDEX(state,item){
        state.cidIndex=item
    },
    LOGIN(state,item){
        state.user=item
    },
    SAVE_CARTS(state,item){
        state.carts=item
    },
    ADD_CART(state,item){
        let cartBol=true
        for(let i=0;i<state.carts.length;i++){
            if(item.product_id===state.carts[i].product_id){
                cartBol=false;
                state.carts[i].num++
            }
        }
        if(cartBol){
            state.carts.push(item)
        }
    },
    SUB_CARTS(state,item){
        for(let i=0;i<state.carts.length;i++){
            if(item.product_id===state.carts[i].product_id){
                state.carts[i].num--
            }
        }
    },
    DEL_CARTS(state,item){
        console.log(item)
        let index=state.carts.indexOf(item)
        state.carts.splice(index,1)
    },
    CHANGE_CHECKBOL(state,item){
        for(let i=0;i<state.carts.length;i++){
            if(item.product_id===state.carts[i].product_id){
                state.carts[i].checkBol=!state.carts[i].checkBol
            }
        }
    }
}