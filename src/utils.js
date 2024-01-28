export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

//Получаем выделенный текст
export function selection() {
  return window.getSelection().toString();
}

//Проверяем, что элемент текстовое поле
export function activeInput(event) {
  const element = event.target.closest('.text_input');
  if (element) {
    return element;
  }
}
