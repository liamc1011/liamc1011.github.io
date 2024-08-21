// let revealedOnce = false

// function change_delay() {
//   if (revealedOnce == true) 
//     return 70;
//   else 
//     return 400;
// }

options = {
  delay: 400,
  easing: 'cubic-bezier(.52,.08,.53,.98)',
  duration: 500,
  distance: '15px',
  // origin: 'top',
  cleanup: true,
  reset: false,
}

options2 = {
  delay: 50,
  easing: 'cubic-bezier(.52,.08,.53,.98)',
  duration: 300,
  distance: '15px',
  // origin: 'top',
  cleanup: true,
  reset: true,
}

ScrollReveal().reveal('#intro', options);
// ScrollReveal().reveal('#intro h2, #intro div', options);
ScrollReveal().reveal('.navbar', options);
ScrollReveal().reveal('.panel h2, .panel div', options);