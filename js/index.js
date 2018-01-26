
$("#box").fullpage({
    anchors: ["p1", "p2", "p3", "p4", "p5"],
    sectionsColor: ['#03A9F4', '#232323', '#03A9F4','#232323','#03A9F4'],
    scrollingSpeed: 1000,
    navigation: true,
    navigationTooltips: ["欢迎", "个人资料", "专业技能", "作品展示", "请联系我"],
    navigationColor: ["red", "yellow"],
    fixedElements: "#menu",
    menu: "#menu",
    slidesNavigation:true,
    afterLoad:function(anchor,index){
        if (index===1){
            $(".home_content").css("transform","translateY(0)");
        }
        if(index===2){
            $(".about_left").css("transform","translateX(0)");
            $(".about_right").css("transform","translateX(0)");
            $(".about-head").css("transform","translateY(0)");
        }
        if (index===3){
            $(".jineng").css("transform","scale(1);").addClass("xuanzhaun");
        }
        if (index===4){
            $(".bai").css("transform","translateX(0)");
        }
        if (index===5){
            $(".last").css("transform","translateY(0)");
        }
    },
    onLeave:function(index){
        if (index===1){
            $(".home_content").css("transform","translateY(-500px)");
        }
        if(index===2){
            $(".about_left").css("transform","translateX(-1000px)");
            $(".about_right").css("transform","translateX(1000px)");
            $(".about-head").css("transform","translateY(-1000px)");
        }
        if (index===3){
            $(".jineng").css("transform","scale(0);").removeClass("xuanzhaun");
        }
        if (index===4){
            $(".bai").css("transform","translateX(1500px)");
        }
        if (index===5){
            $(".last").css("transform","translateY(1000px)");
        }
    }
})



