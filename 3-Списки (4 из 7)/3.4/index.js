// двунаправленный список
// Элемент, родитель, дочь
let bidirectionalList = [ 
    [1, null, 10], 
    [10, 1, 20], 
    [20, 10, null], 
]; 
 
console.log(bidirectionalList); // этот массив надо расскрыть за 3 секунды (если вы не в Edge или IE) 
 
let desiredPosition = 1; // ожидаемая позиция нового элемента 
let desiredValue = 15; // ожидаемое значение нового элемента 
 
if(desiredPosition > 0 && desiredPosition < bidirectionalList.length) { 
    setTimeout(function() { 
        for(let i = bidirectionalList.length; i >= desiredPosition; i--) { 
            bidirectionalList[i] = bidirectionalList[i - 1]; 
        } 
        bidirectionalList[desiredPosition + 1][1] = desiredValue; // задаем следующему элементу дочь 
        bidirectionalList[desiredPosition - 1][2] = desiredValue; // задаем предыдущему элементу родителя 
        bidirectionalList[desiredPosition] = [desiredValue, bidirectionalList[desiredPosition - 1][0], bidirectionalList[desiredPosition + 1][0]]; // вставляем сам элемент 
 
        console.log(bidirectionalList); 
    }, 3000); 
}