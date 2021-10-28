import * as task1 from '../../src/task1/task1';

export const mockActor = {
  name: 'Michael',
  firstName: 'Ivanov',
  country: 'Russia',
  city: 'Machachkala',
  hasOskar: false,
  filmsCount: 10,
  age: '14',
  languages: ['RU-ru', 'EN-us', 'TR-tr'],
};

describe('task1', () => {
  describe('task1#howOldWillBeActorAfterTwentyYears()', () => {
    it('should return 34 with given data', () => {
      const res = task1.howOldWillBeActorAfterTwentyYears(task1.actor);
      expect(res).toEqual(34);
    });

    it('type should be changed, but function not', () => {
      const res = task1.howOldWillBeActorAfterTwentyYears(mockActor);
      expect(res).toEqual(34);
    });
  });
});
