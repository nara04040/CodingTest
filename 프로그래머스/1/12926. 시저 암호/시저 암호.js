// 대소문자 구분
// 빈 칸 구분
// char에 맞는 index구분

function solution(s, n) {
    return s.split("").map(char => {
        if (char === " ") return " ";
        
        // 대문자만 취급하게
        const isUpperCase = char === char.toUpperCase();
        const charCode = char.charCodeAt(0);
        // charCodeAt : String 값에 주어진 인덱스의 UTF-16 코드 단위를 표현하는 0과 65535 사이의 정수를 반환합니다.
        // console.log(charCode)
        
        if (isUpperCase) {
            // fromCharCode : 메서드는 UTF-16 코드 유닛의 시퀀스로부터 문자열을 생성해 반환합니다
            // A.charCodeAt(0)은 65를 반환, a.charCodeAt(0)은 97를 반환
            // 즉 대문자면 65로 기본 계산 이후 26자 알파벳이후('z')일 떄 0으로 돌아가기위해서 26으로 나눈후 다시 65를 더해서 기본값을 맞춘다. 
            // console.log(String.fromCharCode((charCode - 65 + n) + 65))
            return String.fromCharCode((charCode - 65 + n) % 26 + 65);
        } else {
            // 소문자면 97를 기본 계산
            // console.log(String.fromCharCode((charCode - 97 + n) + 97))
            return String.fromCharCode((charCode - 97 + n) % 26 + 97);
        }
    }).join("");
}



// 정규표현식 알면 편할텐데..