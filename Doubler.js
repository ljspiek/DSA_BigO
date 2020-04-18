function doubleArrayValues(array) {
    let double = array[0], ticks = 1
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
        ticks++;
    }
    return {
        result: double,
        ticks: ticks
    }
}

console.log(doubleArrayValues([1,2,3,4,5,6,7,8,9,10]))
console.log(doubleArrayValues([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6]))
console.log(doubleArrayValues([1,2,3,4,1,2,3,4,5,6,7,8,9,0,2,1,2,3,4,5,6,6,7,8]))

//Linear O(n) - one result per iteration