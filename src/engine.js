function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function getRandomIntArray(size, min, max) {
    var result = [];
    for (var i = 0; i < size; i++){
        result.push(getRandomInt(min, max));
    }
    return result;
}