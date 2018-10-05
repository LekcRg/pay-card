// import $ from 'jquery';
import validate from 'jquery-validation';

const form = $('#card-form');

form.validate({
  rules: {
    number1: {
      required: true,
      minlength: 4,
      maxlength: 4,
      number: true,
    },
    number2: {
      required: true,
      minlength: 4,
      maxlength: 4,
      number: true,
    },
    number3: {
      required: true,
      minlength: 4,
      maxlength: 4,
      number: true,
    },
    number4: {
      required: true,
      minlength: 4,
      maxlength: 4,
      number: true,
    },
    cvv: {
      required: true,
      minlength: 3,
      maxlength: 3,
      number: true,
    },
    holder: {
      required: true,
      minlength: 4,
      lettersonly: true,
    },
  },
  errorPlacement() {
    return false;
  },
  submitHandler: (forma) => {
    forma.append('Данные введены правильно');
  },
});

// Для валидатора
// Только буквы и пробел
$.validator.addMethod('lettersonly', (value, element) => this.optional(element) || /^[a-z ]+$/i.test(value), 'Letters only please');

const cardNumberInput = document.querySelectorAll('.card__number');

// Автоматически меняет фокус в номере карты
cardNumberInput.forEach((input, index) => {
  input.addEventListener('keyup', (ev) => {
    if (ev.currentTarget.value.length === 4 && index < cardNumberInput.length - 1) {
      ev.currentTarget.nextSibling.nextSibling.focus();
    }
  });
});
