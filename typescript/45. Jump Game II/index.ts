
function jump(nums: number[]): number {
  let answer = 0, curEnd = 0, curFar = 0
  for (let i = 0; i < nums.length - 1; ++i) {
    curFar = Math.max(curFar, i + nums[i]);
    if (i === curEnd) {
      answer++
      curEnd = curFar
    }
  }
  return answer
}

console.log(jump([2, 3, 1, 1, 4])) //2
console.log("\n---\n")
console.log(jump([2, 3, 0, 1, 4])) //2
console.log("\n---\n")
console.log(jump([0])) //0
console.log("\n---\n")
console.log(jump([1])) //0
console.log("\n---\n")
console.log(jump([2, 1])) //1