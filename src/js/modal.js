const tabs = document.querySelectorAll('.tab-list li');
const contentItems = document.querySelectorAll('.content-item'); // Eşleşecek içerik öğelerini seçin
const span = document.querySelector('.span');
// İlk tab'ı aktif yap ve içeriğini göster
const firstTab = tabs[0];
firstTab.classList.add('active');
const firstAnchor = firstTab.querySelector('a');
const firstTargetId = firstAnchor.getAttribute('href').substring(1);
contentItems.forEach((item) => {
    if (item.id === firstTargetId) {
        item.classList.add('open'); // İlk tab'a ait öğeye 'open' sınıfını ekle
    }
});
// Tab'lara tıklama olayını dinle
tabs.forEach((tab, index) => {
    const anchor = tab.querySelector('a');
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        // Tüm tab'ların 'active' sınıfını kaldır
        tabs.forEach((t) => t.classList.remove('active'));
        
        // Aktif tab'a 'active' sınıfını ekle
        tab.classList.add('active');
        // Span'ı hareket ettir
        span.style.left = `${index * 84}px`; // span'ı ilgili tab'a göre hareket ettir
        // Eşleşen içerik öğelerini göster
        const targetId = anchor.getAttribute('href').substring(1); // '#tab1' gibi bir href'den 'tab1' değerini al
        contentItems.forEach((item) => {
            if (item.id === targetId) {
                item.classList.add('open'); // Eşleşen öğeye 'open' sınıfını ekle
            } else {
                item.classList.remove('open'); // Eşleşmeyen diğer öğelerden 'open' sınıfını kaldır
            }
        });
    });
});