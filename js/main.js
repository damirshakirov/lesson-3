task1 = function () {
  let a = document.getElementById('task1').innerHTML;
  document.getElementById('task1').innerHTML = a.replace(/'/g, '"');
}

task2 = function () {
  let a = document.getElementById('task2').innerHTML;
  let b = a.replace(/'/g, '"');
  let c = b.replace(/t"s/g, "t's");
  document.getElementById('task2').innerHTML = c.replace(/n"t/g, "n't");
}

check = function (form) {
  let name = form.name.value,
    phone = form.phone.value,
    email = form.email.value,
    text = form.text.value,
    namePattern = /^[а-яА-ЯёЁa-zA-Z]+$/,
    phonePattern = /^\+7\([0-9]{3}\)[0-9]{3}\-[0-9]{4}$/,
    emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    textPattern = /^.*$/,
    errorText = '';
  if (namePattern.test(name)) document.getElementById('name').style.border = '1px solid green';
  else {
    document.getElementById('name').style.border = '1px solid red';
    errorText += 'Имя должно содержать только буквы\n';
  }
  if (phonePattern.test(phone)) document.getElementById('phone').style.border = '1px solid green';
  else {
    document.getElementById('phone').style.border = '1px solid red';
    errorText += 'Телефон должен быть в формате +7(000)000-0000\n';
  }
  if (emailPattern.test(email)) document.getElementById('email').style.border = '1px solid green';
  else {
    document.getElementById('email').style.border = '1px solid red';
    errorText += 'Укажите корректный email\n';
  }
  if (textPattern.test('text')) document.getElementById('text').style.border = '1px solid green';
  else {
    document.getElementById('text').style.border = '1px solid red';
    errorText += 'Заполните поле текст произвольным текстом';
  }
  if (errorText != '') alert(errorText);
  else alert('Данные отправлены. Спасибо!')
}
