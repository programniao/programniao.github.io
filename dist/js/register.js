

$(function() {
    let data = [{
        user: "admin",
        passworld: "123456",
        phone: "18482718212"
    },
    {
        user: "root",
        passworld: "123456",
        phone: "13666666666"
    },
    {
        user: "color",
        passworld: "123456",
        phone: "18287183018"
    },
    {
        user: "code",
        passworld: "123456",
        phone: "13812734212"
    }
    ];

    let $inp = $(".inp_text");
        $.each($inp,function(i,v) {
            $(v).blur(function() {
                let text = "";

                switch (v) {
                    case $inp[0]:
                        if($(this).val() == "") {
                            $(this).next('.tmp').text('用户名不可为空哦~~亲').css({
                                color: '#aaa',
                                fontSize: 20
                            }).fadeOut(3000);
                        }
                        break;
                        case $inp[1]:
                            if($(this).val() == "") {
                                $(this).next('.tmp').text('密码不可为空~~亲').css({
                                    color: '#aaa',
                                    fontSize: 20
                                }).fadeOut(3000);
                            }
                            break;
                        case $inp[2]:
                            if($(this).val() == "") {
                                $(this).next('.tmp').text('手机号不可为空~~亲').css({
                                    color: '#aaa',
                                    fontSize: 20
                                }).fadeOut(3000);
                            }
                            break;
                }
        })
           
    })
    $("#regsub").click(function(e) {
        for(let i = 0; i < data.length; i++) {
            if($inp.eq(0).val() == data[i].user){
                $($inp).eq(0).next('.tmp').text('此用户名已被使用!').css({
                    color: '#aaa',
                    fontSize: 20
                }).fadeOut(5000);
                return false;
            }
        }

        for(let j = 0; j < 4; j++) {
            if($inp.eq(j).val() == ""){
                $inp.eq(j).focus().next('.tmp').text('此处不能为空!').css({
                    color: '#aaa',
                    fontSize: 20
                }).fadeOut(5000);
                e.preventDefault();
                return;
            }
        }

        window.location = 'file:///D:/phpstudy2/PHPTutorial/WWW/study/WEB/项目/游戏网站/index.html'
    })

    $('#username').blur(function() {
        for(let k = 0; k < data.length; k++)
        if($(this).val() == "") {
            $(this).next('.tmp').text('用户名不能为空!').css({
                color: '#aaa',
                fontSize: 20
            }).fadeOut(5000);
        }else if($(this).val() != data.user) {
            $(this).next('.tmp').text('用户名不正确!').css({
                color: '#aaa',
                fontSize: 20
            }).fadeOut(5000);
        }
    })

    $('#passworld').blur(function() {
        for(let l = 0; l < data.length; l++)
        if($(this).val() == "") {
            $(this).next('.tmp').text('密码不能为空!').css({
                color: '#aaa',
                fontSize: 20
            }).fadeOut(5000);
        }else if($(this).val() != data.passworld) {
            $(this).next('.tmp').text('密码不正确!').css({
                color: '#aaa',
                fontSize: 20
            }).fadeOut(5000);
        }
    })
    
})
