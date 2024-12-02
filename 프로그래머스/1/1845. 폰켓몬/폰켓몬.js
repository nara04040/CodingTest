function solution(nums) {
    const selectCount = nums.length/2;
    
    const poketmonTypes = new Set(nums).size;
    
    return Math.min(selectCount, poketmonTypes);
}