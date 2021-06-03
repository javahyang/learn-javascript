const type = ['txt', 'jpg', 'jpeg', 'gif'];

// 값 하나 확인
console.log(type.includes('txt')); //true

const checkArr = ['txt', 'png'];
// 값 여러개 확인. checkArr 의 여러개 중 하나라도 포함일 때 true
console.log(type.some(i => checkArr.includes(i))); // true