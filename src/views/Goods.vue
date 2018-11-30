<template>
    <div>
        <header class="detail-header fixed-header">
            <a href="javascript:history.go(-1)"><img src="@/assets/images/detail-left.png"/></a>
            
            <a href="shopcar.html" class="right"><img src="@/assets/images/shopbar.png"/></a>
        </header>
        
	
        <div class="contaniner fixed-contb">
            <section class="detail">
                <figure class="swiper-container">
                    <wv-swipe :height="330" :autoplay="4000" continuous="true">
                        <wv-swipe-item><img src="@/assets/images/detail-ban01.png" height="330"></wv-swipe-item>
                        <wv-swipe-item><img src="@/assets/images/detail-ban02.png" height="330"/></wv-swipe-item>
                        <wv-swipe-item><img src="@/assets/images/detail-ban03.png" height="330"/></wv-swipe-item>
                    </wv-swipe>
             
                    <div class="swiper-pagination">
                    </div>
                </figure>
                <dl class="jiage">
                    <dt>
                        <h3>{{goods.name}}</h3>
                        <div class="collect">
                            <img src="@/assets/images/detail-heart-hei.png"/>
                            <p>收藏</p>
                        </div>
                    </dt>
                    <dd v-if="sku.price">
                        <b>￥{{sku.price}}</b>
                        <del>￥139</del>
                        <!-- <input type="button" value="￥10.00" readonly /> -->
                        <small>+356积分</small>
                    </dd>

                </dl>
                <div class="buy-count" v-if="sku.stock">
                    购买数量：（库存：{{sku.stock}}）
                    <wv-number-spinner
                        :min="1"
                        :max="sku.stock"
                        v-model="buyCount">
                    </wv-number-spinner>
                    </div>
                <div class="chose">
                    <ul v-for="(v,k,i) in attrs" :key="i">
                        <h3>{{k}}</h3>
                        <li @click="setActive(k,k1)" v-for="(v1,k1) in v" :key="k1" :class="{'chose-active':v1.checked}">
                            {{v1.value}}
                        </li>
                    </ul>

                </div>
                
                <a href="#" class="seven">
                    <b>7</b>天无理由退换货
                </a>
                
                <ul class="same">
                    <a href="#">
                        <span>
                            同类推荐
                        </span>
                        <li class="one">
                            <img src="@/assets/images/detail-pp01.png"/>
                            <p>￥188.00</p>
                        </li>
                        <li>
                            <img src="@/assets/images/detail-pp02.png"/>
                            <p>￥188.00</p>
                        </li>
                        <li>
                            <img src="@/assets/images/detail-pp03.png"/>
                            <p>￥188.00</p>
                        </li>
                        <li>
                            <img src="@/assets/images/detail-pp04.png"/>
                            <p>￥188.00</p>
                        </li>
                    </a>
                </ul>
                
                <article class="detail-article">
                    <nav>
                        <ul>
                            <li>商品详情</li>
                            <li class="article-active">评价</li>
                        </ul>
                    </nav>
                    <section class="talkbox">
                        <ul class="talk">
                            <li>
                                <figure><img src="@/assets/images/detail-tou.png"/></figure>
                                <dl>
                                    <dt>
                                        <p>弱小喵</p>
                                        <time>2015.11.17</time>
                                        <div class="star">
                                            <span><img src="@/assets/images/detail-iocn01.png"/></span>
                                            <span><img src="@/assets/images/detail-iocn01.png"/></span>
                                            <span><img src="@/assets/images/detail-iocn01.png"/></span>
                                            <span><img src="@/assets/images/detail-iocn001.png"/></span>
                                            <span><img src="@/assets/images/detail-iocn001.png"/></span>
                                        </div>
                                    </dt>
                                    <dd>还可以吧，很好看，质量还不错，就是快递大叔实在慢死了</dd>
                                    <small>颜色：豹纹凯特</small>
                                </dl>
                            </li>
                            <li>
                                <figure><img src="@/assets/images/detail-tou.png"/></figure>
                                <dl>
                                    <dt>
                                        <p>弱小喵</p>
                                        <time>2015.11.17</time>
                                        <div class="star">
                                            <span><img src="@/assets/images/detail-iocn01.png"/></span>
                                            <span><img src="@/assets/images/detail-iocn01.png"/></span>
                                            <span><img src="@/assets/images/detail-iocn01.png"/></span>
                                            <span><img src="@/assets/images/detail-iocn001.png"/></span>
                                            <span><img src="@/assets/images/detail-iocn001.png"/></span>
                                        </div>
                                    </dt>
                                    <dd>还可以吧，很好看，质量还不错，就是快递大叔实在慢死了</dd>
                                    <small>颜色：豹纹凯特</small>
                                    <div class="picbox">
                                        <img src="@/assets/images/detail-pp01.png"/>
                                        <img src="@/assets/images/detail-pp02.png"/>
                                        <img src="@/assets/images/detail-pp03.png"/>
                                        <img src="@/assets/images/detail-pp04.png"/>
                                    </div>
                                </dl>
                            </li>
                            <li>
                                <figure><img src="@/assets/images/detail-tou.png"/></figure>
                                <dl>
                                    <dt>
                                        <p>弱小喵</p>
                                        <time>2015.11.17</time>
                                        <div class="star">
                                            <span><img src="@/assets/images/detail-iocn01.png"/></span>
                                            <span><img src="@/assets/images/detail-iocn01.png"/></span>
                                            <span><img src="@/assets/images/detail-iocn01.png"/></span>
                                            <span><img src="@/assets/images/detail-iocn001.png"/></span>
                                            <span><img src="@/assets/images/detail-iocn001.png"/></span>
                                        </div>
                                    </dt>
                                    <dd>还可以吧，很好看，质量还不错，就是快递大叔实在慢死了</dd>
                                    <small>颜色：豹纹凯特</small>
                                </dl>
                            </li>
                            <li>
                                <figure><img src="@/assets/images/detail-tou.png"/></figure>
                                <dl>
                                    <dt>
                                        <p>弱小喵</p>
                                        <time>2015.11.17</time>
                                        <div class="star">
                                            <span><img src="@/assets/images/detail-iocn01.png"/></span>
                                            <span><img src="@/assets/images/detail-iocn01.png"/></span>
                                            <span><img src="@/assets/images/detail-iocn01.png"/></span>
                                            <span><img src="@/assets/images/detail-iocn001.png"/></span>
                                            <span><img src="@/assets/images/detail-iocn001.png"/></span>
                                        </div>
                                    </dt>
                                    <dd>还可以吧，很好看，质量还不错，就是快递大叔实在慢死了</dd>
                                    <small>颜色：豹纹凯特</small>
                                    <div class="picbox">
                                        <img src="@/assets/images/detail-pp01.png"/>
                                        <img src="@/assets/images/detail-pp02.png"/>
                                        <img src="@/assets/images/detail-pp03.png"/>
                                        <img src="@/assets/images/detail-pp04.png"/>
                                    </div>
                                </dl>
                            </li>
                        </ul>
                    </section>
                    
                </article>
            </section>
        </div>
	
	
		<footer class="detail-footer fixed-footer">
			<div href="#" class="go-car">
				<input @click="addToCart" type="button" value="加入购物车"/>
			</div>
			<a href="buy.html" class="buy">
				立即购买
			</a>
		</footer>
    </div>
