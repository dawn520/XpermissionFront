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
                    <button type="button" class="btn btn-primary">添加用户</button>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12">
                    <div class="box">
                        <div class="box-header">
                            <h3 class="box-title">Data Table With Full Features</h3>
                        </div>
                        <!-- /.box-header -->
                        <div class="box-body">
                            <table id="example1" class="table table-bordered table-striped">
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>用户名</th>
                                    <th>昵称</th>
                                    <th>email</th>
                                    <th>角色</th>
                                </tr>
                                </thead>
                                <tbody>

                                </tbody>
                                <tfoot>
                                <tr>
                                    <th>ID</th>
                                    <th>用户名</th>
                                    <th>昵称</th>
                                    <th>email</th>
                                    <th>角色</th>
                                </tr>
                                </tfoot>
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
            this.$nextTick(function () {
                $("#example1").dataTable({

                    "bStateSave": true, // save datatable state(pagination, sort, etc) in cookie.


                    "autoWidth": false,

                    "processing": true,


                    "ajax": {
                        url:module + "/Form/load_form",//你对数据库的操作路径

                        type:'post',
                        dataType:'json',
                        data:  {                     //要传递的数据

                            zhuanye: function() {
                                return $("#zhuanye").val();
                            }
                        },
                    },

                    "columns": [
                        { "data": "checkbox"},
                        { "data": "cpqx"},
                        { "data": "bj"},
                        { "data": "xh"},
                        { "data": "xm"},
                        { "data": "jdf"},
                        { "data": "jdfmc"},
                        { "data": "zf"},
                        { "data": "mc"},
                        { "data": "caozuo"}
                    ],

                    "lengthMenu": [
                        [5, 15, 20, -1],
                        [5, 15, 20, "All"] // change per page values here

                    ],
                    // set the initial value

                    "pageLength": 10,
                    "pagingType": "bootstrap_full_number",
                    "columnDefs": [{  // set default column settings

                        'orderable': false,
                        'targets': [0]
                    }, {
                        "searchable": false,
                        "targets": [0]
                    }],
                    // "scrollX": true,

                    "order": [
                        [4, "asc"]
                    ], // set first column as a default sort by asc

                    "stripeClasses":
                            ['gradeX odd', '"gradeX even"']
                    ,
                    "language": {
                        "sProcessing": '<div align="center" id="showtable"><img src="'+siteurl+'/Public/assets/global/img/ajax-loading.gif" />处理中……</div>',
                        "sLengthMenu": "显示 _MENU_ 项结果",
                        "sZeroRecords": "没有匹配结果",
                        "sInfo": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
                        "sInfoEmpty": "显示第 0 至 0 项结果，共 0 项",
                        "sInfoFiltered": "(由 _MAX_ 项结果过滤)",
                        "sInfoPostFix": "",
                        "sSearch": "搜索:",
                        "sUrl": "",
                        "sEmptyTable": "表中数据为空!请在上面的“学院”和“专业”中选择一个来查看综合素质表格列表",
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





                $('#example2').DataTable({
                        "paging": true,
                        "lengthChange": false,
                        "searching": false,
                        "ordering": true,
                        "info": true,
                        "autoWidth": false
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