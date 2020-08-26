//ui-search定义
$.fn.UiSearch=function(){
    var ui=$(this)
    $('.ui-search-selected',ui).on('click',function(){
        $('.ui-search-select-list').show()
        return false
    })
    $('.ui-search-select-list a',ui).on('click',function(){
        $('.ui-search-selected').text($(this).text()+'▽')
        $('.ui-search-select-list').hide()
        return false
    })
    $('body').on('click',function(){
        $('.ui-search-select-list').hide()
    })
}
//ui-tab定义
// @param{string} header TAB组件的所有选项卡 item
// @param{string} content TAB组件的内容区域 所有item
$.fn.UiTab=function(header,content){
    var ui=$(this)
    var tabs=$(header,ui)
    var cons=$(content,ui)
    tabs.on('click',function(){
        var index=$(this).index() 
        tabs.removeClass('item_focus').eq(index).addClass('item_focus')
        cons.hide().eq(index).show()
        return false 
    })
}
//ui-backTop
$.fn.UiBackTop=function(){
    var ui = $(this)
    var el = $('<a class="ui-backTop" href="#0">△</a>')
    ui.append(el)
    // var windowHeight=$(window).height()
    $(window).on('scroll',function(){
        var top = $('html,body').scrollTop() 
        if(top > 300){
            el.show()
        }else{
            el.hide()
        }
    })
    el.on('click',function(){
        $(window).scrollTop(0)
    })
}
//ui-slider

//1.左右箭头控制翻页  2.翻页的时候  进度点联动 3.翻到第四页时  下一页要回到第一页 第一页同理
//4.进度点点击时 要切换到对应图片 5.没有点击翻页时  自动滚动
//6.滚动过程中 屏蔽其他操作（自动滚动 左右翻页 进度点点击）
$.fn.UiSlider=function(){
    var ui=$(this)
    var wrap=$('.ui-slider-wrap')

    var items=$('.ui-slider-wrap .item',ui)
    console.log(items)
    var btn_prev=$('.ui-slider-arrow .left',ui)

    var btn_next=$('.ui-slider-arrow .right',ui)
    var tips=$('.ui-slider-process .item',ui)
    
    //预定义
    var current=0
    // var size= items.size()
  
    var width= items.eq(0).width()
    var enableAuto=true

    //设置自动滚动感应  如果鼠标在wrap中  不要自动滚动
    //具体操作
    ui.on('mouseover',function(){
        enableAuto = false
    })
    .on('mouseout',function(){
        enableAuto = true
    })


    wrap.on('move_pre',function(){
        if(current<=0){          
            current=3;                  //current=size
        }else{  
            current=current-1
        }
        wrap.triggerHandler('move_to',current)
        
    })
    .on('move_next',function(){
        if(current>=3){                //current>=size-1
            current=0;
        }else{  
            current=current+1
        }
        wrap.triggerHandler('move_to',current)
    })
    .on('move_to',function(evt,index){
        wrap.css('left',-index*width)
        tips.removeClass('item_focus').eq(index).addClass('item_focus')
    })
    .on('auto_move',function(){
        setInterval(() => {
            enableAuto && wrap.triggerHandler('move_next')
        }, 2000);
    })
    .triggerHandler('auto_move')


    //事件
    btn_prev.on('click',function(){
        wrap.triggerHandler('move_pre')
    })
    btn_next.on('click',function(){
        wrap.triggerHandler('move_next')
    })
    tips.on('click',function(){
        var index=$(this).index()
        wrap.triggerHandler('move_to',index)
    })
    


}

$(function(){
    $('.ui-search').UiSearch()
    $('.content-tab').UiTab('.caption>.item','.block>.item')
    $('.content-tab .block .item').UiTab('.block-caption>a','.block-content>.block-wrap')
    $('body').UiBackTop()
    $('.ui-slider').UiSlider()
})