//封装xhr对象 兼容各个版本
function createXHR(){
    //判读浏览器是否将XMLHttpRequest作为本地对象实现 针对IE7、Firefox、opera等
    if(typeof XMLHttpRequest !="undefined"){
        return new XMLHttpRequest();
    }else if(typeof ActiveXObject!="undefined"){
        //将所有可能出现的ActiveXObject版本放在一个数组中
        var xhrArr=['Microsoft.XMLHTTP','MSXML2.XMLHTTP6.0','MSXML2.XMLHTTP5.0','MSXML2.XMLHTTP4.0','MSXML2.XMLHTTP3.0','MSXML2.XMLHTTP2.0']
        //遍历创建XMLHttpRequest对象
        var len=xhrArr.length,xhr
        for(var i=0;i<len;i++){
            try{
                //创建XMLHttpRequest对象
                xhr=new ActiveXObject(xhrArr[i])
                break
            }
            catch{ex}{

            }
        }
        return xhr
    }else{
        throw new Error('NO XHR objext avaliable')
    }
}
//XMLHttpRequst对象
var xhr=createXHR(),data=null
//响应XMLHttpRequst对象状态变化的函数,onreadystatechange在readystatechange属性发生改变时触发
xhr.onreadystatechange=function(){
    //异步调用成功,响应内容解析完成 可以在客户端调用
    if(xhr.readyState===4){
        if((xhr.status>=200&& xhr.status<300)||xhr.status==304){
            //获得服务器返回的数据
            var data=JSON.parse(xhr.responseText)
            console.log(data.code)
            //渲染数据到页面中
            renderDataToDom(data)
                    // console.log(xhr.responseText)
                    // //eval()将json字符串转换为json对象 可以执行不符合json格式的代码
                    // console.log(eval("("+xhr.responseText+")").code)
                    // //JSON.parse() 把JSON字符串解析为元素javascript值
                    // //JSON.stringify() 把javascript对象序列转化为JSON字符串
                    // console.log(JSON.parse(xhr.responseText).code)
                    // console.log(JSON.stringify(JSON.parse(xhr.responseText)))
        }
    }
}
//创建请求
xhr.open("get","./2.json",true)
//发送请求
xhr.send(null)
// xhr.send({user:"zahng",id:"1"})
// xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded")
//渲染数据
function renderDataToDom(data){
    $('.banner').text(data.code)
}




//jquary的$.(ajax)
$.ajax({
    url:"./2.json",      //请求地址
    type:"post",        //请求方式
    async:true,         //同步异步
    dataType:"json",    //数据格式
    success:function(data){ //请求成功的回调
        JQrenderDataToDom(data)
    }
})
function JQrenderDataToDom(data){
    $('.banner_jq').text(data.code)
}