document.addEventListener('DOMContentLoaded', function() {
    const openExtraditeBtn = document.getElementById('openExtradite');
    const closeModalBtn = document.getElementById('closeModalConcrat');
    const extraditeModal = document.querySelector('.extradite');
    const body = document.body;
    const extraditeClose = document.querySelector('.extradite-close');

    // Modalı açma
    openExtraditeBtn.addEventListener('click', () => {
        extraditeModal.classList.add('active'); 
        body.classList.add('freezer');
    });

    // Modalı kapatma (her iki buton için)
    const closeModal = () => {
        extraditeModal.classList.remove('active');
        body.classList.remove('freezer');
    };

    closeModalBtn.addEventListener('click', closeModal);
    extraditeClose.addEventListener('click', closeModal);
}); 