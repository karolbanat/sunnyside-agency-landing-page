const burgerBtn = document.querySelector('.nav__burger-btn');
const nav = document.querySelector('.nav__links');
const navLinks = document.querySelectorAll('.nav__link');

const navThreshold = 760;

const handleNav = () => {
	if (window.innerWidth < navThreshold) {
		burgerBtn.classList.toggle('active', !nav.classList.contains('active'));
		nav.classList.toggle('active', burgerBtn.classList.contains('active'));
	}
};

burgerBtn.addEventListener('click', handleNav);
navLinks.forEach((link) => link.addEventListener('click', handleNav));
window.addEventListener('resize', () => {
	if (window.innerWidth >= navThreshold) {
		burgerBtn.classList.remove('active');
		nav.classList.remove('active');
	}
});
