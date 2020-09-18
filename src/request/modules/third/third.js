export default [
    {
        /** 获取省市区 */
        name: 'getCityList',
        url: '/thirdplatform/common/cityList',
        method: 'post'
    },
    {
        /** 上传图片 */
        name: 'uploadImage',
        url: '/thirdplatform/common/uploadImage',
        method: 'post',
        pem: true
    },
    {
        /** 获取验证码 */
        name: 'getCode',
        url: '/thirdplatform/h5/verificationCode',
        method: 'post',
        pem: true
    },
    {
        /** 商户登录 */
        name: 'getLogin',
        url: '/thirdplatform/h5/login',
        method: 'post',
        pem: true
    },
    {
        /** 获取店铺审核状态 */
        name: 'getShopStatus',
        url: '/thirdplatform/h5/shop/complianceStatus',
        method: 'post'
    },
    {
        /** 查询店铺基础信息 */
        name: 'getBasicInfo',
        url: '/thirdplatform/h5/shop/detail',
        method: 'post'
    },
    {
        /** 上传店铺基础信息 */
        name: 'updateBasicInfo',
        url: '/thirdplatform/h5/shop/updateShopDetail',
        method: 'post',
        pem: true
    },
    {
        /** 查询店铺财务信息 */
        name: 'getFinancialInfo',
        url: '/thirdplatform/h5/shop/financialInfo',
        method: 'post'
    },
    {
        /** 上传店铺财务信息 */
        name: 'updateFinancialInfo',
        url: '/thirdplatform/h5/shop/updateShopFinancialInfo',
        method: 'post',
        pem: true
    },
    {
        /** 查询店铺合规信息 */
        name: 'getComplianceInfo',
        url: '/thirdplatform/h5/shop/complianceInfo',
        method: 'post'
    },
    {
        /** 上传店铺合规信息 */
        name: 'updateComplianceInfo',
        url: '/thirdplatform/h5/shop/updateShopCompliance',
        method: 'post',
        pem: true
    },
    {
        /** 查询三方信息核准 */
        name: 'getStandardInfo',
        url: '/thirdplatform/h5/shop/thirdPartyInfApproval',
        method: 'post'
    },
    {
        /** 查询许可证信息 */
        name: 'getLicenseInfo',
        url: '/thirdplatform/h5/shop/thirdPartyLicense',
        method: 'post'
    },
    {
        /** 更新许可证信息 */
        name: 'updateLicenseInfo',
        url: '/thirdplatform/h5/shop/updateLicenseInfo',
        method: 'post',
        pem: true
    },
    {
        /** 查询完善信息 */
        name: 'getPerfectInfo',
        url: '/thirdplatform/h5/shop/improveInfo',
        method: 'post'
    },
    {
        /** 更新完善信息 */
        name: 'updatePerfectInfo',
        url: '/thirdplatform/h5/shop/updateImproveInfo',
        method: 'post',
        pem: true
    },
    {
        /** 获取三方审核状态 */
        name: 'getThirdPartyStatus',
        url: '/thirdplatform/h5/shop/thirdPartyStatus',
        method: 'post'
    }
];
