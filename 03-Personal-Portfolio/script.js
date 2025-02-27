const toggleDarkMode = document.getElementById('toggleDarkMode');
toggleDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    toggleDarkMode.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Load dark mode state from localStorage
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    toggleDarkMode.textContent = '☀️';
}