const numbers = [10, 20, 30, 40]

// splice : 배열에서 특정항목을 제거할 때
const index = numbers.indexOf(30)
console.log(index)
const spliced = numbers.splice(index, 2) // index 위치부터 2개를 지우겠다
console.log(spliced) // [30, 40]
console.log(numbers) // [10, 20]

// slice : 기존 배열을 건드리지 않는다
const sliced = numbers.slice(0, 2) // 시작인덱스부터 끝 인덱스 전까지 자른다
console.log(spliced) // [10, 20]
console.log(numbers) // [10, 20, 30, 40]
