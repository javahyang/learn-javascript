const array = [{ id: 'abc' }, { id: 'cfg' }, { id: 'abc' }]

// reduce
array.recude((acc, current) => {
  if (acc.findIndex(id => id === current.id) === -1) {
    acc.push(current)
  }
  return acc
}, [])

// filter1
array.filter((item, i) => {
  return (
    array.findIndex((item2, j) => {
      return item.id === item2.id
    }) === i
  )
})

// filter2
array.filter((item, i, callback) => i === callback.findIndex(item2 => item2.id === item.id))

const numbers = [1, 3, 4, 2, 1, 6, 4, 7]
// filter3
numbers.filter((item, idx, callback) => idx === callback.indexOf(item))

// new Set()
[...new Set(array.map(JSON.stringify))].map(JSON.parse)

// object의 속성이 1개 있을때 또는 object의 값이 완전히 같은 것을 제거할 때만 new Set()

Array.from(new Set(numbers))