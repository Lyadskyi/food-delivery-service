const openModalBtn = document.querySelector('.header__btn');
const closeModalBtn = document.querySelector('.modal__close-btn');
const submitBtn = document.querySelector('.review__form-btn');
const backdrop = document.querySelector('.backdrop');

openModalBtn.addEventListener('click', (event) => {
	event.preventDefault(); // Забороняємо посиланню перевантажувати сторінку
	backdrop.classList.add('is-open');
});

closeModalBtn.addEventListener('click', () => {
	backdrop.classList.remove('is-open');
});

// 4. Функція для закриття при натисканні на "Send"
// submitBtn.addEventListener('click', (event) => {
//   Якщо форма валідна, закриваємо модалку
//   event.preventDefault();
//   Розкоментуйте, якщо не хочете, щоб форма реально відправлялася
//   backdrop.classList.remove('is-open');
// });
