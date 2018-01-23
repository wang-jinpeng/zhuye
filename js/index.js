
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
        if(index===2){
            $(".about_left").css("transform","translateX(0)");
            $(".about_right").css("transform","translateX(0)");
        }
    },
    onLeave:function(index){
        if(index===2){
            $(".about_left").css("transform","translateX(-1000px)");
            $(".about_right").css("transform","translateX(1000px)");
        }
    }
})

{
    let toptop = document.querySelector(".shang");
    console.log(toptop)
    toptop.onclick = function() {
        let st = document.documentElement.scrollTop;
        let speed = st * 30 / 500;
        let t = setInterval(function() {
            st -= speed;
            if(st <= 0) {
                st = 0;
                clearInterval(t)
            }
            document.documentElement.scrollTop = st
        }, 30)
    }
}
