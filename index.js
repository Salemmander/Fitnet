const placeholderLinks = document.querySelectorAll('.nav-link');

placeholderLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    window.open('https://example.com', '_blank', 'width=500,height=500');
  });
});
