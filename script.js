document.getElementById('theme-toggle').addEventListener('click', function() {
    const themeLink = document.getElementById('theme-link');
    if (themeLink.getAttribute('href') === 'style.css') {
        themeLink.setAttribute('href', 'styles-dark.css');
    } else {
        themeLink.setAttribute('href', 'style.css');
    }
});


const themeToggle = document.getElementById('theme-toggle');
const themeStylesheet = document.getElementById('themeStylesheet');

// Event listener for switch toggle
themeToggle.addEventListener('change', function() {
  // Check if switch is checked
  if (this.checked) {
    // Use black theme
    themeStylesheet.href = 'styles-dark.css';
  } else {
    // Use default theme
    themeStylesheet.href = 'style.css';
  }
});
