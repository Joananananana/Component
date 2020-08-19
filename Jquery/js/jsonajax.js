window.onload = function () {
    var user = document.getElementById("user"),
        pwd = document.getElementById("pwd"),
        sigup = document.getElementById("sigup-btn"),
        userInfo = document.getElementById("user_info"),
        userIcon = document.getElementById("user_icon"),
        pwdInfo = document.getElementById("pwd_info"),
        pwdIcon = document.getElementById("pwd_icon"),
        userReg = /^1[3578]\d{9}$/,
        pwdReg = /^\w{5,12}$/
        //isRepeat=false         //记录用户名是否被占用
    //绑定事件  检测用户 密码
    user.addEventListener("blur", checkUser, false)
    pwd.addEventListener("blur", checkPwd, false)
    sigup.addEventListener("click", register, false)

    function checkUser() {
        var userVal = user.value
        //验证手机号是否有效
        if (!userReg.test(userVal)) {
            userInfo.innerHTML = '手机号码无效！'
            userIcon.className = 'no'
        } else {
            userInfo.innerHTML = ''
            userIcon.className = 'ok'
            //发起请求
            // $.ajax({
            //     url:"http://127.0.0.1:5500/Jquery//isUserRepeat.php",
            //     data:{username:userVal},
            //     success:function(data){
            //         console.log(data.msg)
            //         // if(data.code==1){
            //         //     userIcon.className='ok'
            //         //     isRepeat=false
            //         // }else if(data.code==0){
            //         //     userIcon.className='no'
            //         //     userInfo.innerHTML=data.msg
            //         //     isRepeat=true
            //         // }else{
            //         //     userInfo.innerHTML='检测失败，请重试。'
            //         // }
                    
            //     }
            // })
        }
    }
    //检测密码
    function checkPwd() {
        var pwdVal = pwd.value
            if(!pwdReg.test(pwdVal)) {
                pwdInfo.innerHTML = '请输入5到12位字母、数字及下划线'
                pwdIcon.className = 'no'
            } else {
                pwdInfo.innerHTML = ''
                pwdIcon.className = 'ok'
            }
    }
    //注册
    function register() {
        var userVal=user.value,
        pwdVal=pwd.value
        //如果手机号有效 且没有被占用  同时密码合法 &&!isRepeat
        if (userReg.test(user.value)&&pwdReg.test(pwd.value)){
            console.log('ok')

            //发起请求
            $.ajax({
                url:"./register.php",
                method:"get",
                data:{username:userVal,userpwd:pwdVal},
                dataType:'json',
                success:function(data){
                    console.log(data)
                    // user.value=""
                    // pwd.value=""
                    // alert(data.msg)
                },
                error:function(){
                    pwdInfo.innerHTML="注册失败 请重试"
                }
            })

            
        }
    }

}