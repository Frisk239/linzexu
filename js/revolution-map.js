// 林则徐生平事件坐标配置
const linzexuEvents = [
    {
        id: 'birth',
        name: '出生',
        coords: [26.08, 119.30], // 福州
        icon: 'birthday-cake',
        routes: [],
        description: '1785年出生于福建福州一个贫寒的教师家庭'
    },
    {
        id: 'jinshi',
        name: '进士及第',
        coords: [39.90, 116.40], // 北京
        icon: 'graduation-cap',
        routes: [],
        description: '1811年考中进士，选翰林院庶吉士，开始仕途生涯'
    },
    {
        id: 'huguang',
        name: '湖广总督',
        coords: [30.59, 114.30], // 武汉
        icon: 'user-tie',
        routes: [],
        description: '1837年任湖广总督，开始严厉禁烟'
    },
    {
        id: 'humen',
        name: '虎门销烟',
        coords: [22.82, 113.67], // 虎门
        icon: 'fire',
        routes: [],
        description: '1839年在广东虎门主持销毁鸦片237万余斤'
    },
    {
        id: 'xinjiang',
        name: '贬官新疆',
        coords: [43.92, 81.32], // 伊犁
        icon: 'exclamation-triangle',
        routes: [],
        description: '1841年被发配新疆伊犁，途中仍心系国事'
    }
];

// 初始化地图
document.addEventListener('DOMContentLoaded', function() {
    const map = L.map('revolution-map').setView([35, 108], 5);
    
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
                <h3>${event.name}</h3>
                <p>${event.description}</p>
                <a href="events/${event.id}.html">查看更多 →</a>
            </div>
        `);
    });
}
