const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

// concat: 여러개의 배열을 하나의 배열로 합침. 기존 배열 건드리지 않고 새로운 배열 만듦.
const concated = arr1.concat(arr2)
console.log(concated) // [1, 2, 3, 4, 5, 6]

// spread 연산자(...)
const concated = [...arr1, ...arr2]
console.log(concated) // [1, 2, 3, 4, 5, 6]

// join : 배열 안의 값들을 문자열로 변환할 때
const array = [1, 2, 3, 4, 5]
console.log(array.join()) // 1,2,3,4,5
console.log(array.join(' ')) // 1 2 3 4 5
