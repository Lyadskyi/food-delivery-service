const openModalBtn = document.querySelector('.header__btn');
const closeModalBtn = document.querySelector('.modal__close-btn');
const submitBtn = document.querySelector('.review__form-btn');
const backdrop = document.querySelector('.backdrop');

const openModalMobileBtn = document.querySelector('.burger__btn');
const closeModalMobileBtn = document.querySelector('.modal__mobile-close-btn');
const mobileMenu = document.querySelector('.modal__mobile');

// === Backdrop-modal window === //
openModalBtn.addEventListener('click', (event) => {
	event.preventDefault(); // Забороняємо посиланню перевантажувати сторінку
	backdrop.classList.add('is-open');
});

closeModalBtn.addEventListener('click', () => {
	backdrop.classList.remove('is-open');
});

// Функція для закриття при натисканні на "Send"
submitBtn.addEventListener('click', (event) => {
	// Якщо форма валідна, закриваємо модалку
	event.preventDefault();
	// Розкоментуйте, якщо не хочете, щоб форма реально відправлялася
	backdrop.classList.remove('is-open');
});

// === Mobile-modal window === //
openModalMobileBtn.addEventListener('click', () => {
	mobileMenu.classList.add('is-open');
	// Додатково: забороняю прокрутку сторінки, поки меню відкрите
	document.body.classList.add('no-scroll');
});

closeModalMobileBtn.addEventListener('click', () => {
	mobileMenu.classList.remove('is-open');
	document.body.classList.remove('no-scroll');
});
