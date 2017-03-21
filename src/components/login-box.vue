<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div class="login-box">
        <div class="login-logo">
            <a href="../../index2.html"><b>X</b>permission</a>
        </div>
        <!-- /.login-logo -->
        <div class="login-box-body">
            <p class="login-box-msg">登录</p>
            <transition enter-active-class="animated tada"
                        leave-active-class="animated bounceOutRight">


                <div class="alert alert-warning alert-dismissible" v-if="error">
                    <button type="button" class="close" @click="error=false" aria-hidden="false">×</button>
                    {{errorMSG}}
                </div>
            </transition>
            <form action="#" method="post">
                <div class="form-group has-feedback" v-bind:class="{ 'has-error': usernameError }">
                    <transition enter-active-class="animated shake"
                                leave-active-class="animated fadeOutDown">
                        <label class="control-label" v-if="usernameError">
                            <i class="fa fa-times-circle-o"></i> 用户名不能为空！
                        </label>
                    </transition>
                    <el-input type="email" popper-class="form-control" v-model="username" placeholder="用户名"></el-input>
                    <span class="glyphicon glyphicon-user form-control-feedback"></span>
                </div>
                <div class="form-group has-feedback" v-bind:class="{ 'has-error': passwordError }">
                    <transition enter-active-class="animated shake"
                                leave-active-class="animated fadeOutDown">
                        <label class="control-label" v-if="passwordError">
                            <i class="fa fa-times-circle-o"></i> 密码不能为空！
                        </label>
                    </transition>
                    <el-input type="password" popper-class="form-control" v-model="password" placeholder="密码"></el-input>
                    <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                </div>
                <div class="row">
                    <div class="col-xs-8">
                        <div class="checkbox icheck">
                            <label>
                                <el-checkbox v-model="checked">记住我</el-checkbox>
                            </label>
                        </div>
                    </div>
                    <!-- /.col -->
                    <div class="col-xs-4">
                        <el-button type="primary" @click="login"> 登录</el-button>
                    </div>
                    <!-- /.col -->
                </div>
            </form>
            <!--
            <div class="social-auth-links text-center">
                <p>- OR -</p>
                <a href="#" class="btn btn-block btn-social btn-facebook btn-flat"><i class="fa fa-facebook"></i> Sign in using
                    Facebook</a>
                <a href="#" class="btn btn-block btn-social btn-google btn-flat"><i class="fa fa-google-plus"></i> Sign in using
                    Google+</a>
            </div>


            <a href="#">I forgot my password</a><br>
            <a href="register.html" class="text-center">Register a new membership</a>
            -->
        </div>

        <!-- /.login-box-body -->
    </div>
    <!-- /.login-box -->
</template>
<script>
    export default {
        data:function () {
            return {
                username: '',
                password: '',
                usernameError:false,
                passwordError:false,
                error:false,
                errorMSG:'',
                checked:''
            }
        },
        created:function (){

        },

        watch: {
            '$route': function () {

            },
            username: function (newUsername) {
                if(newUsername.length<=0){
                    this.usernameError = true;
                }else{
                    this.usernameError = false;
                }
            },
            password: function (newPassword) {
                if(newPassword.length<=0){
                    this.passwordError = true;
                }else{
                    this.passwordError = false;
                }
            }
        },
        methods: {
            login:function () {
                this.username = $.trim(this.username);
                this.password = $.trim(this.password);
                var error;
                if(this.username.length<=0){
                    this.usernameError = true;
                    error = true;
                }
                if(this.password.length<=0){
                    this.passwordError = true;
                    error = true;
                }
                if(error){
                    return;
                }
                var param = {
                    username:this.username,
                    password:this.password
                };
                this.$http.post(this.$store.state.siteUrl+'/login', param).then(function(response){
                    var data = response.data;
                    if(data.code==200){
                        window.location.href = this.$store.state.siteUrl;
                    }else{
                        this.error = true;
                        this.errorMSG = data.message;
                    }
                }).catch(function(response) {
                    this.error = true;
                    this.errorMSG = '系统出错，请稍后再试！';
                });
            }
        }
    }
</script>