function bubbleSort(arr) {
    var swap = true;
    var holding;
    while (swap) {
        swap = false;
        for (var i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i+1]) {
                swap = true;
                holding = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = holding;
            } 
        }
    }
    return arr;
}
