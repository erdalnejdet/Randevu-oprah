function updateBodyWrapperMargin() {
    // Sadece masaüstü cihazlarda çalış
    if (window.innerWidth <= 768) {
        console.warn('Mobil cihaz algılandı. İşlem atlandı.');
        return;
    }

    var headers = document.querySelectorAll('header');
    var bodyWrappers = document.querySelectorAll('.body-wrapper');
    
    if (headers.length === 0 || bodyWrappers.length === 0) {
        console.warn('Gerekli elemanlar bulunamadı. İşlem atlandı.');
        return;
    }

    headers.forEach((header) => {
        var headerWidth = header.offsetWidth; 

        bodyWrappers.forEach((bodyWrapper) => {
            bodyWrapper.style.marginLeft = headerWidth + 'px'; 
        });
    });
}

// Sayfa yüklendiğinde ve yeniden boyutlandırıldığında kontrol et
window.addEventListener('load', updateBodyWrapperMargin);
window.addEventListener('resize', updateBodyWrapperMargin);
