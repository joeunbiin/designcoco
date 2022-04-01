$(".slide_group").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 3000, // 간격시간
    dots: true, // 동그라미버튼
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
    responsive: [{
        breakpoint: 1025,
        settings: {
            arrows: false
        }
    }]
})


$('.article1 .playstop').on('click', function () {
    // .addClass() : 클래스 추가
    // .removeClass() : 클래스 삭제
    // .hasClass() : 클래스 유무 판단(결과는 true 또는 false)
    // if ( true or false ) { true 실행문 } else { false 실행문 }
    var $ibutton = $(this).find('i')
    if ($ibutton.hasClass('fa-pause-circle')) {
        $('.slide_group').slick('slickPause')
        $ibutton.removeClass('fa-pause-circle').addClass('fa-play-circle')
    } else {
        $('.slide_group').slick('slickPlay')
        $ibutton.removeClass('fa-play-circle').addClass('fa-pause-circle')
    }
})

// .index() : 선택자의 인덱스번호를 알아냄
// p.60~61 참고
// 변수선언 : var 변수명
var num;
$('.cs_board .tabmenu > li').on('click', function () {
    $(this).addClass('active')
        .siblings().removeClass('active')
    // console.log( $(this).index() )
    // 변수에 값 저장하기 : 변수명 = 값
    // 변수는 값을 하나만 저장할 수 있음
    // 새로운 값을 저장하면 이전값은 지워짐
    num = $(this).index()
    $(this).parent().next().children()
        .eq(num).addClass('active')
        .siblings().removeClass('active')
})



// 동영상 이미지 클릭시 모달창에서 유튜브동영상 플레이 시키기
$('.tubewrap img').on('click', function () {
    $('body').append('<div class="vout"><div class="vin"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/E_Q_tDCHYXs?mute=1&amp;autoplay=1&amp;rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><i class="fas fa-times"></i></div></div>')
    $('.vout').css({
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.8)',
        zIndex: '9999999'
    })
    $('.vin').css({
        position: 'absolute',
        top: '80px',
        left: '80px',
        right: '80px',
        bottom: '80px',
    })
    $('.vin i').css({
        position: 'absolute',
        top: '-10px',
        right: '-10px',
        padding: '5px',
        background: '#fff',
        color: '#000',
        borderRadius: '5px'
    })
})

$('body').on('click', '.vout', function () {
    $(this).remove()
})

$('body').on('click', '.vin i', function () {
    $('.vout').remove()
})

// what we do에서 클릭시 배경이미지 모달창에 표시하기
$('.article2 ul li').on('click', function () {
    var bgimg = $(this).css('backgroundImage')
    // 128p.
    var newbg = bgimg.split('img/')
    var src = newbg[1].replace('")', '')
    console.log(src)
    $('body').append(`<div calss="outbox"><div calss="intbox"></div></div>`)
    $('.outbox').css({
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.8)'
    })
    $('.inbox').css({
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    })
    $('.inbox').append(`<img src=".${src} alt="">`)


})




// product 구역의 제품설명을 두 줄만 보이도록 하시오. (129p. substring()메서드 활용)
// 제이쿼리 $('선택자')에는 .textContent 속성을 사용할 수 없으나, 
// 자바스크립트 오브젝트 elP[i]에는 제이쿼리 .text() 메서드를 사용 할수 있음
// 1.
$('.article4 ul p').each(function () {
    var text = $(this).text()
    text = text.substring(0, 57)
    $(this).text(text + '...')
})

// 2.
// var elP = document.querySelectorAll('.article4 ul p')
// for (var i=0; i<elP.length; i++) {
//     var text = elP[i].textContent
//     text = text.substring(0, 57)
//     elP[i].textContent = text+'...'
// }

