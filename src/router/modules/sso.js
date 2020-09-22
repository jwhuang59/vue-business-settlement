export default [
    {
        path: '/changepwd',
        component: () => import('@/views/sso/changepwd'),
        meta: {
            title: '重置密码'
        }
    },
    {
        path: '/done',
        component: () => import('@/views/sso/done')
    }
];
