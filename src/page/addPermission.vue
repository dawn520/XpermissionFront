<template>
    <div>
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <h1>添加权限<small></small></h1>
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

                                <div class="form-group"  v-bind:class="{ 'has-error': errors.has('name') }">
                                    <transition enter-active-class="animated shake"
                                                leave-active-class="xx">
                                        <label class="control-label" v-show="errors.has('name')">
                                            <i class="fa fa-times-circle-o"></i> {{ errors.first('name') }}
                                        </label>
                                    </transition>
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="fa fa-font"></i></span>
                                        <input type="text" class="form-control" v-model="name" name="name" v-validate="{ rules: { required: true,alpha_dash:true,min: 4,max:16 } }" data-vv-as="权限名" placeholder="权限名">
                                    </div>
                                </div>
                                <div class="form-group"  v-bind:class="{ 'has-error': errors.has('displayName') }">
                                    <transition enter-active-class="animated shake"
                                                leave-active-class="xx">
                                        <label class="control-label" v-show="errors.has('displayName')">
                                            <i class="fa fa-times-circle-o"></i> {{ errors.first('displayName') }}
                                        </label>
                                    </transition>
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="fa fa-text-height"></i></span>
                                        <input type="text" class="form-control" v-model="displayName" name="displayName" v-validate="{ rules: { required: true,min: 2,max:16 } }" data-vv-as="权限显示标题" placeholder="权限显示标题">
                                    </div>
                                </div>
                                <div class="form-group"  v-bind:class="{ 'has-error': errors.has('description') }">
                                    <transition enter-active-class="animated shake"
                                                leave-active-class="xx">
                                        <label class="control-label" v-show="errors.has('description')">
                                            <i class="fa fa-times-circle-o"></i> {{ errors.first('description') }}
                                        </label>
                                    </transition>
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="fa fa-align-left"></i></span>
                                        <textarea type="text" class="form-control" v-model="description" name="description" v-validate="{ rules: {max:40 } }" data-vv-as="描述" placeholder="描述"></textarea>
                                    </div>
                                </div>
                                <div class="form-group" v-bind:class="{ 'has-error': errors.has('groupId') }">
                                    <transition enter-active-class="animated shake"
                                                leave-active-class="xx">
                                        <label class="control-label" v-show="errors.has('groupId')">
                                            <i class="fa fa-times-circle-o"></i> {{ errors.first('groupId') }}
                                        </label>
                                    </transition>

                                        <el-select style="width: 100%"
                                                   :class="form-control"
                                                   v-model="groupId"
                                                   filterable
                                                   @change="getGroupId"
                                                   placeholder="请选择"
                                                   name="groupId"
                                                   v-validate="{ rules: {required: true } }"
                                                   data-vv-as="组">
                                            <el-option
                                                    v-for="item in groups"
                                                    :key="item.id"
                                                    :label="item.text"
                                                    :value="item.id">
                                            </el-option>
                                        </el-select>


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
                name: '',
                displayName: '',
                description:'',
                groupId : '',
                returnSuccess: '',
                returnMSG: '',
                groups:[]
            }
        },
        computed: {
        },
        created: function () {
            var that = this;
            this.getGroups();
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
                        name        : this.name,
                        displayName : this.displayName,
                        description : this.description,
                        groupId     : this.groupId
                    };
                    this.$http.post(this.$store.state.siteUrl+'/addPermission', param).then(function(response){
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
                this.name = '';
                this.displayName = '';
                this.description = '';
                this.groupId = '';
            },
            getGroups:function () {
                this.$http.get(this.$store.state.siteUrl + '/allGroup').then(function (response) {
                    var data = response.data;
                    var that = this;
                    if (data.code == 200) {
                        that.groups = data.data;
                    }
                }).catch(function (response) {
                    this.returnSuccess = 'no';
                    this.returnMSG = '系统出错，请稍后再试！';
                });
            },
        },
        components: {

        }
    }
</script>