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


export const howOldWillBeActorAfterTwentyYears = (actor: any) => {
    return actor.age + 20;
}

console.log(howOldWillBeActorAfterTwentyYears(actor));
