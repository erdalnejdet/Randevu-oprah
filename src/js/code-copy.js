document.querySelectorAll('.value').forEach((element) => {
    element.addEventListener('click', () => {
        const codeElement = element.previousElementSibling;
  

        if (codeElement && codeElement.classList.contains('code')) {
            const codeText = codeElement.textContent.trim();

            navigator.clipboard.writeText(codeText)
                .then(() => {
                    Swal.fire({
                        title: 'Kod Kopyalandı!',
                        text: `İndirim Kodu: ${codeText}`,
                        icon: 'success',
                        confirmButtonText: 'Tamam'
                    });
                })
                .catch((err) => {
                    console.error('Kopyalama hatası: ', err);
                    Swal.fire({
                        title: 'Hata!',
                        text: 'Kodu kopyalama işlemi başarısız oldu.',
                        icon: 'error',
                        confirmButtonText: 'Tamam'
                    });
                });
        }
    });
});
