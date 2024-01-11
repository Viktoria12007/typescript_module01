// Для того, чтобы запустить код выполните "npm run task5"
// Для того, чтобы запустить тесты выполните "npm run test:task5"

export function squareAndConcatenate(number: number): number {
    if (number <= 1) {
        return number;
    }
    return +number.toString().split('').map((item) => (+item) ** 2).join('');
}
