options = {
  delay: 400,
  easing: 'cubic-bezier(.52,.08,.53,.98)',
  duration: 500,
  distance: '15px',
  // origin: 'top',
  cleanup: true
}

ScrollReveal().reveal('#intro', options);
ScrollReveal().reveal('.panel h2, .panel div', options);
ScrollReveal().reveal('.navbar', options);