// 校验身份证
const validateIdCard = idCard => {
    var vcity = {
        11: '北京',
        12: '天津',
        13: '河北',
        14: '山西',
        15: '内蒙古',
        21: '辽宁',
        22: '吉林',
        23: '黑龙江',
        31: '上海',
        32: '江苏',
        33: '浙江',
        34: '安徽',
        35: '福建',
        36: '江西',
        37: '山东',
        41: '河南',
        42: '湖北',
        43: '湖南',
        44: '广东',
        45: '广西',
        46: '海南',
        50: '重庆',
        51: '四川',
        52: '贵州',
        53: '云南',
        54: '西藏',
        61: '陕西',
        62: '甘肃',
        63: '青海',
        64: '宁夏',
        65: '新疆',
        71: '台湾',
        81: '香港',
        82: '澳门',
        91: '国外'
    };
    // 是否为空
    if (idCard === '') {
        return false;
    }
    // 校验长度，类型
    if (isCardNo(idCard) === false) {
        return false;
    }
    // 检查省份
    if (checkProvince(idCard, vcity) === false) {
        return false;
    }
    return true;
};

// 检查长度，类型
const isCardNo = card => {
    // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
    var reg = /(^\d{15}$)|(^\d{17}(\d|X|x)$)/;
    if (reg.test(card) === false) {
        return false;
    }
    return true;
};
// 取身份证前两位,校验省份
const checkProvince = (card, vcity) => {
    var province = card.substr(0, 2);
    if (vcity[province] === undefined) {
        return false;
    }
    return true;
};

export default validateIdCard;
