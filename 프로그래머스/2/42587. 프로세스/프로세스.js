function solution(priorities, location) {
    let queue = priorities.map((priority, index) => ({priority, index}));
    let count = 0;
    
    while (queue.length > 0) {
        let current = queue.shift();
        if (queue.some(item => item.priority > current.priority)) {
            queue.push(current);
        } else {
            count++;
            if (current.index === location) {
                return count;
            }
        }
    }
}