const superHeroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터스트레인지']

// 배열에서 원하는 원소 위치 구하기
// 특정조건으로 찾을때는 indexOf 로 불가
// 특정값과 일치하는 것 찾을때
const index = superHeroes.indexOf('토르')

const todos = [
  {
    id: 1,
    text: '자바스크립트 입문',
    done: true
  },
  {
    id: 2,
    text: '함수 배우기',
    done: true
  },
  {
    id: 3,
    text: '객체와 배열 배우기',
    done: true
  },
  {
    id: 4,
    text: '배열 내장함수 배우기',
    done: false
  }
]

// findIndex : 배열 내용이 객체이거나 특정조건으로 찾을 때. 조건에 맞는 인덱스 반환. 가장 첫번째로 찾은 인덱스만 반환!!
const index = todos.findIndex(todo => todo.id === 3)
console.log(index)

// find: 조건에 맞는 객체 반환. 가장 첫번째로 찾은 항목만 반환!!
const todo = todos.find(todo => todo.done === false)
console.log(todo)
