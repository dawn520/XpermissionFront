/**
 * Created by zhouchenxi on 2017/2/3.
 */
//导入全局动画插件
import Velocity from './assets/js/velocity.min';
window.Velocity = window.velocity = Velocity;
import './assets/js/velocity.ui';
import './plugins/iCheck/icheck.min';
import '../plugins/iCheck/square/blue.css'

import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import {routes} from './router';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueResource);

//实例化路由
const router=new VueRouter({routes});
router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    store.commit('changeMenu',{path:to.path});
    next();
});
//创建store
const store = new Vuex.Store({
    state: {
        siteUrl: 'http://localhost',
        menu: [
            {
                name: '首页',
                path: '/',
                icon: 'fa fa-link',
                active: false
            },
            {
                name: '用户权限',
                path: '',
                icon: 'fa fa-link',
                active: false,
                children: [
                    {
                        name: '用户',
                        path: '/users',
                        icon: 'fa fa-link',
                        active: false,
                    },
                    {
                        name: '权限',
                        path: '/permissions',
                        icon: 'fa fa-link',
                        active: false,
                    },
                    {
                        name: '角色',
                        path: '/roles',
                        icon: 'fa fa-link',
                        active: false,
                    }
                ]
            }
        ]
    },
    mutations: {
        changeMenu:function (state,payload) {
            var items;
            console.log(payload.path);
            for(var i=0;i<state.menu.length;i++){
                state.menu[i].active =false;
                if(state.menu[i].children!=null){
                    for(var j=0;j<state.menu[i].children.length;j++) {
                        state.menu[i].children[j].active = false;
                    }
                }
            }
            for(var i=0;i<state.menu.length;i++){
                items = state.menu[i];
                console.log(items.path);
                if(items.path==payload.path){
                    state.menu[i].active =true;
                    break;
                }else{
                    if(state.menu[i].children!=null){
                        var child;
                        for(var j=0;j<state.menu[i].children.length;j++){
                            child = state.menu[i].children[j];
                            if(child.path==payload.path){
                                state.menu[i].active =true;
                                state.menu[i].children[j].active =true;
                                break;
                            }
                        }
                    }
                }
            }
        }

    }
});

Vue.http.headers.common['X-CSRF-TOKEN'] = Laravel.csrfToken;

//创建和挂载根实例。
var app = new Vue({
    router,
    store
}).$mount('#app');



