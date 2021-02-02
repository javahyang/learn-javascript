const array = [1, 2, 3, 4, 5, 6, 7, 8]

// 배열 안의 숫자를 제곱하기
// 방법1.
const squared = []
for (let i = 0; i < array.length; i++) {
  squared.push(array[i] * array[i])
}

// 방법2.
array.forEach(n => {
  squared.push(n * n)
})

// 방법3.
// 제곱반환하는 함수
const square = n => n * n
// map : 배열안의 원소를 변환할 때
const squared = array.map(square)

// 방법3-1.
const squared = array.map(n => n * n)

console.log(squared)

const items = [
  {
    id: 1,
    text: 'hello'
  },
  {
    id: 2,
    text: 'bye'
  }
]

// 객체로 이루어진 배열을 text만 뽑은 배열로 반환
const texts = items.map(item => item.text)
console.log(texts)
