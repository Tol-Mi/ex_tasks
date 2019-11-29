function deleteElement(list, elementIndex) {
    if(elementIndex == 0) {
        list[elementIndex + 1][1] = null;
    }
    else if(elementIndex == list.length - 1) {
        list[elementIndex - 1][2] = null;
    }
    else {
        list[elementIndex - 1][2] = list[elementIndex + 1][0];
        list[elementIndex + 1][1] = list[elementIndex - 1][0];
    }

    list.splice(elementIndex, 1);

    return list;
}

function addingElementToEnd(list, element) {
    list[list.length - 1][2] = element;
    list.push([element, list[list.length - 1][0], null]);
    return list;
}

// Значение, родитель, дочь
let bidirectionalList = [
    [6, null, 5],
    [5, 6, 1],
    [1, 5, 3],
    [3, 1, 2],
    [2, 3, null]
];

console.log(deleteElement(bidirectionalList, 1));

console.log(addingElementToEnd(bidirectionalList, 500));