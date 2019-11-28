function bogoSort(arr) {
    function isSorted(arr) {
        for(let i = 1; i < arr.length; i++) {
            if(arr[i - 1] > arr[i]) {
                return false;
            }
        }
        return true;
    }

    function shuffle(arr) {
        let count = arr.length, temp, index;

        while(count > 0) {
            index = Math.floor(Math.random() * count);
            count--;

            temp = arr[count];
            arr[count] = arr[index];
            arr[index] = temp;
        }

        return arr;
    }

   function sort(arr) {
        let sorted = false;
        while(!sorted) {
            arr = shuffle(arr);
            sorted = isSorted(arr);
        }

        return arr;
    }

    return sort(arr);
}

let arr = [1, 9, 2, 3, 7, 6, 4, 5, 5];

console.log(bogoSort(arr));