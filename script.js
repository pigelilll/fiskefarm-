// Navigationen er tilgængelig uden JavaScript; på mobil kan den foldes sammen.
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');

document.documentElement.classList.add('js-enabled');
menuButton.hidden = false;

function closeMenu() {
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
}

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
    closeMenu();
    menuButton.focus();
  }
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.header')) closeMenu();
});

window.matchMedia('(min-width: 901px)').addEventListener('change', closeMenu);
document.querySelector('#year').textContent = new Date().getFullYear();
