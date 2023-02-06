function shuffle(nums: number[], n: number): number[] {
  let res: number[] = []
  const y: number[] = nums.splice(n)
  for (let i = 0; i < nums.length; i++) {
    res.push(nums[i])
    res.push(y[i])
  }
  return res
};