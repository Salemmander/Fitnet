const placeholderLinks = document.querySelectorAll('.nav-link');

placeholderLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    window.open('https://github.com/Salemmander/Fitnet', '_blank', 'width=500,height=500');
  });
});
