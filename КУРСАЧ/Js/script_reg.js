
const checker = document.querySelector(".captcha")
const checkbox = document.querySelector("#check")
const buttons = document.querySelectorAll(".login_btn")

const captchaWindow = document.querySelector(".captcha-window")
const captchaBtn = captchaWindow.querySelector(".captcha_btn")
const captchInput = document.querySelector(".captcha-input")
const captchaText = document.querySelector("#captcha-text")

let tries = 0;
let captchaAns = 0;

checker.addEventListener("click", captcha)

function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key))
      return false;
  }
  return true;
}

function confirm() {
  tries += 1;
  if (tries == 1) {
    if (captchInput.value == captchaText.innerHTML) {
      captchaWindow.style.transform = "scale(0)"
      checkbox.checked = true
      buttons.forEach(x => x.removeAttribute("disabled"))
      checker.removeEventListener("click",captcha)
      checkbox.disabled = true
    } else {
      captchInput.value = ""
      let a = Math.floor(Math.random() * 100)
      let b = Math.floor(Math.random() * 10)
      captchaText.innerHTML = a + " + " + b
      captchaAns = a + b
    }
  } else {
    if (captchInput.value == captchaAns) {
      captchaWindow.style.transform = "scale(0)"
      checkbox.checked = true
      buttons.forEach(x => x.removeAttribute("disabled"))
      checker.removeEventListener("click",captcha)
      checkbox.disabled = true;
    } else {
      captchInput.value = ""
      checkbox.checked = false;
      alert('Ошибка')
      captchaWindow.style.transform = "scale(0)"
      checker.removeEventListener("click", captcha)
      checkbox.disabled = true;
    }
  }
}

function generateRandomString() {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const charactersLength = characters.length;
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    result += characters.charAt(randomIndex);
  }
  return result;
}

function captcha() {
  captchaWindow.style.transform = "scale(1)"
  captchaText.innerHTML = generateRandomString()
  captchaBtn.addEventListener("click", confirm)
}

//письмо подтверждение
function validateForm(event) {
  const inputs = document.querySelectorAll('input[type=text], input[type=password]');
  for (let i = 0; i < inputs.length; i++) {
   if (inputs[i].value === '') {
     alert('Please fill all fields!');
     return false;
   }
  }
 
  if (!checkbox.checked) {
   alert('Please solve the captcha!');
   return false;
  }
 
  alert('Для подтверждения аккаунта перейдите по ссылке в письме!');
  window.location.href = event.target.action;
  return false;
 }
 
 
 

