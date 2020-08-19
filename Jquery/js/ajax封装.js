//$ajax封装          默认返回数据json格式
var $ = {
    ajax: function (options) {
        //步骤一：创建XMLHttpRequest对象
        var xhr = null,
            url = options.url,                       //URL地址
            method = options.method || 'get',           //传输方式 默认get
            async = typeof (options.async) === "undefined" ? true : options.async,
            data = options.data || null,        //参数   //将data的对象字面量的形式转换为字符串形式
            params = '',                         //需要添加在url后的部分
            callback = options.success,         //ajax请求成功的回调函数    
            error=options.error                     //请求失败的函数         
        if (data) {
            for (var i in data) {
                params += i + '=' + data[i] + '&'
            }
            params = params.replace(/&$/, '') //以&结束
            console.log(params)
        }
            //根据methods的值改变url                                    
        if (method === "get") {
            url += '?' + params
        }
        console.log(url)
        if (typeof XMLHttpRequest != "undefined") {
            xhr = new XMLHttpRequest();
        } else if (typeof ActiveXObject != "undefined") {
            //将所有可能出现的ActiveXObject版本放在一个数组中
            var xhrArr = ['Microsoft.XMLHTTP', 'MSXML2.XMLHTTP6.0', 'MSXML2.XMLHTTP5.0', 'MSXML2.XMLHTTP4.0', 'MSXML2.XMLHTTP3.0', 'MSXML2.XMLHTTP2.0']
            //遍历创建XMLHttpRequest对象
            var len = xhrArr.length
            for (var i = 0; i < len; i++) {
                try {
                    //创建XMLHttpRequest对象
                    xhr = new ActiveXObject(xhrArr[i])
                    break
                } catch(ex){
                } 
            }
        } else {
            throw new Error('NO XHR objext avaliable')
        }
        //步骤三：响应XMLHttpRequst对象状态变化的函数,onreadystatechange在readystatechange属性发生改变时触发
        xhr.onreadystatechange=function(){
            if(xhr.readyState===4){
                if((xhr.status>=200&& xhr.status<300)||xhr.status==304){
                    //JSON.parse(xhr.responseText)
                    callback&&callback(xhr.responseText)
                }else{
                    error&&error()
                }
            }
        }
        //步骤二：创建发送请求
        xhr.open(method,url,async)
        //如果是post请求
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded")
        //xhr.send('username=2432&pwd=dssdsd')
        xhr.send(params)
        //如果是get请求
        //xhr.send()
    }
}
// $.ajax({
//     url: "",
//     method: "get",
//     data: {
//         username: 'ewqe',
//         pwd: '1213'
//     },
//     async: false,
//     sunccess: function () {

//     },
//     error:function(){

//     }
// })