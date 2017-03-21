<template>
    <div>
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <h1>添加用户<small></small></h1>
            <ol class="breadcrumb">
                <li><a href="#"><i class="fa fa-dashboard"></i> Level</a></li>
                <li class="active">Here</li>
            </ol>
        </section>

        <!-- Main content -->
        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box box-info">
                        <div class="box-header with-border">
                            <h3 class="box-title"> </h3>
                        </div>
                        <form style="max-width: 400px;margin: auto">
                            <div class="box-body">
                                <transition  enter-active-class="animated tada"
                                             leave-active-class="animated bounceOutRight">
                                    <div class="alert alert-success alert-dismissible" v-if="returnSuccess=='yes'">
                                        <button type="button" class="close" @click="returnSuccess=no"
                                                aria-hidden="true">×
                                        </button>
                                        <h4><i class="icon fa fa-check"></i> 提示!</h4>
                                        {{returnMSG}}
                                    </div>
                                </transition>

                                <div class="form-group"  v-bind:class="{ 'has-error': errors.has('username') }">
                                    <transition enter-active-class="animated shake"
                                                leave-active-class="xx">
                                        <label class="control-label" v-show="errors.has('username')">
                                            <i class="fa fa-times-circle-o"></i> {{ errors.first('username') }}
                                        </label>
                                    </transition>
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="fa fa-user"></i></span>
                                        <input type="text" class="form-control" v-model="username" name="username" v-validate="{ rules: { required: true,alpha_dash:true,min: 4,max:16 } }" data-vv-as="用户名" placeholder="用户名">
                                    </div>
                                </div>
                                <div class="form-group"  v-bind:class="{ 'has-error': errors.has('name') }">
                                    <transition enter-active-class="animated shake"
                                                leave-active-class="xx">
                                        <label class="control-label" v-show="errors.has('name')">
                                            <i class="fa fa-times-circle-o"></i> {{ errors.first('name') }}
                                        </label>
                                    </transition>
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="fa fa-user-secret"></i></span>
                                        <input type="text" class="form-control" v-model="name" name="name" v-validate="{ rules: { required: true,min: 2,max:10 } }" data-vv-as="昵称" placeholder="昵称">
                                    </div>
                                </div>
                                <div class="form-group" v-bind:class="{ 'has-error': errors.has('email') }">
                                    <transition enter-active-class="animated shake"
                                                leave-active-class="xx">
                                        <label class="control-label" v-show="errors.has('email')">
                                            <i class="fa fa-times-circle-o"></i> {{ errors.first('email') }}
                                        </label>
                                    </transition>
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="fa fa-envelope"></i></span>
                                        <input type="text" class="form-control" v-model="email" name="email" v-validate="{ rules: { required: true, email: true } }" data-vv-as="邮箱" placeholder="E-mail">
                                    </div>
                                </div>
                                <div class="form-group"  v-bind:class="{ 'has-error': errors.has('password') }">
                                    <transition enter-active-class="animated shake"
                                                leave-active-class="xx">
                                        <label class="control-label" v-show="errors.has('password')">
                                            <i class="fa fa-times-circle-o"></i> {{ errors.first('password') }}
                                        </label>
                                    </transition>
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="fa fa-lock"></i></span>
                                        <input type="password" class="form-control" v-model="password" name="password" v-validate="{ rules: { required: true,min: 8,max:20 } }" data-vv-as="密码" placeholder="密码">
                                    </div>
                                </div>
                                <div class="form-group"  v-bind:class="{ 'has-error': errors.has('password_confirmation') }">
                                    <transition enter-active-class="animated shake"
                                                leave-active-class="xx">
                                        <label class="control-label" v-show="errors.has('password_confirmation')">
                                            <i class="fa fa-times-circle-o"></i> {{ rpasswordE }}
                                        </label>
                                    </transition>
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="fa fa-lock"></i></span>
                                        <input type="password" class="form-control" v-model="password_confirmation"  name="password_confirmation" v-validate data-vv-rules="required|confirmed:password" data-vv-as="重复密码" placeholder="重复密码">
                                    </div>
                                </div>
                            </div>
                            <!-- /.box-body -->
                            <div class="box-footer">
                                <button type="button" class="btn btn-default" @click="resetting">重置</button>
                                <button type="button" class="btn btn-info pull-right" @click="add">添加</button>
                            </div>
                            <!-- /.box-footer -->
                        </form>
                    </div>
                </div>
                <!-- /.col -->
            </div>
            <!-- /.row -->
        </section>
        <!-- /.content -->
    </div>
</template>
<script>
    export default {
        data:function () {
            return {
                username: '',
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
                returnSuccess: '',
                returnMSG: ''
            }
        },
        computed: {
            rpasswordE:function () {
                var msg;
                if(this.password.length<=0){
                    msg = this.errors.first('password_confirmation');
                }else{
                    msg = "两次输入的密码不匹配！"
                }
                return msg;
            }

        },
        created:function (){
            if(this.$route.params.id){
                getData(this.$route.params.id);
            }
            this.$nextTick(function () {
            });
        },

        watch: {
            '$route': function () {

            }
        },
        methods: {
            add:function () {
                this.$validator.validateAll().then(success => {
                    if (! success) {
                        // handle error
                        return;
                    }
                    var param = {
                        username             : this.username,
                        name                 : this.name,
                        email                : this.email,
                        password             : this.password,
                        password_confirmation: this.password_confirmation
                    };
                    this.$http.post(this.$store.state.siteUrl+'/addUser', param).then(function(response){
                        var data = response.data;
                        var that = this;
                        if(data.code==200){
                            this.returnSuccess = 'yes';
                            this.returnMSG = data.message;
                            this.resetting();
                            setTimeout(function () {
                                that.errors.clear();
                            },10);

                        }else{
                            this.returnSuccess = 'no';
                            this.returnMSG = data.message;
                            for(var key in data.message){
                                this.errors.errors.unshift({field:key,msg:data.message[key][0],scope:"__global__"})
                            }
                        }
                    }).catch(function(response) {
                        this.returnSuccess = 'no';
                        this.returnMSG = '系统出错，请稍后再试！';
                    });
                });
            },
            resetting:function () {
                this.username = '';
                this.name = '';
                this.email = '';
                this.password = '';
                this.password_confirmation = '';
            },
            getData:function (id) {
                var param = {
                    id:id
                };
                this.$http.post(this.$store.state.siteUrl+'/user', param).then(function(response){
                    var data = response.data;
                    var that = this;
                    if(data.code==200){
                        this.username = '';
                        this.name = '';
                        this.email = '';
                        this.password = '';
                        this.password_confirmation = '';

                    }else{

                    }
                }).catch(function(response) {
                    this.returnSuccess = 'no';
                    this.returnMSG = '系统出错，请稍后再试！';
                });
            }


        },
        components: {

        }
    }
</script>