<template>
    <div class="login-box">
        <div class="login-logo">
            <a href="../../index2.html"><b>X</b>permission</a>
        </div>
        <!-- /.login-logo -->
        <div class="login-box-body">
            <p class="login-box-msg">登录</p>

            <form action="#" method="post">
                <div class="form-group has-feedback">
                    <input type="email" class="form-control" v-model="username" placeholder="用户名">
                    <span class="glyphicon glyphicon-user form-control-feedback"></span>
                </div>
                <div class="form-group has-feedback">
                    <input type="password" class="form-control" v-model="password" placeholder="密码">
                    <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                </div>
                <div class="row">
                    <div class="col-xs-8">
                        <div class="checkbox icheck">
                            <label>
                                <input type="checkbox"> 记住我
                            </label>
                        </div>
                    </div>
                    <!-- /.col -->
                    <div class="col-xs-4">
                        <button type="button" class="btn btn-primary btn-block btn-flat" @click="login">登录</button>
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
            }
        },
        created:function (){

        },

        watch: {
            '$route': function () {

            }
        },
        methods: {
            login:function () {
                var param = {
                    email:this.username,
                    password:this.password
                };
                this.$http.post(this.$store.state.siteUrl+'/login', param).then(function(response){
                    // 响应成功回调
                }, function(response){
                    // 响应错误回调
                });
            }
        }
    }
</script>