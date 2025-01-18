function updateBodyWrapperMargin() {
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

window.addEventListener('load', updateBodyWrapperMargin);
window.addEventListener('resize', updateBodyWrapperMargin);
