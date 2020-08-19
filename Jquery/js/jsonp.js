// 同源政策
//     域名、协议、端口均相同

// jsonp解决跨域 
// jsonp由两部分组成 回调函数和数据

//jsonp原理
//通过script标签引入js文件----js文件载入成功后-----执行我们在url参数中指定的函数


//封装jsonp
function getJSONP(url, callback) {
    if (!url) {
        return
    }
    //声明数组用来随机生成函数名
    var a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],
        r1 = Math.floor(Math.random() * a.length),
        r2 = Math.floor(Math.random() * a.length),
        r3 = Math.floor(Math.random() * a.length),
        name = 'getJSONP' + a[r1] + a[r2] + a[r3],
        cbname = 'getJSONP.' + name
    //判断url地址中是否含有问号
    if (url.indexOf('?') === -1) {
        url += '?jsonp=' + cbname
    } else {
        url += '&jsonp' + cbname
    }
    console.log(url)
    //动态创建script标签 
    var script=$("<script>")
    //定义被脚本执行的回调函数
    getJSONP[name]=function(data){
        try{
            callback && callback(data)
        }catch(e){

        }finally{
            //最后删除该函数及script标签
            delete getJSONP[name]
            script.empty()
        }
    }
    //定义script的src
    script.attr('src',url)
    $("head").append(script)
}
getJSONP("http://class.imooc.com/api/jsonp",function(data){
    console.log(data)
})
