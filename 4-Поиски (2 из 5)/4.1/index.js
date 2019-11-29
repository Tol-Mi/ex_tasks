function linearSearch(array, element) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] == element) {
            return 'Элемент найден на ' + i + ' позиции массива';
        }
    }
    return 'Элемент не найден';
}

let array = ['1', '2', '3', '4', '5'];
let element = '3';

alert(linearSearch(array, element));