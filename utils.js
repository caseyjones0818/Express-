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

//在list集合中根据某key的值查询对象
function searchObjectByKey(list,key,keyValue){
   
   for(var i=0;i<list.length;i++){
      if(list[i][key]==keyValue){
         return list[i];
      }        
   }
   return null;      
}
//拿出html标签的内容
function htmlstr() {
    var re = new RegExp('<[^<>]+>','g');
    var text = html_str.replace(re ,"");
    return text
}
//去掉数组的空字符串
function clearArrNullStr() {
    var parkingList = data.data;//后台返回数据
    for(var i = 0;i<parkingList.length;i++){
        if(parkingList[i]==''||parkingList[i]==null||typeof(parkingList[i])==undefined){
            parkingList.splice(i,1);
            i=i-1;
        }
    }
}

// js输出数据类型为decimal(3, 2)，加0
function decimalFixed(str, len) {
    if (str<=0)str = '0.01';
    let ret = Math.round(parseFloat(str) * 100) / 100;
    let decimal = ret.toString().split('.');
    console.log(decimal)
    if (decimal[0].length > len) {
        return (1 * Math.round(Math.pow(10,len)))- 0.01;
    }
    if (decimal.length === 1) {
        return ret.toString() + '.00'
    };
    if (decimal.length > 1) {
        if (decimal[1].length < 2) {
            return ret.toString() + '0'
        }
        return ret
    };
    return ret;
}
// 找到数组中的值删除
Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};
