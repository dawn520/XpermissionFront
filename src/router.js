/**
 * Created by zhouchenxi on 2017/2/4.
 */
//引入组件
import admin from './view/admin.vue';
import login from './view/login.vue';
import index from './page/index.vue';
import permissions from './page/permissions.vue';
import roles from './page/roles.vue';
import users from './page/users.vue';
import addUser from './page/addUser.vue';
import addRole from './page/addRole.vue';
import addPermission from './page/addPermission.vue';



//定义路由
var routes = [
    {
        path: '/',
        component: admin,
        children: [
            {
                path: '/',
                component: index,
                meta: {
                    title: '开始 | Xpermission'
                },
            },
            {
                path: '/permissions',
                component: permissions,
                meta: {
                    title: '权限 | Xpermission'
                },
            },
            {
                path: '/users',
                component: users,
                meta: {
                    title: '用户 | Xpermission'
                },
            },
            {
                path: '/roles',
                component: roles,
                meta: {
                    title: '角色 | Xpermission'
                },
            },
            {
                path: '/users/add',
                component: addUser,
                meta: {
                    title: '添加用户 | Xpermission'
                },
            },
            {
                path: '/roles/add',
                component: addRole,
                meta: {
                    title: '添加角色 | Xpermission'
                },
            },
            {
                path: '/permissions/add',
                component: addPermission,
                meta: {
                    title: '添加权限 | Xpermission'
                },
            },
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