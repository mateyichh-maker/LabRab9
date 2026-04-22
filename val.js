document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.forms');
    const fullname = document.getElementById('fullname');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const birthdate = document.getElementById('birthdate');
    const city = document.getElementById('city');

    const fullnameMsg = document.querySelector('.fullnameMsg');
    const emailMsg = document.querySelector('.emailMsg');
    const phoneMsg = document.querySelector('.phoneMsg');
    const birthdateMsg = document.querySelector('.birthdateMsg');
    const cityMsg = document.querySelector('.cityMsg');

    const phoneRegex = /^\+?\d{10,15}$/;

    function clearMessages() {
        fullnameMsg.textContent = '';
        emailMsg.textContent = '';
        phoneMsg.textContent = '';
        birthdateMsg.textContent = '';
        cityMsg.textContent = '';
    }

    function validateFullname() {
        if (fullname.value.trim() === '') {
            fullnameMsg.textContent = 'Введите имя';
            fullnameMsg.className = "invalid";
            return false;
        }
        fullnameMsg.textContent = 'Успешно!';
        fullnameMsg.className = "valid";
        return true;
    }

    function validateEmail() {
        const value = email.value.trim();
        if (value === '') {
            emailMsg.textContent = 'Введите email';
            emailMsg.className = "invalid";
            return false;
        }
        // Простая проверка на наличие @ и точки после неё
        if (!value.includes('@') || !value.includes('.') || value.indexOf('@') === 0) {
            emailMsg.textContent = 'Введите корректный email (пример: name@mail.ru)';
            emailMsg.className = "invalid";
            return false;
        }
        emailMsg.textContent = 'Успешно!';
        emailMsg.className = "valid";
        return true;
    }

    function validatePhone() {
        const value = phone.value.trim();
        if (value === '') {
            phoneMsg.textContent = 'Введите номер телефона';
            phoneMsg.className = "invalid";
            return false;
        }
        if (!phoneRegex.test(value)) {
            phoneMsg.textContent = 'Телефон: 10–15 цифр, может начинаться с +';
            phoneMsg.className = "invalid";
            return false;
        }
        phoneMsg.textContent = 'Успешно!';
        phoneMsg.className = "valid";
        return true;
    }

    function validateBirthdate() {
        if (birthdate.value === '') {
            birthdateMsg.textContent = 'Выберите дату рождения';
            birthdateMsg.className = "штvalid";
            return false;
        }
        birthdateMsg.textContent = 'Успешно!';
        birthdateMsg.className = "valid";
        return true;
    }

    function validateCity() {
        if (city.value.trim() === '') {
            cityMsg.textContent = 'Введите город';
            cityMsg.className = "invalid";
            return false;
        }
        cityMsg.textContent = 'Успешно!';
        cityMsg.className = "valid";
        return true;
    }

    function validateForm() {
        clearMessages();
        const isNameValid = validateFullname();
        const isEmailValid = validateEmail();
        const isPhoneValid = validatePhone();
        const isDateValid = validateBirthdate();
        const isCityValid = validateCity();
        return isNameValid && isEmailValid && isPhoneValid && isDateValid && isCityValid;
    }

    form.addEventListener('submit', function (event) {
        if (!validateForm()) {
            event.preventDefault();
        } else {
            event.preventDefault();
            const message = `Регистрация прошла успешно!\n\nИмя: ${fullname.value.trim()}\nEmail: ${email.value.trim()}\nТелефон: ${phone.value.trim()}\nДата рождения: ${birthdate.value}\nГород: ${city.value.trim()}`;
            alert(message);

        }
    });

    // Меняет цвет текста на фиолетовый
    const title = document.querySelector(".title");
    title.style.color = "purple";

    // Меняет цвет фона на красный
    const box = document.querySelector(".chto");
    box.style.backgroundColor = "red";

});