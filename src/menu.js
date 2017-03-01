/**
 * Created by zhouchenxi on 2017/2/4.
 */

var menu =  [
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
                name: '权限组',
                path: '/group',
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
];
export {menu};