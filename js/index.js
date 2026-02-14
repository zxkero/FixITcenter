// Модальное окно
const modal = document.querySelector('.modal');
const openBtn = document.getElementById('modalOpen');
const closeBtn = document.getElementById('modalClose');

if (modal && openBtn && closeBtn) {
    openBtn.addEventListener('click', () => {
        modal.classList.add('modal--active');
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('modal--active');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('modal--active');
        }
    });
}

// Маска ввода телефона
const phoneInputs = document.querySelectorAll('input[type="tel"]');

phoneInputs.forEach(input => {
    input.addEventListener('input', function(e) {
        const value = input.value.replace(/\D/g, '');
        let formattedValue = '';

        if (value.length > 0) {
            formattedValue = '+7 ';
        }
        if (value.length > 1) {
            formattedValue += '(' + value.substring(1, 4);
        }
        if (value.length >= 5) {
            formattedValue += ') ' + value.substring(4, 7);
        }
        if (value.length >= 8) {
            formattedValue += '-' + value.substring(7, 9);
        }
        if (value.length >= 10) {
            formattedValue += '-' + value.substring(9, 11);
        }

        input.value = formattedValue;
    });
});

// Имитация отправки формы
const forms = document.querySelectorAll('.request-form');

forms.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;

        submitBtn.textContent = 'Отправка...';
        submitBtn.disabled = true;

        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;

            form.reset();

            alert('Спасибо! Ваша заявка принята. Менеджер свяжется с вами через 15 минут.');

            const modal = document.querySelector('.modal');
            if (modal && modal.classList.contains('modal--active')) {
                modal.classList.remove('modal--active');
            }
        }, 500);
    });
});


//Бургер меню (мобильная навигация)

document.addEventListener('DOMContentLoaded', () => {

    const burgerBtn = document.getElementById('burgerBtn');
    const navList = document.getElementById('navList');

    if (burgerBtn && navList) {

        burgerBtn.addEventListener('click', () => {
            navList.classList.toggle('nav__list--active');

            burgerBtn.classList.toggle('burger-menu--active');

            document.body.classList.toggle('no-scroll');
        });

        const navLinks = navList.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('nav__list--active');
                burgerBtn.classList.remove('burger-menu--active');
                document.body.classList.remove('no-scroll');
            });
        });
    }
});