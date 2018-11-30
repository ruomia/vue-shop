<template>
    <div>
        <header class="top-header fixed-header">
            <a class="icona" href="javascript:history.go(-1)">
                    <img src="../assets/images/left.png"/>
                </a>
            <h3>男装专区</h3>
                
                <a class="iconb" href="shopcar.html">
                    <img src="../assets/images/shopbar.png"/>
                </a>
        </header>
        
        <div class="contaniner fixed-conta">
            <section class="list">
                <figure><img src="../assets/images/list-ban01.png"/></figure>
                <div class="search">
                    <input type="search" placeholder="韩版卫衣" v-model="search.keywords" />
                    <label><img @click="dosearch" src="../assets/images/list-search.png"/></label>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="#">
                                <span>全部</span>
                            </a>
                        </li>
                        <li class="list-active">
                            <a href="#">
                                <span>销量</span>
                                <img src="../assets/images/up-red.png"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>价格</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>评价</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <ul class="wall"
                    v-infinite-scroll="loadMore"
                    infinite-scroll-disabled="disableLoad"
                    infinite-scroll-distance="50"
                >
                    <li class="pic" v-for="(v,k) in goods" :key="k">
                        <router-link :to="'/goods?id='+v.id">
                            <img src="http://piw9e4fr5.bkt.clouddn.com/5bff4ca206e72.png"/>
                            <p>{{v.name}}</p>
                            <b>￥fg3242</b>
                        </router-link>
                    </li>
                 
                   
                </ul>
                <wv-loadmore id="stopLoad" v-if="isLastPage" type="lineDot" text="loading"></wv-loadmore>
                <wv-loadmore v-else></wv-loadmore>
            </section>
        </div>
	
    </div>
</template>

<script>
export default {
    data(){
        return {
            search:{
                page:1,
                per_page:1,
                keywords:this.$route.query.keywords,
                sortby:'id',
                order:'desc',
            },
            goods:[],
            isLastPage:false, //是否已经到最后一页了
            disableLoad: false, //是否禁止滚动加载
        }
    },
    // 当这个组件加载时会被自动调用
    created(){
        this.dosearch()
    },
    methods:{
        setSort(c){
            // 改变排序方式
            this.search.order = this.search.order == 'desc' ? 'asc' : 'desc'
            // 重新 加载数据
            this.dosearch()
        },
        // 当滚动条滚动到距离底部50像素时被调用
        loadMore(){
            // 先禁用滚动加载，否则的话会不停的加载
            this.disableLoad = true
            // 当前页码+1
            this.search.page++
            this.axios.get('/goods',{params: this.search})
                .then(res=>{
                    // 将新搜索出来的数据合并到原来的数据中
                    this.goods = this.goods.concat(res.data.data.data)

                    if(res.data.data.last_page > this.search.page)
                    {
                        // 设置允许据需加载
                        this.disableLoad = false
                    }
                    else
                    {
                        // 设置已经到底，切换图标
                        this.isLastPage= true
                    }
                })
        },
        dosearch(){
            console.log(this.search)
            if(this.$route.query.keywords != "")
            {   
                /* 注意：当使用axios 发送get请求时，第二个参数必须要放到params: 里面  */
                this.axios.get('/goods',{params: this.serach})
                .then( res=>{
                    console.log(res.data.data.data)
                    this.goods = res.data.data.data
                })
            }
            
        }
    }
}
</script>




