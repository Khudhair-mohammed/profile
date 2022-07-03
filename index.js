

const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelectorAll('.navigation');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('active')
});
navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('active');
    });
});