function solution(phone_number) {
 const length = phone_number.length;
    return "*".repeat(length - 4) + phone_number.slice(-4)
}