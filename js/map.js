// 林则徐生平事件坐标配置
const linzexuEvents = [
    {
        id: 'birth',
        title: '出生',
        date: '1785年',
        coords: [26.08, 119.30], // 福州
        icon: 'birthday-cake',
        description: '林则徐出生于福建福州一个贫寒的教师家庭',
        link: 'birth.html'
    },
    {
        id: 'jinshi',
        title: '进士及第',
        date: '1811年',
        coords: [39.90, 116.40], // 北京
        icon: 'graduation-cap',
        description: '考中进士，选翰林院庶吉士，开始仕途生涯',
        link: 'jinshi.html'
    },
    {
        id: 'huguang',
        title: '湖广总督',
        date: '1837年',
        coords: [30.59, 114.30], // 武汉
        icon: 'user-tie',
        description: '任湖广总督，开始严厉禁烟',
        link: 'huguang.html'
    },
    {
        id: 'humen',
        title: '虎门销烟',
        date: '1839年',
        coords: [22.82, 113.67], // 虎门
        icon: 'fire',
        description: '在广东虎门主持销毁鸦片237万余斤',
        link: 'events/humen.html'
    },
    {
        id: 'xinjiang',
        title: '贬官新疆',
        date: '1841年',
        coords: [43.92, 81.32], // 伊犁
        icon: 'exclamation-triangle',
        description: '被发配新疆伊犁，途中仍心系国事',
        link: 'xinjiang.html'
    }
];

// 初始化地图
document.addEventListener('DOMContentLoaded', function() {
    const map = L.map('map-container').setView([35, 108], 5);
    
    // 加载中国地图
    fetch('china.json')
        .then(response => response.json())
        .then(data => {
            L.geoJSON(data, {
                style: {
                    fillColor: '#f5f5e9',
                    weight: 1,
                    opacity: 1,
                    color: '#9e2b2b',
                    fillOpacity: 0.7
                }
            }).addTo(map);
            
            // 添加事件标记
            addEventMarkers(map);
        });
});

// 添加事件标记
function addEventMarkers(map) {
    linzexuEvents.forEach(event => {
        // 创建自定义图标
        const icon = L.divIcon({
            html: `<i class="fas fa-${event.icon}"></i>`,
            className: 'custom-marker',
            iconSize: [30, 30]
        });

        // 创建标记
        const marker = L.marker(event.coords, { icon }).addTo(map);
        
        // 绑定弹出窗口
        marker.bindPopup(`
            <div class="event-popup">
                <h3>${event.title} (${event.date})</h3>
                <p>${event.description}</p>
                <a href="${event.link}">查看更多 →</a>
            </div>
        `);
    });
}
