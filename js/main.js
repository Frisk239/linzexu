// 初始化页面内容
function initContent() {
    // 保留此函数以便未来扩展
}

// 初始化打字效果
function initTyped() {
    const typed = new Typed('.subtitle', {
        strings: [
            '睁眼看世界的第一人',
            '民族英雄林则徐',
            '虎门销烟领导者'
        ],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });
}

// 初始化轮播图
function initSwiper() {
    new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        }
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initContent();
    initTyped();
    initSwiper();
});
