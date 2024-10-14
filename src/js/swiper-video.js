document.addEventListener('DOMContentLoaded', function () {
    const psikologBoxes = document.querySelectorAll('.psikolog-box');

    psikologBoxes.forEach(box => {
        const list = box.querySelector('.uzmanlik-listesi');
        const items = list.getElementsByTagName('li');
        const totalItems = items.length;
        const maxVisibleItems = 5;
        const dahaFazlaDiv = box.querySelector('.daha-fazla');

        // İlk 5 öğeyi göster, diğerlerini gizle
        for (let i = 0; i < totalItems; i++) {
            if (i < maxVisibleItems) {
                items[i].style.display = 'list-item'; // Göster
            } else {
                items[i].style.display = 'none'; // Gizle
            }
        }

        // Kalan öğe sayısını göster
        const remainingItems = totalItems - maxVisibleItems;
        const moreText = remainingItems > 0 ? `Daha Fazla Göster (${remainingItems})` : '';
        dahaFazlaDiv.innerText = moreText;

        // "Daha Fazla" metnine tıklama olayı
        dahaFazlaDiv.addEventListener('click', function () {
            if (this.innerText.startsWith('Daha Fazla')) {
                // Tüm öğeleri göster
                for (let i = 0; i < totalItems; i++) {
                    items[i].style.display = 'list-item'; // Tüm öğeleri göster
                }
                this.innerText = 'Daha Az Göster'; // Metni değiştir
            } else {
                // İlk 5 öğeyi göster, diğerlerini gizle
                for (let i = 0; i < totalItems; i++) {
                    if (i < maxVisibleItems) {
                        items[i].style.display = 'list-item'; // Göster
                    } else {
                        items[i].style.display = 'none'; // Gizle
                    }
                }
                this.innerText = `Daha Fazla Göster (${remainingItems})`; // Metni eski haline getir
            }
        });
    });
});
