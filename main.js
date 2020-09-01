const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navbar');

const handleClick = () => {
  hamburger.classList.toggle('hamburger--active');
  nav.classList.toggle('navbar--active');
}

hamburger.addEventListener('click', handleClick);
