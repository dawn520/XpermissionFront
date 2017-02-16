<template>
        <!-- Left side column. contains the logo and sidebar -->
        <div class="main-sidebar">

            <!-- sidebar: style can be found in sidebar.less -->
            <section class="sidebar">

                <!-- Sidebar user panel (optional) -->
                <div class="user-panel">
                    <div class="pull-left image">
                        <img src="dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
                    </div>
                    <div class="pull-left info">
                        <p>Alexander Pierce</p>
                        <!-- Status -->
                        <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
                    </div>
                </div>

                <!-- search form (Optional) -->
                <form action="#" method="get" class="sidebar-form">
                    <div class="input-group">
                        <input type="text" name="q" class="form-control" placeholder="Search...">
                        <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                </button>
              </span>
                    </div>
                </form>
                <!-- /.search form -->

                <!-- Sidebar Menu -->
                <ul class="sidebar-menu">
                    <li class="header">菜单</li>
                    <li v-for="item in menu" v-bind:class="{'active':item.active,'treeview':item.children}">
                        <router-link :to="item.path" v-if="item.children==null">
                            <i :class="item.icon"></i>
                            <span>{{item.name}}</span>
                        </router-link>

                        <a href="javascript:;" v-if="item.children!=null">
                            <i :class="item.icon"></i>
                            <span>{{item.name}}</span>
                            <span class="pull-right-container">
                                <i class="fa fa-angle-left pull-right"></i>
                            </span>
                        </a>
                        <ul class="treeview-menu" v-if="item.children!=null">
                            <li v-for="child in item.children" v-bind:class="{'active':child.active}">
                                <router-link :to="child.path">
                                    <i :class="child.icon"></i>{{child.name}}
                                </router-link>
                            </li>
                        </ul>

                    </li>
                </ul>
                <!-- /.sidebar-menu -->
            </section>
            <!-- /.sidebar -->
        </div>
</template>
<script>
    export default {
        data:function () {
            return {
            }
        },
        computed: {
            menu :function () {
                return this.$store.state.menu;
            }
        }
    }
</script>