$('#header .open').addClass('on')
$('#header .open').on('click', function () {
    $(this).next().css({
        opacity: 1
    }).animate({
        right: 0
    }, 300)
    $(this).removeClass('on')
    $(this).next().next().addClass('on')
})
$('#header .close').on('click', function () {
    $(this).prev().animate({
        right: '-197px'
    }, 300, function () {
        $(this).css({
            opacity: 0
        })
    })
    $(this).removeClass('on')
    $(this).prev().prev().addClass('on')
    $('.depth1 > li').find('.depth2').slideUp(100)
})


// 여기서부터 resize 이벤트 발생시 스크롤바 유무에 따른 상태제어 프로그램
var deviceSize = 1024;

function scrollOX(status) {
    $('html').css({
        overflowY: status
    })
    var htmlWidth = $('html').width()
    return htmlWidth
}
var swh = scrollOX('hidden')
var sws = scrollOX('scroll')
var swd = swh - sws
if (swd > 0) {
    deviceSize = deviceSize - swd
}

function init() {
    var ww = $(window).width()
    if (ww > deviceSize && !$('html').hasClass('pc')) {
        $('html').addClass('pc').removeClass('mobile')
        $('.search #sbox').removeClass('on')
        // $('.depth1 > li').removeClass('on')
        $('.depth1 > li').find('.depth2').css({
            display: 'none'
        })
        $('#nav').css({
            opacity: '1',
            right: 0
        })
    } else if (ww <= deviceSize && !$('html').hasClass('mobile')) {
        $('html').addClass('mobile').removeClass('pc')
        $('#header .close').removeClass('on')
        $('#header #nav').css({
            right: '-197px',
            opacity: 0
        })
        $('#header .open').addClass('on')
        $('.search #sbox').removeClass('on')
    }
}

init()

$(window).on('resize', function () {
    init()
})

// 여기까지 resize 이벤트 발생시 스크롤바 유무에 따른 상태제어 프로그램


$('.depth1 > li').hover(
    function () {
        if ($('html').hasClass('pc')) {
            // $(this).addClass('on')
            $(this).find('.depth2').stop().slideDown(300) // 더 부드럽게 뜸
        }
    },
    function () {
        if ($('html').hasClass('pc')) {
            // $(this).removeClass('on')
            $(this).find('.depth2').stop().slideUp(300) // 더 부드럽게 사라짐
        }
    }
)
$('.depth1 > li').on('click', function (e) {
    if ($('html').hasClass('mobile')) {
        e.preventDefault()
        // $(this).toggleClass('on')
        // $(this).siblings().removeClass('on')
        $(this).find('.depth2').stop().slideToggle(300) // 열려있으면 닫고, 닫혀있으면 열고
        $(this).siblings().find('.depth2').stop().slideUp(300)
    }
})


$('.depth2 > li').on('click', function (e) {
    e.stopPropagation()
})


// 돋보기 클릭시 검색창 박스 열고닫기
$('.search label').on('click', function () {
    $(this).prev().toggleClass('on')
})

$(window).on('scroll', function () {
    var sct = $(this).scrollTop()
    if (sct >= 1 && !$('#header').hasClass('on')) {
        $('#header').addClass('on')
    } else if (sct < 1 && $('#header').hasClass('on')) {
        $('#header').removeClass('on')
    }
})



// footer 패밀리 사이트 버튼 클릭
$('.privacy .fam').on('click', function () {
    $(this).find('ul').stop().slideToggle(300)
})


