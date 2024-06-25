$(function() {
    /**
     * [第一张tab切换]
     * @type {String}
     */
    jQuery(".tab-list a").tabPanelFun({
        cur: 'cur',
        tabContent: '.tab-group',
        tabItem: '.tab-item',
        evnets: 'click'

    });
    /**
     * [第二种切换]
     * @type {String}
     */
    jQuery(".tab-list-bool li").tabPanelFun({
        cur: 'cur',
        tabContent: '.tab-group',
        tabItem: '.tab-item',
        pra: true,
        pradom: '.tab-parent'
    });
    jQuery(".tab-list-bool1 li").tabPanelFun({
        cur: 'cur',
        tabContent: '.tab-group1',
        tabItem: '.tab-item1',
        pra: true,
        pradom: '.tab-parent'
    });
    /**
     * [text 改滚动只能像下面设置这几个配置项]
     * [type默认就可以，也可以设置为top，其他不好再配置了]
     * @type {String}
     */
    jQuery(".banner-img a").simpleSwitch({
        text: '.banner-txt a',
        prev: '.banner-left',
        next: '.banner-right',
        num: '.banner-num span',
        className: 'cur',
        playTime: 1000000,
        indy: '.ban-dy',
        lendy: '.ban-len',
        type: 'left',
        // direction:'left',
    });
    /**
     * [text 改滚动只能像下面设置这几个配置项]
     * 新闻头条上下轮播
     * @type {String}
     */
    jQuery(".news-cont a").simpleSwitch({
        prev: '.news-btnt',
        next: '.news-btnb',
        playTime: 2000,
        type: 'top',
    });
    // 新闻头条滚动
    jQuery(".roll-news-cont a").simpleRoll({
        type: 'top',
        // type:'left',
        prev: '.roll-news-btnt',
        next: '.roll-news-btnb'
    });
    /**
     * [text 改滚动只能像下面设置这几个配置项]
     * [type默认就可以，也可以设置为top，其他不好再配置了]
     * @type {String}
     */
    jQuery(".fade-img a").SwitchFade({
        text: '.fade-txt a',
        prev: '.fade-left',
        next: '.fade-right',
        num: '.fade-num span',
        // className:'cur',
        playTime: 2000,
        lendy: '.dy-lens',
        indy: '.dy-index'
    });
    /**
     * 每次轮播多张中的一张
     * @type {Number}
     */
    jQuery(".ban-more-img").bannerRollLR({
        len: 5,
        type: 'right',
        moveTime: 3000,
        prev: '.ban-more-left',
        next: '.ban-more-right'
    });
    // 滚动
    jQuery(".roll-items").simpleRoll({
        space: -100,
        type: 'left',
        prev: '.ban-roll-left',
        next: '.ban-roll-right'
    });
    // 滚动
    jQuery(".roll-images").rollImages({
        type: 'left',
        space: 10,
        prev: '.roll-left',
        next: '.roll-right',
        time: 50,
        direction: 'prev'
    });
    // 底部模拟下拉
    jQuery(".drop-down .tag").dropDownFun({
        tagSiblings: '.drop-lists',
        optionItem: '.drop-down li',
        // optionItem:'.drop-down li a',
        optionBool: true,
        // optionBool:false,
        cur: 'cur',
    });
    // 底部下拉添加样式
    $('.drop-down .tag').click(function() {
        if ($(this).hasClass('cur')) {
            $(this).parent('.drop-down').siblings().removeClass('cur-item');
            $(this).parent('.drop-down').addClass('cur-item');
        } else {
            $(this).parent('.drop-down').removeClass('cur-item').siblings().removeClass('cur-item');
        }
    });
    //头部下拉
    $(".index-top-btn").click(function() {
        $(".index-menu").slideDown();
    });
    $(".index-menu .close").click(function() {
        $(".index-menu").slideUp();
    });
})