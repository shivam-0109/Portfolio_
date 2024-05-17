document.getElementById('theme-toggle').addEventListener('click', function() {
    const themeLink = document.getElementById('theme-link');
    if (themeLink.getAttribute('href') === 'style.css') {
        themeLink.setAttribute('href', 'styles-dark.css');
    } else {
        themeLink.setAttribute('href', 'style.css');
    }
});
