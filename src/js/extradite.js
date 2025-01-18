document.addEventListener('DOMContentLoaded', function () {
    const openExtraditeBtn = document.getElementById('openExtradite');
    const closeModalBtn = document.getElementById('closeModalConcrat');
    const extraditeModal = document.querySelector('.extradite');
    const body = document.body;
    const extraditeClose = document.querySelector('.extradite-close');
    if (openExtraditeBtn && extraditeModal) {
        openExtraditeBtn.addEventListener('click', () => {
            extraditeModal.classList.add('active');
            body.classList.add('freezer');
        });
    }

    const closeModal = () => {
        extraditeModal?.classList.remove('active'); 
        body.classList.remove('freezer');
    };

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    if (extraditeClose) {
        extraditeClose.addEventListener('click', closeModal);
    }
});
