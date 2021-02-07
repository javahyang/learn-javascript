// reduce: 배열 안에 있는 모든 값들을 사용해 연산해야할 때

const numbers = [1, 2, 3, 4, 5]

// 배열의 총합 구하기
// 방법1.
let sum = 0
numbers.forEach(n => {
  sum += n
})

// 방법2.
// 첫번째 파라미터 : 누적된 값을 계산하는 함수. 두 개의 인자 있음
// 두번째 파라미터 : 함수의 첫 번째 인자인 누적값 accumulator 의 초기값
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0)

// index: current 의 인덱스값
// array: numbers 배열 자체
const avg = numbers.reduce((acc, current, index, array) => {
  if (index === array.length - 1) {
    return (acc + current) / array.length // 마지막 원소일 때 평균값 구하고 끝.
  }
  return acc + current // 배열의 원소들을 다 더하고
}, 0)

const alphabets = ['a', 'a', 'a', 'b', 'c', 'c', 'd', 'e']

// 각 알파벳이 배열에 몇 개씩 있는지 세기
const counts = alphabets.reduce((acc, current) => {
  if (acc[current]) {
    acc[current] += 1
  } else {
    acc[current] = 1
  }
  return acc
}, {})

console.log(counts) // {a: 3, b: 1, c: 2, d: 1, e: 1}

// 최소값 , 최대값
const a = [10, 20, 30, 1, 2, 3, 5, 9, 11]
const max = a.reduce((acc, current) => {
  if (current < acc) {
    return acc
  } else return current
})
console.log(max)

const mini = a.reduce((acc, current) => (acc < current ? acc : current))
console.log(mini)

// 비동기 프로그래밍
const promiseFactory = time => {
  return new Promise((resolve, reject) => {
    console.log(time)
    setTimeout(resolve, time)
  })
}
;[1000, 2000, 3000, 4000].reduce((acc, cur) => {
  return acc.then(() => promiseFactory(cur))
}, Promise.resolve())
