
        const fileInput = document.getElementById('fileInput');
        const uploadArea = document.getElementById('uploadArea');
        const previewImage = document.getElementById('previewImage');
        const updateBtn = document.querySelector('.update-btn');
        const deleteBtn = document.querySelector('.delete-btn');

        // Handle click on upload area
        uploadArea.addEventListener('click', () => {
            fileInput.click();
        });

        // Handle drag and drop
        uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadArea.classList.add('drag-over');
        });

        uploadArea.addEventListener('dragleave', () => {
            uploadArea.classList.remove('drag-over');
        });

        uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadArea.classList.remove('drag-over');
            
            const files = e.dataTransfer.files;
            if (files.length > 0 && files[0].type.startsWith('image/')) {
                handleFile(files[0]);
            }
        });

        // Handle file selection
        fileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                handleFile(e.target.files[0]);
            }
        });

        // Handle file processing
        function handleFile(file) {
            const reader = new FileReader();
            
            reader.onload = (e) => {
                const img = new Image();
                img.onload = () => {
                    if (img.width >= 400 && img.height >= 400) {
                        previewImage.src = e.target.result;
                    } else {
                        alert('Görüntü boyutu en az 400x400px olmalıdır.');
                    }
                };
                img.src = e.target.result;
            };
            
            reader.readAsDataURL(file);
        }

        // Handle delete button
        deleteBtn.addEventListener('click', () => {
            previewImage.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23999' d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4-4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E";
        });

        // Handle update button
        updateBtn.addEventListener('click', () => {
            fileInput.click();
        });