<template>
    <div>
        <header class="top-header">
            <a class="text texta" href="index.html">取消</a>
            <h3>注册</h3>
            <a class="text" href="login.html">登录</a>
        </header>
        
        <div class="login">
            <form action="" method="post">
                
                <ul>
                    <li>
                        <img src="@/assets/images/login.png"/>
                        <label>账号</label>
                        <input type="text" placeholder="请输入账号" v-model="form.username"/>
                    </li>
                    <li>
                        <img src="@/assets/images/password.png"/>
                        <label>密码</label>
                        <input type="password" placeholder="请输入密码" v-model="form.password"/>
                    </li>
                    <li>
                        <img src="@/assets/images/password.png"/>
                        <label>密码</label>
                        <input type="password" placeholder="请确认密码" v-model="form.password_confirmation"/>
                    </li>
                </ul>
                <input @click.prevent="submit" type="submit" value="立即注册"/>
            </form>
        </div>
    </div>
</template>

<script>
import { Dialog, Toast } from 'we-vue'
export default {
    data(){
        return {
            form:{
                username:'',
                password:'',
                password_confirmation:'',
                mobile:'17805202039',
            }    
        }
    },
    methods:{
        submit(){
            this.axios.post("/members",this.form)
                .then( (res)=>{
                    if(res.data.status_code=='200')
                    {
                        // 注册成功之后提示
                        Dialog({
                            message: '注册成功',
                            skin: 'ios'
                        }).then(res=>{
                             this.$router.push('/login')
                        })     
                    }
                    else
                    {
                        Toast({
                            duration: 1000,
                            message: '操作失败',
                            icon: 'warn'
                        })
                    }
                })
        }
    }
}
</script>

