// algorithm.js
// Задача №1006: известна денежная сумма. Разменять её купюрами
// 500, 100, 10 и монетой 2 руб., если это возможно.
// Идея: жадный размен от крупной купюры к мелкой,
// потом проверяем, делится ли остаток на 2.

let check = false; // размен удался? если да — можно отправлять форму

function verify() {
    // value у input — строка, parseInt переводит в целое число
    const sum = parseInt(document.getElementById("sum").value);

    if (isNaN(sum) || sum < 2) {
        document.getElementById("result").value = "Сумма слишком мала для размена";
        check = false;
        return;
    }

    // Math.floor округляет вниз: 11/2 = 5.5 -> 5 купюр, остаток берём через %
    const n500 = Math.floor(sum / 500);
    let rest = sum % 500;

    const n100 = Math.floor(rest / 100);
    rest = rest % 100;

    const n10 = Math.floor(rest / 10);
    rest = rest % 10;

    // осталось меньше 10 руб., монета только по 2 руб. —
    // значит остаток обязан быть чётным, иначе размен невозможен
    // (например, 11 руб. = 10 + 1, а монеты по 1 руб. у нас нет)
    if (rest % 2 !== 0) {
        document.getElementById("result").value =
            "Размен невозможен: остаток " + rest + " руб. не делится на 2";
        check = false;
        return;
    }
    const n2 = rest / 2;

    document.getElementById("result").value =
        "500 руб.: " + n500 + " шт., 100 руб.: " + n100 +
        " шт., 10 руб.: " + n10 + " шт., 2 руб.: " + n2 + " шт.";
    check = true;
}

function send() {
    if (check) {
        document.getElementById("UserEnter").submit();
    } else {
        alert("Сначала нажмите «Разменять» и добейтесь успешного результата");
    }
}

document.getElementById("verify").addEventListener("click", verify);
document.getElementById("send").addEventListener("click", send);
