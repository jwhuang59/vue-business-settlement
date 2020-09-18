// 工具函数库(https://www.html.cn/doc/lodash/)
const cloneDeep = require('lodash/cloneDeep');
const remove = require('lodash/remove');
const pullAll = require('lodash/pullAll');
const isEmpty = require('lodash/isEmpty');
const isNaN = require('lodash/isNaN');
const isNumber = require('lodash/isNumber');
// 时间库(https://github.com/iamkun/dayjs)
const dayjs = require('dayjs');
/**
 * @description: 将对象重新封装成{code:'',label:''}型对象,原对象属性为code 原对象属性值为label
 * @param {Object}
 * @return: Array
 */
const packSelectObjUtil = function (obj, isNumber = false) {
    var objArr = [];
    for (var p in obj) {
        var object = {};
        object.code = isNumber ? Number(p) : p;
        object.label = obj[p];
        objArr.push(object);
    }
    return objArr;
};

/**
 * 检查val是否不为空，0被认为不为空，undefined/null/NaN/{}/[]都会被认为空
 * @param {*} val
 */
const isNotEmpty = val => {
    if (isNaN(val)) {
        return false;
    }
    if (isNumber(val)) {
        return true;
    }
    return !isEmpty(val);
};

/**
 * 将val值按照format进行格式化
 * @param {*} val
 * @param {*} format
 */
const format = (val, format = 'YYYY-MM-DD') => {
    return dayjs(val).format(format);
};

/**
 * 获取时间范围
 * @param {*} y
 */
const getMixMaxDate = y => {
    const year = dayjs().year();
    const month = dayjs().month();
    const date = dayjs().date();
    const minDate = new Date(year - y, month, date);
    const maxDate = new Date(year + y, month, date);

    return { minDate, maxDate };
};

const Utils = {
    cloneDeep,
    remove,
    pullAll,
    isNotEmpty,
    format,
    getMixMaxDate
};

const install = function (Vue) {
    Vue.prototype.$utils = Utils;
    Vue.prototype.dayjs = dayjs;
};

export default install;
