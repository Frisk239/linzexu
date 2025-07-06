// 初始化时间轴
function initTimeline() {
    const timelineData = [
        {
            date: "1785年8月30日",
            title: "出生",
            content: "林则徐出生于福建侯官（今福州）一个贫寒的教师家庭",
            image: "../public/images/banshenxinag.png"
        },
        {
            date: "1811年",
            title: "进士及第",
            content: "考中进士，选翰林院庶吉士，开始仕途生涯"
        },
        {
            date: "1837年",
            title: "湖广总督",
            content: "任湖广总督，开始严厉禁烟"
        },
        {
            date: "1839年6月3日",
            title: "虎门销烟",
            content: "在广东虎门主持销毁鸦片237万余斤",
            image: "../public/images/humenxiaoyan.png"
        },
        {
            date: "1840年",
            title: "鸦片战争爆发",
            content: "因禁烟引发中英冲突，被革职查办"
        },
        {
            date: "1841年",
            title: "贬官新疆",
            content: "被发配新疆伊犁，途中仍心系国事",
            image: "../public/images/bianguanxinjiang.png"
        },
        {
            date: "1845年",
            title: "重新起用",
            content: "被重新起用为陕甘总督、陕西巡抚"
        },
        {
            date: "1850年11月22日",
            title: "逝世",
            content: "在赴广西镇压太平军途中病逝于潮州"
        }
    ];

    const timelineContainer = document.getElementById('timeline');
    
    timelineData.forEach(item => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        const dateElement = document.createElement('div');
        dateElement.className = 'timeline-date';
        dateElement.textContent = item.date;
        
        const contentElement = document.createElement('div');
        contentElement.className = 'timeline-content';
        
        const titleElement = document.createElement('h3');
        titleElement.textContent = item.title;
        
        const descElement = document.createElement('p');
        descElement.textContent = item.content;
        
        contentElement.appendChild(titleElement);
        contentElement.appendChild(descElement);
        
        if (item.image) {
            const imgElement = document.createElement('img');
            imgElement.src = item.image;
            imgElement.alt = item.title;
            contentElement.appendChild(imgElement);
        }
        
        timelineItem.appendChild(dateElement);
        timelineItem.appendChild(contentElement);
        timelineContainer.appendChild(timelineItem);
    });
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
    initTimeline();
    initTyped();
    initSwiper();
});
