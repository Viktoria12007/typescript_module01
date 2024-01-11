// Для того, чтобы запустить код выполните "npm run task6"
// Для того, чтобы запустить тесты выполните "npm run test:task6"

export function getDigitalRoot(number: number): number {
    if (number <= 9) {
        return number;
    }
    return getDigitalRoot(number.toString().split('').reduce((acc, item) => acc + (+item), 0));
}
