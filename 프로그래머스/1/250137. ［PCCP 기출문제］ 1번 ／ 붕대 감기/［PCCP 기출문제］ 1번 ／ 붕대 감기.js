function solution(bandage, health, attacks) {
 const [castTime, healPerSec, bonusHeal] = bandage;
    const maxHealth = health;
    const lastAttackTime = attacks[attacks.length - 1][0];
    
    // 공격 시간을 키로 하는 Map 생성
    const attackMap = new Map(attacks);
    
    let currentHealth = health;
    let consecutiveHealing = 0;
    
    // 첫 공격부터 마지막 공격까지 시뮬레이션
    for(let time = 0; time <= lastAttackTime; time++) {
        // 1. 공격이 있는 경우
        if(attackMap.has(time)) {
            currentHealth -= attackMap.get(time);
            consecutiveHealing = 0;  // 연속 성공 초기화
            
            // 체력이 0 이하면 사망
            if(currentHealth <= 0) return -1;
            continue;
        }
        
        // 2. 붕대 감기로 회복
        // 기본 회복
        currentHealth += healPerSec;
        consecutiveHealing++;
        
        // 연속 성공 보너스 체력 회복
        if(consecutiveHealing === castTime) {
            currentHealth += bonusHeal;
            consecutiveHealing = 0;  // 연속 성공 시간 초기화
        }
        
        // 최대 체력 제한
        currentHealth = Math.min(currentHealth, maxHealth);
    }
    
    return currentHealth;
    
}