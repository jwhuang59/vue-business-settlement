export default [
    {
        /** 获取省市区 */
        name: 'getCityList',
        url: '/common/cityList',
        method: 'post'
    },
    {
        /** 上传图片 */
        name: 'uploadImage',
        url: '/common/uploadImage',
        method: 'post'
    },
    {
        /** 获取验证码 */
        name: 'getCode',
        url: '/h5/verificationCode',
        method: 'post'
    },
    {
        /** 商户登录 */
        name: 'getLogin',
        url: '/h5/login',
        method: 'post'
    },
    {
        /** 获取店铺审核状态 */
        name: 'getShopStatus',
        url: '/h5/shop/complianceStatus',
        method: 'post'
    },
    {
        /** 查询店铺基础信息 */
        name: 'getBasicInfo',
        url: '/h5/shop/detail',
        method: 'post'
    },
    {
        /** 上传店铺基础信息 */
        name: 'updateBasicInfo',
        url: '/h5/shop/updateShopDetail',
        method: 'post'
    },
    {
        /** 查询店铺财务信息 */
        name: 'getFinancialInfo',
        url: '/h5/shop/financialInfo',
        method: 'post'
    },
    {
        /** 上传店铺财务信息 */
        name: 'updateFinancialInfo',
        url: '/h5/shop/updateShopFinancialInfo',
        method: 'post'
    },
    {
        /** 查询店铺合规信息 */
        name: 'getComplianceInfo',
        url: '/h5/shop/complianceInfo',
        method: 'post'
    },
    {
        /** 上传店铺合规信息 */
        name: 'updateComplianceInfo',
        url: '/h5/shop/updateShopCompliance',
        method: 'post'
    },
    {
        /** 查询三方信息核准 */
        name: 'getStandardInfo',
        url: '/h5/shop/thirdPartyInfApproval',
        method: 'post'
    },
    {
        /** 查询许可证信息 */
        name: 'getLicenseInfo',
        url: '/h5/shop/thirdPartyLicense',
        method: 'post'
    },
    {
        /** 更新许可证信息 */
        name: 'updateLicenseInfo',
        url: '/h5/shop/updateLicenseInfo',
        method: 'post'
    },
    {
        /** 查询完善信息 */
        name: 'getPerfectInfo',
        url: '/h5/shop/improveInfo',
        method: 'post'
    },
    {
        /** 更新完善信息 */
        name: 'updatePerfectInfo',
        url: '/h5/shop/updateImproveInfo',
        method: 'post'
    },
    {
        /** 获取三方审核状态 */
        name: 'getThirdPartyStatus',
        url: '/h5/shop/thirdPartyStatus',
        method: 'post'
    }
];
