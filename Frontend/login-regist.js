// File ini HANYA berisi logika untuk membuka, menutup, dan mengelola modal login/register.

const loginRegisterBtn = document.querySelector('.login-btn');
const modalOverlay = document.getElementById('login-modal-overlay');
const storyListForModal = document.getElementById('story-list'); // Ambil list UL untuk event

if (modalOverlay) {
    const closeModalBtn = document.getElementById('close-modal-btn');
    const loginForm = document.getElementById('login-form-container');
    const registerForm = document.getElementById('register-form-container');
    const showRegisterLink = document.getElementById('show-register-link');
    const showLoginLink = document.getElementById('show-login-link');

    function openModal() {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        modalOverlay.classList.add('show');
    }

    function closeModal() {
        modalOverlay.classList.remove('show');
    }

    // Event listener untuk tombol login di header
    loginRegisterBtn.addEventListener('click', (e) => { e.preventDefault(); openModal(); });

    // Event listener untuk menutup modal
    closeModalBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });

    // Event listener untuk beralih form
    showRegisterLink.addEventListener('click', (e) => { e.preventDefault(); loginForm.style.display = 'none'; registerForm.style.display = 'block'; });
    showLoginLink.addEventListener('click', (e) => { e.preventDefault(); registerForm.style.display = 'none'; loginForm.style.display = 'block'; });

    // Event listener untuk daftar cerita di sidebar (Event Delegation)
    // Ini akan memicu modal jika salah satu cerita di sidebar diklik
    storyListForModal.addEventListener('click', (e) => {
        if (e.target.closest('li')) { // Jika yang diklik adalah 'li' atau anaknya
            e.preventDefault();
            openModal();
        }
    });
}