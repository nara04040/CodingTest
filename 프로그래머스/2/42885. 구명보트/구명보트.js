function solution(people, limit) {
  people.sort((a,b) => a - b); 

  let boatCount = 0;
  let left = 0; 
  let right = people.length - 1;

  while(left <= right) {
    boatCount++; 

    if (left !== right && people[left] + people[right] <= limit) {
      left++;
    }

    right--;
  }
  return boatCount;
}