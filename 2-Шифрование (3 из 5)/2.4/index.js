let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let square = [];
const CRYPTO = "VDOKRRVVZKOTUIIMNUUVRGFQKTOGNXVHOPGRPEVWVZYYOWKMOCZMBR";
const KEY = "VIGENERE";

function repeatString(firstString, secondString) {
    let resultString = "";
    // Длина финальной строки
    let firstStringLength = firstString.length;
    let it = 0;
    for (let i = 0; i < secondString.length; i++) {
        if (i % firstStringLength === 0) {
            it = 0;
        }
        resultString += firstString[it];
        it++;
    }
    return resultString;
}

// Генерируем квадрат Виженера
function generateSquare() {
    for (let i = 0; i < alphabet.length; i++) {
        let row = alphabet.slice(i);
        row += alphabet.slice(0, i);
        square.push(row);
    }
}
function getSquare() {
    return square;
}
function encrypt(message, key) {
    let encryptMessage = "";
    // Дублируем ключ до длины сообщения
    let newKey = repeatString(key, message);
    // Генерируем квадрат Виженера
    this.generateSquare();
    for (let it = 0; it < message.length; it++) {
        // Индекс строки раный символу сообщения
        let i = alphabet.indexOf(message[it]);
        // Индекс колонки раный символу ключа
        let j = alphabet.indexOf(newKey[it]);
        // Зашифрованный символ равный пересечению индекса строки и колонки
        encryptMessage += square[i][j];
    }
    return encryptMessage;
}
function decrypt(message, key) {
    let decryptMessage = "";
    let newKey = repeatString(key, message);
    this.generateSquare();
    for (let it = 0; it < message.length; it++) {
        // Берем символ ключа и ищем индекс строки с данным символом
        let i = alphabet.indexOf(newKey[it]);
        let j = square[i].indexOf(message[it]);
        decryptMessage += alphabet[j];
    }
    return decryptMessage;
}

document.writeln(`криптограмма ${CRYPTO}</br>`);
document.writeln(`ключ ${KEY}</br>`);
document.writeln(`ответ ${this.decrypt(CRYPTO,KEY)}`);
