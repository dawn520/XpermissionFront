/**
 * Created by zhouchenxi on 2017/2/3.
 */

//import './plugins/jQuery/jquery-2.2.3.min';

//导入全局动画插件
import Velocity from './assets/js/velocity.min';
window.Velocity  = Velocity;
window.velocity = Velocity;
velocity = Velocity;
import './assets/js/velocity.ui';
import "./assets/css/animate.css";

import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VeeValidate from 'vee-validate';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css'
import {ServerTable, ClientTable, Event} from 'vue-tables-2';
import {routes} from './router';
import {menu} from './menu';
import messagesZH from "./assets/js/zh_CN.js";
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI);
Vue.use(ServerTable, {}, false,);
Vue.use(VeeValidate, {
    locale: "zh",
    dictionary: {
        zh: {
            messages: messagesZH
        }
    },
    fieldsBagName: 'formFields'
});

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
        siteUrl: 'http://manage.myyqd.com',
        menu: menu,
        tableTexts:{
            count:'显示第 {from} 至 {to} 项结果，共 {count} 项 ',
            filter:'搜索:',
            filterPlaceholder:'搜一搜吧',
            limit:'每页显示条数:',
            noResults:'没有搜索到结果',
            page:'页码:', // for dropdown pagination
            filterBy: '通过 {column} 过滤', // Placeholder for search fields when filtering by column
            loading:'读取中...', // First request to server
            defaultOption:'选择 {column}' // default option for list filters
        },
        tableDefaultPerPage:10
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



