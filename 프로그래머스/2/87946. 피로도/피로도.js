// 시작 : 최소필요피로도 - 던전 탐험하기 위해 있어야하는 최소 
// 탐험 마침 : 소모피로도 - 던점 이후 소모되는 피로도
// 예) 최소필요피로도 80, 소모 필요도 20 던전 갈려면 유저는 남은 피로도고 80이상 | 탐험한 후에는 피로도 20소모
// k = 유저 현재 피로도, dungeons = 최소필요피로도, 소모 피로도 (2차원배열)
// return 탐험할 수있는 최대 던전 수
function solution(k, dungeons) {
     let maxDungeons = 0;
    const visited = new Array(dungeons.length).fill(false);
    
    const explore = (fatigue, count) => {
        maxDungeons = Math.max(maxDungeons, count);
        
        for(let i = 0; i < dungeons.length; i++){
            //방문 X , 피로도 있음
            if(!visited[i] && dungeons[i][0] <= fatigue) {
                visited[i] = true; // 방문함!
                // 다음 던전으로 감 (피로도 감소, 카운팅)
                explore(fatigue - dungeons[i][1], count + 1);
                visited[i] = false // 방문표시제거
            }
        }
    }
    
    explore(k,0);
    
    return maxDungeons
}