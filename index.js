const inputName = document.querySelector(".input_name")
const inputSurName = document.querySelector(".input_surname")
const inputPatronymic = document.querySelector(".input_patronymic")

const inputPassword = document.querySelector(".input_password")
const inputRepeatPassword = document.querySelector(".input_repeat_password")
const inputEmail = document.querySelector(".input_email")
const inputRepeatEmail = document.querySelector(".input_repeat_email")

const buttonValidation = document.querySelector(".button_validation")

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const total = {
    input_name: true,
    input_surname: true,
    input_patronymic: true,
    input_email: true,
    input_repeat_email: true,
    input_password: true,
    input_repeat_password: true
}

const minLength = (e, el) => {
    console.log(el.name)
    if (el.value.length < 5) {
        total[el.name] = false
        el.classList.add("redBorder")
    } else {
        total[el.name] = true
        el.classList.remove("redBorder")
    }
}

const repeatInput = (el, item) => {
    if (el.value.length && el.value === item.value) {
        total[el.name] = true
        total[item.name] = true
        console.log("Совпадает")
    } else {
        total[el.name] = false
        total[item.name] = false
        console.log("Не совпадает")
    }
}

function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
}

function onInput(el) {
    if (isEmailValid(el.value)) {
        total[el.name] = true
        el.classList.remove("redBorder")
        console.log("Valid")
    } else {
        total[el.name] =false
        el.classList.add("redBorder")
        console.log("No valid")
    }
}

const funTotal = (total) => {
    if (Object.values(total).includes(false)) {
        console.log("Error");
    } else {
        console.log(
            ` Имя: ${inputName.value}
           Фамилия: ${inputSurName.value}
            Отчество: ${inputPatronymic.value}
         Почта: ${inputEmail.value}
          Пароль: ${inputPassword.value}
            `
        );
    }
};


buttonValidation.addEventListener("click", (e) => {
    console.log(total)
    minLength(e, inputName)
    minLength(e, inputSurName)
    minLength(e, inputPatronymic)
    minLength(e, inputPassword)
    minLength(e, inputRepeatPassword)
    repeatInput(inputPassword, inputRepeatPassword)
    onInput(inputEmail)
    onInput(inputRepeatEmail)
    repeatInput(inputEmail, inputRepeatEmail)
    funTotal(total)
})









