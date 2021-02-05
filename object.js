const ironMan = {
  name: '토니 스타크',
  actor: '로버트 다우니 주니어',
  alias: '아이언맨'
}

function print(hero) {
  const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다!`
  console.log(text)

  // 비구조화 할당(객체 구조분해 문법)
  const { name, alias, actor } = hero
  const desc = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다!`
}

function print2({ name, alias, actor }) {
  const desc = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다!`
}

// 객체 안에 함수 넣기
const dog = {
  name: '멍멍이',
  sound: '멍멍!',
  say: function say() {
    console.log(this.sound) // this 는 function 이 속해있는 dog 객체
  },
  say2: function () {
    console.log(this.sound)
  }
  // 화살표함수는 작동하지 않음! this 를 가져올 수 없다
  // say3: () => {
  //   console.log(this.sound);
  // },
}

dog.say() // 멍멍!

const cat = {
  name: '야옹이',
  sound: '야옹~'
}

cat.say = dog.say
cat.say() // 야옹~

const catSay = cat.say
catSay() // this 가 없으니까 undefined. 만든 함수를 바깥으로 꺼내면 관계가 사라짐
