// File ini HANYA berisi logika untuk peta interaktif.

const storyDatabase = {
    "jawa-tengah": { displayName: "Jawa Tengah", stories: [ { title: "Roro Jonggrang", author: "Legenda Candi Prambanan", image: "images/legenda naga basuki.png" }, { title: "Timun Mas", author: "Dongeng Populer", image: "images/timun mas.png" } ] },
    "jawa-barat": { displayName: "Jawa Barat", stories: [ { title: "Sangkuriang", author: "Legenda Tangkuban Perahu", image: "images/sangkuriang.png" } ] },
    "sumatera-utara": { displayName: "Sumatera Utara", stories: [ { title: "Legenda Danau Toba", author: "Asal Mula Danau Toba", image: "images/danau toba.png" } ] },
    "bali": { displayName: "Bali", stories: [ { title: "Legenda Naga Besukih", author: "Asal Mula Selat Bali", image: "images/legenda naga basuki.png" } ] },
    "sumatera-barat": { displayName: "Sumatera Barat", stories: [ { title: "Malin Kundang", author: "Anak Durhaka", image: "images/malin kundangg.png" } ] }
    // Anda bisa melengkapi database ini...
};

const sidebarTitle = document.getElementById('sidebar-title');
const storyList = document.getElementById('story-list');
const allProvinces = document.querySelectorAll('#svg-map path[data-province]');

function updateSidebar(provinceKey) {
    allProvinces.forEach(p => p.classList.remove('active'));
    const activeProvinceElement = document.querySelector(`#svg-map path[data-province='${provinceKey}']`);
    if(activeProvinceElement) activeProvinceElement.classList.add('active');

    const provinceData = storyDatabase[provinceKey];
    if (provinceData) {
        sidebarTitle.textContent = `Cerita dari ${provinceData.displayName}`;
        storyList.innerHTML = ''; 
        if (provinceData.stories.length > 0) {
            provinceData.stories.forEach(story => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `<img src="<span class="math-inline">\{story\.image\}" alt\="</span>{story.title}" class="story-item-img"><div class="story-item-info"><h4><span class="math-inline">\{story\.title\}</h4\><p\></span>{story.author}</p></div>`;
                storyList.appendChild(listItem);
            });
        } else { 
            storyList.innerHTML = '<li>Belum ada cerita untuk provinsi ini.</li>';
        }
    } else {
        sidebarTitle.textContent = `Data untuk ${provinceKey} Belum Ada`;
        storyList.innerHTML = '<li>Silakan lengkapi data di storyDatabase.</li>';
    }
}

allProvinces.forEach(provincePath => {
    provincePath.addEventListener('click', () => {
        const provinceKey = provincePath.getAttribute('data-province');
        updateSidebar(provinceKey);
    });
});