// 获取参数Location的附加参数
function getLocationParameter() {
    let url = location.search; //获取url中"?"符后的字串
    let theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
/**
 * 数字替换方法
 * @param value 原始值
 * @param decimalLength 保留小数位
 * @returns {*|void|string}
 */
function numberReplace(value, decimalLength) {
    let val = value;
    if (!val) {
        return "";
    }
    val = val.replace(/[^\d+(\.\d+\-)?$]/gi, '');
    let index = val.indexOf('.');
    if (index === 0) {
        return "";
    }
    if (index > 0) {
        let priceValueArray = val.split(".");
        let decimal = priceValueArray[1];
        val = priceValueArray[0];
        if (decimalLength > 0) {
            val += "." + (decimal.length > decimalLength ? decimal.substr(0, decimalLength) : decimal);
        }
    }
    if (val <= 0) {
        return "";
    }
    return val;
}
