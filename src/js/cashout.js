document.addEventListener('DOMContentLoaded', function () {
    // Kart numarası inputu
    const cardNumberInput = document.querySelector('.card-number');
    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', function (event) {
            let input = event.target.value;
            input = input.replace(/\D/g, ''); // Sadece sayıları tut
            input = input.replace(/(.{4})(?=.)/g, '$1 '); // Her 4 sayıdan sonra boşluk

            if (input.replace(/\s/g, '').length > 16) {
                input = input.slice(0, 19); // Maksimum 16 hane
            }

            event.target.value = input;
        });
    }

    // Son kullanma tarihi inputu
    const expiryDateInput = document.querySelector('.expiry-date');
    if (expiryDateInput) {
        expiryDateInput.addEventListener('input', function (event) {
            let input = event.target.value;
            input = input.replace(/\D/g, ''); // Sadece sayıları tut
            if (input.length > 2) {
                input = input.substring(0, 2) + '/' + input.substring(2, 4); // AA/YY formatı
            }
            event.target.value = input;
        });
    }

    // CVV inputu
    const cvvInput = document.querySelector('.cvv');
    if (cvvInput) {
        cvvInput.addEventListener('input', function (event) {
            let input = event.target.value;
            if (input.length > 3) {
                input = input.substring(0, 3); // Maksimum 3 hane
            }
            event.target.value = input;
        });
    }

    // Metinle toggle checkbox
    document.querySelectorAll('.toggle-text').forEach(function (text) {
        text.addEventListener('click', function () {
            const checkboxId = text.getAttribute('for');
            const checkbox = document.getElementById(checkboxId);
            if (checkbox) {
                checkbox.checked = !checkbox.checked;
            }
        });
    });
});
