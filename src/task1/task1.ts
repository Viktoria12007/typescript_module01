// Для того, чтобы запустить код выполните "npm run task1"
// Для того, чтобы запустить тесты выполните "npm run test:task1"

export const actor = {
    name: 'Michael',
    firstName: 'Ivanov',
    country: 'Russia',
    city: 'Machachkala',
    hasOskar: false,
    filmsCount: 10,
    age: '14',
    languages: ['RU-ru', 'EN-us', 'TR-tr'],
};

interface IActor {
    name: string,
    firstName: string,
    country: string,
    city: string,
    hasOskar: boolean,
    filmsCount: number,
    age: string,
    languages: string[],
}

export const howOldWillBeActorAfterTwentyYears = (actor: IActor): number => {
    return Number(actor.age) + 20;
}

console.log(howOldWillBeActorAfterTwentyYears(actor));

// Ошибка заключалась в том, что конфигурация TypeScript не позволяет прописывать тип any.
// Вместо any был присвоен интерфейс описывающий структуру объекта actor.
