<template>
    <div>
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <h1>权限<small>权限管理</small></h1>
            <ol class="breadcrumb">
                <li><a href="#"><i class="fa fa-dashboard"></i> Level</a></li>
                <li class="active">Here</li>
            </ol>
        </section>

        <!-- Main content -->
        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <router-link to="permissions/add">
                        <button type="button" class="btn btn-primary">添加权限</button>
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
                            <table id="permissionTable" class="table table-bordered table-striped">
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>权限名</th>
                                    <th>权限显示标题</th>
                                    <th>描述</th>
                                    <th>创建时间</th>
                                    <th>修改时间</th>
                                </tr>
                                </thead>
                                <tbody>

                                </tbody>
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
                $("#permissionTable").dataTable({
                    "bStateSave": true,
                    "autoWidth": false,
                    "processing": true,
                    "serverSide": true,
                    "ajax": {
                        'url':that.$store.state.siteUrl+'/permissionList',
                        'type':'get',
                        'dataType':'json',
                       // 'dataSrc':function (data) {
                            //return data.data.data;
                       // }
                    },

                    "columns": [
                        { "data": "id"},
                        { "data": "name","orderable": true},
                        { "data": "display_name","orderable": false},
                        { "data": "description","orderable": false},
                        { "data": "created_at"},
                        { "data": "updated_at"}
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