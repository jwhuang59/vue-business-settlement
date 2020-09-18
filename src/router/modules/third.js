export default [
    {
        path: '/index',
        component: () => import('@/views/third/index'),
        children: [
            {
                name: 'basics',
                path: '/basics',
                component: () => import('@/views/third/basics'),
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
                component: () => import('@/views/third/finance'),
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
                component: () => import('@/views/third/compliance'),
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
                component: () => import('@/views/third/agreement'),
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
                component: () => import('@/views/third/standard'),
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
                component: () => import('@/views/third/licence'),
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
                component: () => import('@/views/third/perfect'),
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
        name: 'result',
        path: '/',
        component: () => import('@/views/third/result'),
        meta: {
            title: '店铺开通',
            isBack: true,
            keepAlive: false
        }
    },
    {
        name: 'login',
        path: '/login',
        component: () => import('@/views/third/login'),
        meta: {
            title: '注册商家',
            style: 'style',
            isBack: true,
            keepAlive: false
        }
    },
    {
        name: 'problem',
        path: '/problem',
        component: () => import('@/views/third/problem'),
        meta: {
            title: '回答反馈',
            keepAlive: false
        }
    }
];
