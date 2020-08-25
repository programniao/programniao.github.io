(function() {
    
    
    $('.dist_items').click(function() {
        let index = $(this).index();
        // 获取下标

        // console.log(index)

        // 去除所有active类名
        for(let i = 0; i < $('.dist_items').length; i++) {
            $('.dist_items').removeClass('a_stairs');
        }

        // 内容和下标对应
        let s_top = $('.sub_stairs').eq(index).offset().top;

        // 添加类名
        $(this).addClass('a_stairs')
        
        $('html,body').animate({scrollTop: s_top +'px'});
    })

    $('.nav_top').click(function() {
        $('html,body').animate({scrollTop: '0px'})
    })
})()