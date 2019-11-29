function ascSorted(list) {
    let sorted = false;
    for(let i = 0; i < list.length - 1; i++) {
        if(list[i][0] <= list[i + 1][0]) {
            sorted = true;
        }
        else {
            sorted = false;
            break;
        }
    }
    return sorted;
}

function descSorted(list) {
    let sorted = false;
    for(let i = 0; i < list.length - 1; i++) {
        if(list[i][0] >= list[i + 1][0]) {
            sorted = true;
        }
        else {
            sorted = false;
            break;
        }
    }
    return sorted;
}

// Элемент, родитель, дочь
let list = [
    [6, null, 5],
    [5, 6, 1],
    [1, 5, 3],
    [3, 1, 2],
    [2, 3, null]
];

if(ascSorted(list) == true || descSorted(list) == true) {
    console.log('Список отсортирован');
}
else {
    console.log('Список не отсортирован');
}
