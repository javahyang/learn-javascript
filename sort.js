var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

// value 기준으로 정렬
// 오름차순 버전1.
items.sort((a, b) => {
  if (a.value > b.value) return 1; // 앞의 값이 크면 뒤로(1) 오름차순 정렬
  if (a.value < b.value) return -1; // 앞의 값이 작으면 맨 앞으로(-1)
  return 0; // 같으면 중간에(0)
});
// 오름차순 버전2.
items.sort((a,b) => a - b);

// 내림차순 버전1.
items.sort((a,b) => {
  if (a.value > b.value) return -1; // 앞의 값이 크면 맨 앞으로(-1) 내림차순 정렬
  if (a.value < b.value) return 1; // 작은 값은 맨 뒤로
  return 0; // 같으면 중간에(0)
})
// 내림차순 버전2.
items.sort((a,b) => b - a);

console.log(items);