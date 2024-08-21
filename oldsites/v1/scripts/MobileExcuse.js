const mediaQuery = window.matchMedia('(max-width: 480px)')

if (mediaQuery.matches) {
    alert('WARNING: This website is not optimized for your screen size yet. Proceed with caution!');
}
