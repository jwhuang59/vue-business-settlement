const files = require.context('.', true, /\.js$/);
const modules = [];

files.keys().forEach(key => {
    if (key === './index.js') return;
    const item = files(key).default;
    const apiName = '/' + key.substring(2, key.lastIndexOf('/')) + 'api';
    item.map(v => {
        v.url = apiName + v.url;
        return v;
    });
    modules.push(...item);
});

export default modules;
