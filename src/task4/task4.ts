// Для того, чтобы запустить код выполните "npm run task4"
// Для того, чтобы запустить тесты выполните "npm run test:task4"

export function reverseWords(text: string): string {
    const arrWords = text.split(' ');
    return  arrWords.map((item) => item.split('').reverse().join('')).join(' ');
}
