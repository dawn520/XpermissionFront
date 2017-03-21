<template>
    <div>
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <h1>权限组<small>组管理</small></h1>
            <ol class="breadcrumb">
                <li><a href="#"><i class="fa fa-dashboard"></i> Level</a></li>
                <li class="active">Here</li>
            </ol>
        </section>

        <!-- Main content -->
        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <router-link to="group/add">
                        <button type="button" class="btn btn-primary">添加组</button>
                    </router-link>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12">
                    <div class="box">
                        <div class="box-header">
                           <!-- <h3 class="box-title"></h3>-->
                        </div>
                        <!-- /.box-header -->
                        <div class="box-body">
                            <v-server-table :url="url" :columns="columns" :options="options"></v-server-table>
                        </div>
                        <!-- /.box-body -->
                    </div>
                    <!-- /.box -->
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
                url:this.$store.state.siteUrl+'/groupList',
                columns:['id','name','display_name','description','created_at','updated_at'],
                options: {
                    headings: {
                        id:'ID',
                        name: '组名',
                        display_name: '组显示标题',
                        description: '描述',
                        created_at: '创建时间',
                        updated_at: '修改时间'
                    },
                    perPage:5,
                    perPageValues:[1,2,3,4],
                    texts:this.$store.state.tableTexts
                },

            }
        },
        computed: {

        },
        created:function (){
            var that = this ;
            this.$nextTick(function () {

            });
        },

        watch: {
            '$route': function () {

            }
        },
        methods: {


        },
        components: {

        }
    }
</script>