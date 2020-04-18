function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

console.log(findRandomElement([1,2,3]))
console.log(findRandomElement([1,2,3,5,6,7,7,8]))
console.log(findRandomElement([1,2,3,5,6,7,7,8,1,2,3,4,5,6,7,8,9]))

//constant time O(1) - single, simple output - instant results
