const superHeroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터스트레인지']

// 배열의 모든 원소 출력하기
// 방법1.
for (let i = 0; i < superHeroes.length; i++) {
  console.log(superHeroes[i])
}

// 방법2.
function print(hero) {
  console.log(hero)
}
// forEach문 : 배열의 원소로 일괄작업을 하고 싶을 때
superHeroes.forEach(print(hero))

// 방법3.
superHeroes.forEach(function print(hero) {
  console.log(hero)
})

// 방법4.
superHeroes.forEach(hero => {
  console.log(hero)
})
