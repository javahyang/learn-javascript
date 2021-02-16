const numbers = [10, 20, 30, 40]

// <원소 추출>
// shift: 배열의 첫 번째 원소 추출. 기존 배열 수정!
const value = numbers.shift()
console.log(value) // 10
console.log(numbers) // [20, 30, 40]

// pop: 배열의 마지막 원소 추출. 기존 배열 수정!
const value = numbers.pop()
console.log(value) // 40
console.log(numbers) // [10, 20, 30]

// <원소 추가>
// unshift: 배열의 첫 번째 원소 추가
numbers.unshift(5)
console.log(numbers) // [5, 10, 20, 30, 40]

// push: 배열의 마지막 원소 추가
numbers.push(50)
console.log(numbers) // [10, 20, 30, 40, 50]
