const numbers = [10, 20, 30, 40, 50]

for (let number of numbers) {
  console.log(number)
  // 배열의 각 값들 출력
  // for-of문 : 배열의 값들로 작업할 때 이용(일반 for문과 같은 결과값 출력)
}

// for-in 문 : 객체에 대한 반복적인 작업을 처리할 때 이용

// 객체 정보를 배열형태로 받아오는 방법!
const doggy = {
  name: '멍멍이',
  sound: '멍멍',
  age: 2
}

console.log(Object.entries(doggy))
// 오브젝트의 각 key-value 를 배열형태로 반환
// [["name", "멍멍이"], ["sound", "멍멍"], ["age", 2]]

console.log(Object.keys(doggy))
// 오브젝트의 key 를 배열로 받음
// ["name", "sound", "age"]

console.log(Object.values(doggy))
// 오브젝트의 value 를 배열로 받음
// ["멍멍이", "멍멍", 2]

for (let key in doggy) {
  console.log(key) // 오브젝트의 key 만 출력
  console.log(`${key}: ${doggy[key]}`) // 템플릿 리터럴을 사용해 key: value 형태로 출력
}
