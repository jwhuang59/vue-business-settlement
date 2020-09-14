import axios from 'axios';

// let base = process.env.NODE_ENV === 'production' ?'https://api.17cjw.com':'http://172.17.103.247/index.php';

const base = 'https://apis.map.qq.com/ws/district/v1/';

export const getProvince = params => {
    return axios
        .get(`${base}/list`, params)
        .then(res => res.data)
        .catch(error => error);
}; // 省
export const getCity = params => {
    return axios
        .get(`${base}/getchildren`, params)
        .then(res => res.data)
        .catch(error => error);
}; // 市区
