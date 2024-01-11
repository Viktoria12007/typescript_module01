// Для того, чтобы запустить код выполните "npm run task3"
// Для того, чтобы запустить тесты выполните "npm run test:task3"

// Первая часть кода:

function someFunc1(data: Human[]): number {
    return data.reduce((acc: number, current: Human) => {
        return acc + Number(current.age > 18 && current.isMale)
    }, 0);
}

// Вторая часть кода:

type Human = {
    name: string,
    age: number,
    gender: 'male' | 'female',
    isMale: boolean,
}

function someFunc2(data: Human[]): number {
    return data.reduce((acc: number, current: Human) => {
        return acc + Number(current.age > 18 && current.gender === 'male')
    }, 0);
}

// Обе делают одно и то же. Они высчитывают сколько объектов, со свойством age > 18
// и у кого свойство gender === 'male' или свойство isMale === true, присутствуют в массиве
