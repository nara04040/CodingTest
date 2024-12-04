function solution(participant, completion) {
    const playerMap = new Map();
    
    for(const player of participant) {
        playerMap.set(player, (playerMap.get(player) || 0) + 1);
    }
    
    
    for(const player of completion) {
        playerMap.set(player, playerMap.get(player) - 1);
        
        if(playerMap.get(player) === 0) {
            playerMap.delete(player);
        }
    }
    
    return [...playerMap.keys()][0];
}