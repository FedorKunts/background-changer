const button = document.getElementById('btn'); // находим кнопку по айдишке
const color = document.querySelector('.color');  //ловим по классу color чтобы менять цвет текста

const hex = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'
]; // 0-9 А-F из этого состоят цвета в хекс формате

button.addEventListener('click', () => {  //вешаем слушателся на кнопку, на действие КЛИК(1 параметр) будет выполняться
    let hexColor = generateHex();                       // создаем переменную
    document.body.style.backgroundColor = hexColor;     //обращаемся к документу чтобы менять цвет фона
    color.textContent = hexColor;                     //тут меняем  названия цвета 
});

function getRandomNumber() {               //чтобы получить случайное число из массива, умнажаем рандомное число на длинну массива
    return Math.floor(Math.random() * hex.length);  // и округляем его в меньшую сторону
};

function generateHex() {                 //функция генерирующая случайное число
    let hexColor = '#';                  //переменна т.к с решетки начинается название цвета
    for (let i = 0; i < 6; i++) {             //цикл которые повторяется 6 раз и наполняет переменную
        hexColor += hex[getRandomNumber()]             //добавляем к решетки числа
    }
    return hexColor;
}