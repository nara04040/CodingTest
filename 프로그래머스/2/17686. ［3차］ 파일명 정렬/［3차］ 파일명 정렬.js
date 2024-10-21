function solution(files) {
    return files.sort((a, b) => {
        const [aHead, aNumber] = splitFileName(a);
        const [bHead, bNumber] = splitFileName(b);
        
        const headCompare = aHead.localeCompare(bHead);
        if (headCompare !== 0) return headCompare;
        
        return parseInt(aNumber) - parseInt(bNumber);
    });
}

function splitFileName(fileName) {
    const match = fileName.match(/^([a-zA-Z-\s.]+)(\d{1,5})/i);
    return [match[1].toLowerCase(), match[2]];
}