</template>

<script>
import { Dialog } from 'we-vue'
export default {
    data(){
        return {
            goods:{},
            attrs:{},
            sku:{},
            buyCount:1,//先初始化为1
        }
    },
    created(){
        // 获取商品信息
        this.axios.get('/goods?id='+this.$route.query.id)
            .then(res=>{
                this.goods = res.data.data
            })
        // 获取商品的所有sku属性
        this.axios.get('/attributes?goods_id='+this.$route.query.id)
            .then(res=>{
                this.attrs = res.data.data
            })
    },
    methods:{
        setActive(k,k1){
            for(var i=0;i<this.attrs[k].length;i++)
            {
                // 如果i 等于 被点击属性的id ，就选中
                if(i==k1)
                    this.attrs[k][i].checked = true
                else
                    this.attrs[k][i].checked = false
            }
            this.getSku()
        },
        getSku(){
            var attr_id = '';
            for(var item in this.attrs)
            {   
                var attr = this.attrs[item].find(v=>v.checked)
                // 保证每个属性里面都有一个被选中的，否则就直接return
                if(attr)
                {
                    if(attr_id=='')
                    {
                        attr_id = attr.id
                    }
                    else
                    {
                        attr_id += ','+attr.id
                    }
                }
                else
                    return;
            }
            this.axios.get('/skus?attr_id='+attr_id)
            .then(res=>{
                // console.log(res.data)
                this.sku = res.data.data
            })
        },
        addToCart(){
            if(Object.keys(this.sku).length==0)
            {
                return Dialog({
                    message: '请先选择商品',
                    skin: 'ios'
                })
                
            }
            // 获取购物车数据
            let cart = localStorage.getItem('cart')
            // 将cart 转成json
            cart = cart ? JSON.parse(cart) : []
            // 获取当前勾选 skuid
            let skuid = this.sku.id
            // 根据 skuid 从购物车中查找这件商品
            let searchInfo = cart.find(v=>v.sku_id==skuid)
            if(searchInfo)
            {
                // 如果购物车中已经存在这件商品就直接在原来基础上加上这次购买的
                searchInfo.buy_count += this.buyCount
                // 如果超出库存就设置为最大库存量
                if(searchInfo.buy_count > this.sku.stock)
                    searchInfo.buy_count = this.sku.stock
            }
            else
            {
                // 放到购物车数组中
                cart.push({
                    sku_id:skuid,
                    buy_count:this.buyCount,
                    checked:false
                })
            }
            // 把数组写回浏览器
            localStorage.setItem('cart',JSON.stringify(cart))
            // 跳转到购物车页面
            this.$router.push('/cart')
        }
    }
}
</script>

<style>
.buy-count {
  background-color: #fff;
  padding: 20px;
  margin-top: 5px;
}
.buy-count .wv-number-spinner {
  width: 50%;
  float: right;
}
</style>