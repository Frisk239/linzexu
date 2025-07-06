// 林则徐生平事件坐标配置
const linzexuEvents = [
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
    
    // 加载浅色地图瓦片
    const lightMap = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);

    // 加载中国地图GeoJSON
    fetch('china.json')
        .then(response => response.json())
        .then(data => {
            L.geoJSON(data, {
                style: {
                    color: '#9e2b2b',
                    weight: 1.5,
                    fillColor: '#f8f8f8',
                    fillOpacity: 0.3
                }
            }).addTo(map);
            
            // 添加事件标记
            addEventMarkers(map);
        });
});

// 添加事件标记
function addEventMarkers(map) {
    linzexuEvents.forEach(event => {
        // 创建动态缩放图标
        function createDynamicIcon() {
            const zoom = map.getZoom();
            const size = Math.max(20, 30 * Math.pow(1.2, zoom - 5));
            const colors = {
                'birth': '#D4AF37',  // 金色-出生
                'jinshi': '#2E8B57', // 绿色-科举
                'huguang': '#4169E1', // 蓝色-湖广总督
                'humen': '#9A1F1A',  // 红色-虎门销烟
                'xinjiang': '#9932CC' // 紫色-贬官新疆
            };
            return L.divIcon({
                html: `<i class="fas fa-${event.icon}" style="color:${colors[event.id]};font-size:${size}px;text-shadow:0 0 8px rgba(255,255,255,0.5);"></i>`,
                className: 'custom-marker',
                iconSize: [size, size]
            });
        }
        
        // 创建标记
        const marker = L.marker(event.coords, { 
            icon: createDynamicIcon()
        }).addTo(map);
        
        // 地图缩放时更新图标大小
        map.on('zoomend', function() {
            marker.setIcon(createDynamicIcon());
        });
        
        // 绑定弹出窗口
        let popupContent = `
            <div class="event-card">
                <h3>${event.name}</h3>
                <i class="fas fa-${event.icon}"></i>
                <p class="event-description">${event.description}</p>
                <button class="explore-btn" onclick="window.location.href='events/${event.id}.html'">
                    点击探索
                </button>
            </div>`;
            
        marker.bindPopup(popupContent, {
            className: 'beautified-popup',
            maxWidth: 350
        });
    });
}
