function shuffle(nums: number[], n: number): number[] {
  const res: number[] = []
  for (let i = 0; i < n; i++) {
    res.push(nums[i])
    res.push(nums[n + i])
  }
  return res
}