function split(wholeArray) {
    var firstHalf = wholeArray.slice(0, Math.floor(wholeArray.length / 2));
    var secondHalf = wholeArray.slice(Math.floor(wholeArray.length / 2));
    return [firstHalf, secondHalf];
}

function merge(firstArray, secondArray) {
    var returnedArray = [];

    while(firstArray.length && secondArray.length) {
        if (firstArray[0] > secondArray[0]) returnedArray.push(secondArray.shift());
        else if (firstArray[0] < secondArray[0]) returnedArray.push(firstArray.shift());
        else new Error("something is wrong");
    }

    return returnedArray.concat(firstArray).concat(secondArray);

}

function mergeSort(array) {
    if (array.length === 1) return array;
    else if (array.length === 2) return merge([array[0]], [array[1]]);
    return merge(mergeSort(split(array)[0]),mergeSort(split(array)[1]));
}