/**
 * Created by zhouchenxi on 2017/2/3.
 */

//导入全局动画插件
import Velocity from './assets/js/velocity.min';
window.Velocity = window.velocity = Velocity;
import './assets/js/velocity.ui';
import './plugins/iCheck/icheckv2.min';
import './plugins/iCheck/square/blue.css'
import "./assets/css/animate.css";

import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VeeValidate from 'vee-validate';
import {routes} from './router';
import {menu} from './menu';
import messagesZH from "./assets/js/zh_CN.js";
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VeeValidate, {
    locale: "zh",
    dictionary: {
        zh: {
            messages: messagesZH
        }
    },
    fieldsBagName: 'formFields'
});
//vuetable
import Vuetable from 'vuetable-2/src/components/Vuetable.vue';
import VuetablePagination from 'vuetable-2/src/components/VuetablePagination.vue';
import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo.vue';
import VuetablePaginationDropdown  from 'vuetable-2/src/components/VuetablePaginationDropdown.vue';
Vue.component('vuetable', Vuetable);
Vue.component('vuetable-pagination', VuetablePagination);
Vue.component('vuetable-pagination-info', VuetablePaginationInfo);
Vue.component('vuetable-pagination-dropdown', VuetablePaginationDropdown);

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
        menu: menu
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



