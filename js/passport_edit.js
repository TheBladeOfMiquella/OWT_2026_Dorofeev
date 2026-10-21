// passport_edit.js
// По клику на элемент с id="for_click" заменяем фамилию,
// имя и год рождения (кириллица) на латиницу

function change_to_latin() {
    // getElementById ищет элемент по id, как в <span id="last_name">
    const node_last_name = document.getElementById("last_name");
    // innerHTML — содержимое элемента, присваиваем новое значение
    node_last_name.innerHTML = "DOROFEEV";

    const node_first_name = document.getElementById("first_name");
    node_first_name.innerHTML = "ARSENII";

    const node_birth_year = document.getElementById("birth_year");
    node_birth_year.innerHTML = "2007";
}

// нашли абзац "КЛИКНИТЕ ЗДЕСЬ" и повесили на него обработчик клика
const node_for_click = document.getElementById("for_click");

// важно: имя функции без скобок — change_to_latin, а не change_to_latin(),
// иначе функция выполнилась бы сразу, а не по клику
node_for_click.addEventListener("click", change_to_latin);
