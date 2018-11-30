<template>
    <div>
        <header class="page-header">
            <h3>购物车</h3>
        </header>
        
        <div class="contaniner fixed-contb">
            <section class="shopcar" v-for="(v,k) in goods" :key="k">
                <div class="shopcar-checkbox" >
                    <label @click="setActive(v.id)"  for="shopcar" :class="{'shopcar-checkd':cart.find(v1=>v1.sku_id==v.id).checked}" onselectstart="return false"></label>
                    <input type="checkbox" id="shopcar"/>
                </div>
                <figure><img src="../../assets/images/shopcar-ph01.png"/></figure>
                <dl>
                    <dt>{{v.name}}</dt>
                    <div class="add">
                        <span @click="minus(v.id)" class="carbtn">  -  </span>
                        <input type="text" :value="cart.find(v1=>v1.sku_id==v.id).buy_count" />
                        <span @click="plus(v.id)" class="carbtn">  +  </span>
                    </div>
                    <h3>￥{{v.price}}</h3>
                    <small @click="del(k)"><img src="@/assets/images/shopcar-icon01.png"/></small>
                </dl>
            </section>
            <!--去结算-->
            <div style="margin-bottom: 16%;"></div>
            
        </div>
        <!-- <div style="margin-bottom: 16%;"></div> -->

        <div class="page-footer" id="shopGo">
            <div class="shop-go">
                <b>合计：￥{{totalPrice}}</b>
                <span><router-link to="/buy">去结算（{{totalCount}}）</router-link></span>
            </div>
        </div>
    </div>
</template>
<style>
#shopGo{
    position:fixed;
    bottom: 76px;
}   
.carbtn {
    padding: 0 10px !important;
}
</style>
<script>
export default {
    data() {
        return {
            goods:[],        //服务器返回的商品信息
            cart: undefined, //浏览器中购物车的数组
        }
    },
    created(){
        // 从浏览器中取出购物车数组
        let cart = localStorage.getItem('cart')
        // 如果购物车中有商品
        if(cart)
        {
            // 将cart 转成json 并保存到 vue的数据对象中，这样就可以在页面中使用了
            this.cart = JSON.parse(cart)
            // 从购物车数组中提取所有商品的 skuid并拼成一个字符串，格式：1,2,3,4
            let skuIds = this.cart.flatMap(v=>v.sku_id).join(',')
         
            this.axios.get('/goods?sku_id='+skuIds)
                .then(res=>{
                    this.goods = res.data.data
                })
        }
        else   
            this.$router.push('/')
    },
    methods:{
        minus(skuid){
            let cart = this.cart.find(v=>v.sku_id==skuid)

            if(cart.buy_count>1)
            {
                cart.buy_count--
                // 把内存中的数据写入浏览器
                localStorage.setItem('cart',JSON.stringify(this.cart))
            }
        },
        plus(skuid){
            // 根据点击的商品ID找出购物车中对应的记录
            let cart = this.cart.find(v=>v.sku_id==skuid)
            // 修改购买数量
            cart.buy_count++
            // 把内存中的数据写入浏览器
            localStorage.setItem('cart',JSON.stringify(this.cart))

        },
        setActive(skuid){
            // 根据点击的商品ID找出购物车中对应的记录
            let cart = this.cart.find(v=>v.sku_id==skuid)
            // 修改勾选状态
            cart.checked = !cart.checked
            // 把内存中的数据写入浏览器
            localStorage.setItem('cart',JSON.stringify(this.cart))
        },
        del(k){
            if(confirm('请问确定要删除吗？'))
            {
                this.goods.splice(k,1)
            }
        }
    },
    computed: {
        totalPrice(){
            let sum = 0
            for(let i=0;i<this.cart.length;i++)
            {
                if(this.cart[i].checked)
                {
                    // sum += this.cart[i].price * this.cart[i].buy_count
                }
            }
            return sum.toFixed(2)
        },
        totalCount(){
            let sum = 0
            for(let i=0;i<this.cart.length;i++)
            {
                if(this.cart[i].checked)
                {
                    sum += Number(this.cart[i].buy_count)
                }
            }
            return sum
        },
    }

}
</script>

