document.addEventListener('DOMContentLoaded', function () {
    const cardNumberInput = document.querySelector('.card-number');
    
    cardNumberInput.addEventListener('input', function (event) {
        let input = event.target.value;
        input = input.replace(/\D/g, '');
        input = input.replace(/(.{4})(?=.)/g, '$1 ');

        if (input.replace(/\s/g, '').length > 16) {
            input = input.slice(0, 19); 
        }
        
        event.target.value = input;
    });

    const expiryDateInput = document.querySelector('.expiry-date');
    expiryDateInput.addEventListener('input', function (event) {
        let input = event.target.value;
        input = input.replace(/\D/g, '');
        if (input.length > 2) {
            input = input.substring(0, 2) + '/' + input.substring(2, 4); 
        }
        event.target.value = input;
    });

    const cvvInput = document.querySelector('.cvv');
    cvvInput.addEventListener('input', function (event) {
        let input = event.target.value;
        if (input.length > 3) {
            input = input.substring(0, 3); 
        }
        event.target.value = input;
    });

    document.querySelectorAll('.toggle-text').forEach(function (text) {
        text.addEventListener('click', function () {
          const checkboxId = text.getAttribute('for');
          const checkbox = document.getElementById(checkboxId);
          checkbox.checked = !checkbox.checked;
        });
      });
});
