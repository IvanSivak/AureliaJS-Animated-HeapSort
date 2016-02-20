/**
 * Private methods
 */

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function iParent(index) {
    return Math.floor((index-1) / 2);
}

function iLeftChild(index) {
    return 2 * index + 1;
}

function iRightChild(index) {
    return 2 * index + 2;
}

function swapElements(array, a, b) {
    var tempVal = array[a].val;
        //tempStyle = array[a].style;
        
    array[a].val = array[b].val;
    //array[a].style = array[b].style;
    array[b].val = tempVal;
    //array[b].style = tempStyle;
}

function heapify(array) {
    var count = array.length,
        start = iParent(count - 1);
        
    while (start >= 0){
        siftDown(array, start, count - 1);
        start--;
    }
}

function siftDown(array, start, end) {
    var root = start,
        child,
        swap;
        
    while (iLeftChild(root) <= end){
        child = iLeftChild(root);
        swap = root;
        
        if (array[swap].val < array[child].val) swap = child;
        if (child + 1 <= end && array[swap].val < array[child + 1].val) swap = child + 1;
        
        if (swap == root){
            break;
        } else {
            swapElements(array, root, swap);
            root = swap;
        }
    }
}
/**
 * Public methods
 */

export function getRandomIntArray(size, min, max) {
    var result = [];
    for (var i = 0; i < size; i++){
        result.push(getRandomInt(min, max));
    }
    return result;
}

export function heapSort(array) {
    var count = array.length,
        end = count - 1;
    
    heapify(array);
    
    while (end > 0) {
        swapElements(array, end, 0);
        end--;
        siftDown(array, 0, end);
    }
}