type Fruits = Map<number, number>

function totalFruit(fruits: number[]): number {
  const basket: Fruits = new Map()
  let max: number = 0
  let left: number = 0
  for (let right = 0; right < fruits.length; right++) {
    basket.set(fruits[right], (basket.get(fruits[right]) ?? 0) + 1)
    while (basket.size > 2) {
      basket.set(fruits[left], (basket.get(fruits[left]) ?? 1) - 1)
      if (basket.get(fruits[left]) == 0) {
        basket.delete(fruits[left])
      }
      left++
    }
    max = Math.max(max, right - left + 1)
  }
  return max
}

//console.log(totalFruit([0,1,6,6,4,4,6])) //5
//console.log(totalFruit([1,2,1])) //3
//console.log(totalFruit([3,3,3,1,2,1,1,2,3,3,4])) //5