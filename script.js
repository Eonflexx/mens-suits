document.addEventListener('DOMContentLoaded', (event) => {
    // Profile dropdown functionality
    const userDropdown = document.getElementById('userDropdown');
    const dropdownMenu = userDropdown.nextElementSibling;

    userDropdown.addEventListener('click', (e) => {
        e.preventDefault();
        dropdownMenu.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!userDropdown.contains(e.target)) {
            dropdownMenu.classList.remove('show');
        }
    });

    // Theme toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('bg-dark');
        body.classList.toggle('text-white');
        body.classList.toggle('bg-light');
        body.classList.toggle('text-dark');

        // Store the theme preference in local storage
        if (body.classList.contains('bg-dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // Apply the saved theme on load
    if (localStorage.getItem('theme') === 'light') {
        body.classList.remove('bg-dark', 'text-white');
        body.classList.add('bg-light', 'text-dark');
    }
});
