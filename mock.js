var Mock=require('mockjs')
var fs=require('fs')
var data=new Mock.mock({
    'categories|11':[
        {
            //分类ID
            'id|+1':1,
            //分类名称
            'name':'@cword(2,4)',
            //分类图片
            'category_img':'@image(375x160,@color)',
            //子分类
            'cids|5':[
                {
                    'name':'@cword(2,4)',
                    'img':'@image(70x70,@color,@cname)'
                }
            ],
            //保存分类对应的数据
            'products':[]
        }
    ],
    'products|100-200':[
        {
            //商品id
            'id|+1':1,
            //分类
            'categoryId|1-11':10,
            //子分类
            'cidsIndex|0-4':10,
            //商品名
            'name':'@cword(3,5)',
            //商品价格
            'price|1-100.1':10,
            //商品规格
            'unit|10-90.1':10,
            //商品图片
            'imgs':{
                'min':'@image(96x96,@color,@cname)',
                'big':'@image(375x375,@color,@cname)'
            },
            //商品详情
            'detail':'@cword(3,9)',
            'product_id|+1':1
        }
    ],
    "carts":[],
    "users":[]
})
fs.writeFile('db.json',JSON.stringify(data,null,2),function(){
    console.log('写入成功')
})