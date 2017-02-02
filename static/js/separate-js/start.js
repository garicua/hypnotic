
<!--anchor links-->
$(document).ready(function(){
        $("body").on("click","a", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();

            //забираем идентификатор бока с атрибута href
            var id  = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;

            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });

// slider
(function($) {
    $(function() {

        $('ul.tabs__caption').on('click', 'li:not(.checked)', function() {
            $(this)
                .addClass('checked').siblings().removeClass('checked')
                .closest('div.tabs').find('div.tabs__content').removeClass('checked').eq($(this).index()).addClass('checked');
        });

    });
})(jQuery);

//start animation
(function ($) {
    var  row = $('.main-header .row'),
        li = $('.main-header li'),
        text = $('.main-header__text'),
        tl = new TimelineLite({paused:true}),
        dot = $('.dot'),
        loader = $ ('#loader'),
        tlLoader = new TimelineMax({repeat: 2, onComplete: loadContent});


    tl
        .to(row, 0.5, {autoAlpha: 1, ease:Power1.easeOut})
        .fromTo(li, 0.3,
            {rotation: 60},
            {rotation: 0, scale:1, autoAlpha: 1, ease:Power0.easeNone})
        .to(text, 0.5, {autoAlpha: 1, y:-20, ease:Power1.easeOut}, '+=1');


    // Loader Timeline
    tlLoader
        .staggerFromTo(dot, 0.3,
            {y: 0, autoAlpha: 0},
            {y: 20, autoAlpha: 1, ease:Back.easeInOut},
            0.05
        )
        .fromTo(loader, 0.3,
            {autoAlpha: 1, scale: 1.3},
            {autoAlpha: 0, scale: 1, ease:Power0.easeNone},
            0.9
        );

    function loadContent() {
        var tlLoaderOut = new TimelineLite({onComplete: contentIn});
        tlLoaderOut
            .set(dot, {backgroundColor: '#ffb400'})
            .to(loader, 0.3, {autoAlpha: 1, scale: 1.3, ease:Power0.easeNone})
            .staggerFromTo(dot, 0.3,
                {y: 0, autoAlpha: 0},
                {y: 20, autoAlpha: 1, ease:Back.easeInOut},
                0.05, 0
            )
            .to(loader, 0.3, {y: -150, autoAlpha: 0, ease:Back.easeIn}, '+=0.3' );
    }
    function contentIn() {
        tl.play();
    }
})(jQuery);

// animation for DVD
$(function() {
        h3 = $('.dvd h3'),
        li = $('.dvd  li'),
        // content = $('.dvd .tabs__text'),
        content = $('.dvd .tabs__text'),
        scrollMagicController = new ScrollMagic(),
        tlDVD = new TimelineMax();

    tlDVD
        .from(h3, .5, {position:'relative', y:20, autoAlpha:0, ease:Power1.easeOut})        
        .staggerFrom(li, 0.3,{cycle: {
            x:[50, -50],
            scale:[0.1, 0.7]
        }, autoAlpha: 0, ease:Back.easeIn}, 0.4)
        .from(content, .9, { y:-50, autoAlpha:0, ease:Power1.easeOut});


    var scene = new ScrollScene({
        triggerElement: '.dvd',
        reverse: false,
        offset: 0
    })
        .setTween(tlDVD)
        .addTo(scrollMagicController);
});

// animation for resume
$(function() {
        text = $('.resume__text'),
        photo = $('.resume__photo img'),
        h3 = $('.resume__photo h3'),
        sign = $('.sign'),
        scrollMagicController = new ScrollMagic(),
        tlResume = new TimelineMax();

    tlResume
        .from(text, .9, {position:'relative', y:50, autoAlpha:0, ease:Power1.easeOut})
        .from(photo, .9, {scale: 0.05, autoAlpha:0, ease:Power1.easeOut})
        .from(h3, 3, {text:"", ease:Power0.easeNone})
        .from(sign, 1, {text:"", ease:Power0.easeNone})      


    var scene = new ScrollScene({
        triggerElement: '.resume',
        reverse: false,
        offset: 0
    })
        .setTween(tlResume)
        .addTo(scrollMagicController);
});

// animation for footer
$(function() {
        li = $('.main-footer li'),        
        scrollMagicController = new ScrollMagic(),
        tlFooter = new TimelineMax();

    tlFooter
        .staggerFrom(li, 0.3,{cycle: {
            x:[50, -50],
            scale:[0.1, 0.7]
        }, autoAlpha: 0, ease:Back.easeIn}, 0.4)


    var scene = new ScrollScene({
        triggerElement: '.main-footer',
        reverse: false,
        offset: -350
    })
        .setTween(tlFooter)
        .addTo(scrollMagicController);

});

