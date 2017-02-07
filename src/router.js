/**
 * Created by zhouchenxi on 2017/2/4.
 */
//引入组件
import admin from './view/admin.vue';
import login from './view/login.vue';
import index from './page/index.vue';
import order from './page/order.vue';

//定义路由
var routes = [
    {
        path: '/',
        component: admin,
        children: [
            {
                path: '',
                component: index
            },
            {
                path: '/order',
                component: order
            }
        ]
    },
    {
        path: '/login',
        component: login
    }

];
export {routes};