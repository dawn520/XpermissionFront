<template>
    <div>
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <h1>
                Page Header{{count}}
                <small>Optional description</small>
            </h1>
            <ol class="breadcrumb">
                <li><a href="#"><i class="fa fa-dashboard"></i> Level</a></li>
                <li class="active">Here</li>
            </ol>
        </section>

        <!-- Main content -->
        <section class="content">

            <!-- Your Page Content Here -->

        </section>
        <!-- /.content -->
    </div>
</template>
<script>
    import loginBox from '../components/login-box.vue';




    export default {
        data:function () {
            return {
                title: '首页',
                smallTitle: '这里是首页',
            }
        },
        computed: {
            count:function () {
                return this.$store.state.count;
            }
        },
        created:function (){

        },

        watch: {
            '$route': function () {

            }
        },
        methods: {


        },
        components: {
            loginBox,
        }
    }
</script>