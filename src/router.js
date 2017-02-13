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
                component: index,
                meta: {
                    title: '开始 | Xpermission'
                },
            },
            {
                path: '/order',
                component: order,
                meta: {
                    title: '订单 | Xpermission'
                },
            }
        ]
    },
    {
        path: '/login',
        component: login,
        meta: {
            title: '登录 | Xpermission'
        },
    }

];
export {routes};