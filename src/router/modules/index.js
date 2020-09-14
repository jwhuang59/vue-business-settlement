const files = require.context('.', false, /\.js$/);
const modules = [];

files.keys().forEach(key => {
    if (key === './index.js') return;
    const item = files(key).default;
    modules.push(...item);
});

const routes = [
    {
        path: '',
        component: () => import('@/views/index'),
        children: [
            {
                name: 'basics',
                path: '/',
                component: () => import('@/views/basics'),
                meta: {
                    title: '基础信息',
                    isBack: true,
                    isCommon: true,
                    indexStep: 0,
                    process: 0
                }
            },
            {
                name: 'finance',
                path: '/finance',
                component: () => import('@/views/finance'),
                meta: {
                    title: '财务信息',
                    isCommon: true,
                    indexStep: 1,
                    process: 0
                }
            },
            {
                name: 'compliance',
                path: '/compliance',
                component: () => import('@/views/compliance'),
                meta: {
                    title: '合规信息',
                    isCommon: true,
                    indexStep: 2,
                    process: 0
                }
            },
            {
                name: 'agreement',
                path: '/agreement',
                component: () => import('@/views/agreement'),
                meta: {
                    title: '阅读协议',
                    isCommon: true,
                    indexStep: 0,
                    process: 1
                }
            },
            {
                name: 'standard',
                path: '/standard',
                component: () => import('@/views/standard'),
                meta: {
                    title: '信息标准',
                    isCommon: true,
                    indexStep: 1,
                    process: 1
                }
            },
            {
                name: 'licence',
                path: '/licence',
                component: () => import('@/views/licence'),
                meta: {
                    title: '许可证',
                    isCommon: true,
                    indexStep: 2,
                    process: 1
                }
            },
            {
                name: 'perfect',
                path: '/perfect',
                component: () => import('@/views/perfect'),
                meta: {
                    title: '完善信息',
                    isCommon: true,
                    indexStep: 3,
                    process: 1
                }
            }
        ]
    },
    {
        name: 'login',
        path: '/login',
        component: () => import('@/views/login'),
        meta: {
            title: '注册商家',
            style: 'style',
            isBack: true,
            keepAlive: false
        }
    },
    {
        name: 'result',
        path: '/result',
        component: () => import('@/views/result'),
        meta: {
            title: '店铺开通',
            isBack: true,
            keepAlive: false
        }
    },
    {
        name: 'problem',
        path: '/problem',
        component: () => import('@/views/problem'),
        meta: {
            title: '回答反馈',
            keepAlive: false
        }
    },
    ...modules
];

export default routes;
