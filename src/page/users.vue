<template>
    <div>
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <h1>用户<small>用户管理</small></h1>
            <ol class="breadcrumb">
                <li><a href="#"><i class="fa fa-dashboard"></i> Level</a></li>
                <li class="active">Here</li>
            </ol>
        </section>

        <!-- Main content -->
        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <router-link to="users/add">
                        <button type="button" class="btn btn-primary">添加用户</button>
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
                            <table id="example1" class="table table-bordered table-striped">
                            </table>
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
                title: '首页',
                smallTitle: '这里是首页',
            }
        },
        computed: {

        },
        created:function (){
            var that = this ;
            this.$nextTick(function () {
                $("#example1").dataTable({
                    "bStateSave": true,
                    "autoWidth": false,
                    "processing": true,
                    "serverSide": true,
                    "ajax": {
                        'url':that.$store.state.siteUrl+'/userList',
                        'type':'get',
                        'dataType':'json',
                        // 'dataSrc':function (data) {
                        //return data.data.data;
                        // }
                    },

                    "columns": [
                        { "title":'ID',"data": "id"},
                        { "title":'用户名',"data": "username","orderable": true},
                        { "title":'昵称',"data": "name","orderable": false},
                        { "title":'email',"data": "email","orderable": false},
                        { "title":'创建时间',"data": "created_at"},
                        { "title":'更新时间',"data": "updated_at"}
                    ],

                    "lengthMenu": [
                        [5, 10, 20, -1],
                        [5, 10, 20, "All"] // change per page values here

                    ],
                    // set the initial value
                    // "displayLength": 5,
                    "pageLength": 5,
                    // "pagingType": "bootstrap_full_number",
//                    "columnDefs": [{  // set default column settings
//                        'orderable': false,
//                        'targets': [0]
//                    }, {
//                        "searchable": false,
//                        "targets": [0]
//                    }],
//                    // "scrollX": true,
//
                    "order": [
                        [1, "asc"]
                    ], // set first column as a default sort by asc
//
//                    "stripeClasses":
//                            ['gradeX odd', '"gradeX even"']
//                    ,
                    "language": {
                        "sProcessing": '处理中……',
                        "sLengthMenu": "显示 _MENU_ 项结果",
                        "sZeroRecords": "没有匹配结果",
                        "sInfo": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
                        "sInfoEmpty": "显示第 0 至 0 项结果，共 0 项",
                        "sInfoFiltered": "(由 _MAX_ 项结果过滤)",
                        "sInfoPostFix": "",
                        "sSearch": "搜索:",
                        "sUrl": "",
                        "sEmptyTable": "表中数据为空!",
                        "sLoadingRecords": "载入中...",
                        "sInfoThousands": ",",
                        "oPaginate": {
                            "sFirst": "首页",
                            "sPrevious": "上页",
                            "sNext": "下页",
                            "sLast": "末页"
                        },
                        "oAria": {
                            "sSortAscending": ": 以升序排列此列",
                            "sSortDescending": ": 以降序排列此列"
                        }
                    },

                });
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