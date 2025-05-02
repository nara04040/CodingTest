const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => { // 함수 선언 문법 수정
  const lines = input.trim().split('\n'); // trim() 메소드 호출 추가
  let isFirstCase = true;

  // test case 처리
  for (const line of lines) {
    const numbers = line.split(' ').map(Number);

    // 종료조건 : 0이 입력되면 종료
    if (numbers[0] === 0) break;

    // test case사이에 빈 줄 출력하기 (단, 첫 번째 케이스는 제외)
    if(!isFirstCase) { // isFirstCase로 변수명 수정
      console.log();
    } else {
      isFirstCase = false;
    }

    // 집합 S에서 6개를 선택하는 모든 조합 생성, 출력
    dfs(numbers.slice(1), [], 0, 6);
  }
};

// DFS 조합 생성 및 출력하기
const dfs = (set, current, start, target) => {
  // 6개가 선택된 경우 출력하기
  if (current.length === target) {
    console.log(current.join(' '));
    return;
  }

  // 가능한 모든 선택지에 대한 재귀 호출
  for(let i = start; i < set.length; i++) {
    current.push(set[i]); // 현재 숫자를 선택한다.
    dfs(set, current, i + 1, target); // 다음 숫자 선택을 위해 재귀 호출
    current.pop(); // 백트래킹
  }
};

solution(input);