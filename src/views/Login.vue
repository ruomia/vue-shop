<template>
    <div>
        <header class="top-header">
            <a class="text texta" href="index.html">取消</a>
            <h3>登录</h3>
            <a class="text" href="sign.html">注册</a>
        </header>
        
        <div class="login">
            <form>
                <ul>
                    <li>
                        <img src="@/assets/images/login.png"/>
                        <label>账号</label>
                        <input type="text" placeholder="请输入账号" v-model="username"/>
                    </li>
                    <li>
                        <img src="@/assets/images/password.png"/>
                        <label>密码</label>
                        <input type="password" placeholder="请输入密码" v-model="password"/>
                    </li>
                </ul>
                <input  @click.prevent="submit"  type="submit" value="登录"/>
            </form>
        </div>
    </div>
</template>

<script>
import { Toast } from 'we-vue'
export default {
    data(){
        return {
            username:'',
            password:'',
        }
    },
    methods:{
        submit(){
            this.axios.post('/authorizations', {
                username:this.username,
                password:this.password
            }).then( (res)=> {
                console.log(res)
                if(res.data.status_code=='200')
                {   
                    Toast('登录成功~');
                    localStorage.setItem('ACCESS_TOKEN',res.data.data.ACCESS_TOKEN);
                    // 跳转到首页
                    this.$router.push('/')
                }
                else if(res.data.status_code=='400')
                {
                    Toast({
                        duration: 2000,
                        message: '密码错误！',
                        icon: 'warn'
                    })
                }
                else if(res.data.status_code=='404')
                {
                    Toast({
                        duration: 2000,
                        message: '用户名不存在！',
                        icon: 'warn'
                    })
                }
                else if(res.data.status_code=='422')
                {
                    Toast({
                        duration: 2000,
                        message: '用户名或者密码格式不对！',
                        icon: 'warn'
                    })
                }
                
            })
        }
    }
}
</script>


