// Для того, чтобы запустить код выполните "npm run task3"
// Для того, чтобы запустить тесты выполните "npm run test:task3"

// Первая часть кода:

function someFunc1(data: any) {
    return data.reduce((acc: any, current: any) => {
        return acc + Number(current.age > 18 && current.isMale)
    }, 0);
}

// Вторая часть кода:

type Human = {
    name: string,
    age: number,
    gender: 'male' | 'female',
}

function someFunc2(data: Human[]): number {
    return data.reduce((acc: number, current: Human) => {
        return acc + Number(current.age > 18 && current.gender === 'male')
    }, 0);
}
