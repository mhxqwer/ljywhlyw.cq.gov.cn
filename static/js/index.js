$(function() {
    $("#showPart").click(function(event) {
        event.stopPropagation();
        $(".i1-part").fadeIn();
    });

    $(document).click(function(e) {
        var target = $(e.target);
        if (target.closest(".i1-part").length != 0) return;
        $(".i1-part").hide();
    });

    // 控制css样式的
    $('.i1-part42-2 div a').each(function(i) {
        if (i % 2 == 0) {
            // 偶数
            $(this).css("margin-right", "14px");
        }
    });

    $('.i1-part42-3 div a').each(function(i) {
        if (i % 2 == 0) {
            // 偶数
            $(this).css("margin-right", "10px");
        }
    });

    $('.i1-part44-item div a').each(function(i) {
        if (i == 2 || i == 5 || i == 8 || i == 11) {
            // 偶数
            $(this).css("margin-right", "0");
        }
    });

    $(".i1-part-top span").tabPanelFun({
        cur: 'cur',
        tabContent: '.i1-ul-box',
        tabItem: '.i1-part-ul',
        evnets: 'click'
    });

    $(".i1-news-cont a").simpleSwitch({
        playTime: 2000,
        type: 'top',
    });

    $(".i1-w556-top span").tabPanelFun({
        cur: 'cur',
        tabContent: '.i1-w556-ul',
        tabItem: '.i1-w556-item',
    });

    // 通知手风琴效果
    $(".voice_2 ul li").each(function() {
        var fold = $(this).find(".fold");
        var unfold = $(this).find(".unfold");
        if (fold.is(":hidden")) {
            $(this).width(1088);
        } else {
            $(this).width(56);
        }
    })

    $(".voice_2 ul li").click(function() {
        var li_index = $(this).index();
        $(this).animate({
            width: 1088
        }, 200);
        $(this).find(".unfold").show();
        $(this).find(".fold").hide();
        $(this).siblings().animate({
            width: 56
        }, 200);
        $(this).siblings().find(".unfold").hide();
        $(this).siblings().find(".fold").show();
    })

    $(".i1-part5-item").bannerRollLR({
        len: 4,
        type: 'right',
        moveTime: 3000,
        prev: '.i1-part5-left',
        next: '.i1-part5-right'
    });
    $(".i1-part2-item").bannerRollLR({
        len: 4,
        type: 'right',
        moveTime: 3000,
        prev: '.i1-part2-left',
        next: '.i1-part2-right'
    });    
});