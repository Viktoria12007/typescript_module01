import * as task4 from '../../src/task4/task4';

describe('task4', () => {
    describe('task4# reverse words', () => {
        it('should return empty string from empty string', () => {
            const res = task4.reverseWords('');
            expect(res).toEqual('');
        });

        it('should return reversed words string from string', () => {
            const res = task4.reverseWords('раз два три четыре пять');
            expect(res).toEqual('зар авд ирт ерытеч ьтяп');
        });

        it('should return reversed word string from single word', () => {
            const res = task4.reverseWords('раз');
            expect(res).toEqual('зар');
        });
    });
});
