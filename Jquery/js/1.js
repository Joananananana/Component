$(document).ready(function () {
    //键盘事件 keydown keyup keypress
    $(document).keydown(function (event) {
        console.log(event.key)
        console.log(event.keyCode)
    })
    //鼠标事件
    //click dblclick双击 mouseenter mouseleave

    // $('a').hover(function () {
    //     $('img').eq($(this).index()).css({
    //         'opacity': '1'
    //     }).siblings().css({
    //         'opacity': '0'
    //     })
    // })

    // $('a').hover(function(){     
    //     $('img').eq($(this).index()).css({'opacity':'1'}).siblings().css({'opacity':'0'})
    // },function(){//移开时还原
    //     $('img').eq($(this).index()).css({'opacity':'0'}).siblings().css({'opacity':'1'})
    // })


    //过渡动画  
    //stop停止现有动画
    // $('a').hover(function () {     
    //     $('img').eq($(this).index()).stop().animate({'opacity':'1'},1000).animate({'opacity':'1'},1000).siblings().stop().animate({'opacity':'0'},1000)
    // })

    //delay动画暂停
    // $('a').hover(function () { 
    //     $('img').eq($(this).index()).stop().animate({
    //         'width': '100%','opacity':'1'
    //     }, 1000).delay(1000).siblings().stop().animate({
    //         'width': '0%','opacity':'0'
    //     }, 1000)
    // })

    //show() hide()
    // $('a').hover(function () {
    //     $('img').eq($(this).index()).stop().show('slow').siblings().stop().hide(1000)
    // })

    //toggle() 根据当前状态决定show()和hide()

    //fadeIn() fadeOut()
    $('a').hover(function () {
        $('img').eq($(this).index()).stop().fadeIn().siblings().stop().fadeOut()
    })

    //fadeToggle()

    //slideUp() slideDown() slideToggle()

    var alinks = $('a')
    for (var i = alinks.length - 1; i >= 0; i--) {
        alinks.eq(i).css({
                // 'background':'seagreen',
                // 'border':'5px solid yellow',
                // 'color':'#fff'
            }).html('<i>七彩云娜' + i + '</i>')
            .text('云南旅游' + i)
    }
    // $('nav').mouseover(function(){
    //     console.log($(this))
    // })
    // $('nav').mouseout(function(){
    //     console.log($(this))
    // })
    // $('nav').mousemove(function(){
    //     console.log($(this))
    // })

    //层级选择器
    // $('prev + next')  匹配所有紧接在prev元素后的next元素(兄弟元素)
    //$('prev ~ siblings') 匹配prev元素之后所有siblings元素（兄弟元素）
    //A>B 　　 获取A元素内部的所有B子元素(父子元素)
    var as = $('details summary ')
    console.log(as)
    var as = $("summary + details")
    console.log(as)
    var as = $("nav > a")
    console.log(as)
    var as = $("nav ~ div")
    console.log(as)

    //属性名选择器             
    var as = $('[class]') //有class属性的元素
    console.log(as)
    //属性值选择器
    var as = $('[class=nav]')
    console.log(as)
    var as = $('[class!=nav]')
    console.log(as)
    var as = $('[src^=img]') //以value值开头
    console.log(as)
    var as = $('[src$=g]') //以value值结尾
    console.log(as)
    var as = $('[src*=j]') //包含value值
    console.log(as)
    //ready 当dom载入就绪可以查询及操纵时绑定一个要执行的函数
    //resize 调整浏览器窗口大小事件
    $(window).resize(function () {
        console.log($(this))
    })
    $('input').focus(function () {
        console.log('HHHH')
    })
    $('input').blur(function () {
        console.log('WWWW')
    })
})