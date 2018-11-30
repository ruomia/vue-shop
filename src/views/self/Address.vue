<template>
    <div>
        <header class="top-header fixed-header">
            <a class="icona" href="javascript:history.go(-1)">
                    <img src="@/assets/images/left.png"/>
                </a>
            <h3>地址管理</h3>
                
                <a class="text-top" href="go-address.html">
                    添加
                </a>
        </header>
        
        <div class="contaniner fixed-conta">
            <dl class="address">
                <a href="go-address.html" v-for="v  in data" :key="v.id">
                    <dt>
                        <p>{{v.name}}</p>
                        <span>{{v.mobile}}</span>
                        <small v-if="v.default=='1'">默认</small>
                    </dt>
                    <dd>{{v.province}}</dd>
                </a>
            </dl>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            data:[]
        }
    },
    created(){
        this.axios.get('http://127.0.0.1:8000/api/addresses')
                  .then( (res)=>{
                      console.log(res)
                      if(res.data.status_code=='200')
                      {
                           this.data = res.data.data 
                      }
                  })
    }
}
</script>

