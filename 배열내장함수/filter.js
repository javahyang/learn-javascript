// filter : 특정 조건에 맞는 배열을 찾아서 새로운 배열로 만듦

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

// 기존 배열은 건드리지 않고 조건에 맞는 새로운 배열 생성
const tasksNotDone = todos.filter(todo => !todo.done)
console.log(tasksNotDone)
