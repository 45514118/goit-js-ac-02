// Функция checkPassword получает пароль пользователя в параметр password,
// проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORDи возвращает сообщение о результате сравнения.
// Проведи рефакторинг кода функции checkPassword используя паттерн «ранний возврат»:
// удали переменную message
// удали else
// код должен работать так же, как и до оптимизации

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  if (password === ADMIN_PASSWORD) {
    return "Welcome!";
  }
  return "Access denied, wrong password!";
}
