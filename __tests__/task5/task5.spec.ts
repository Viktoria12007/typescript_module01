import * as task5 from '../../src/task5/task5';

describe('task6', () => {
    describe('task6# square and concatenate', () => {
        it('should return 0 from 0', () => {
            const res = task5.squareAndConcatenate(0);
            expect(res).toEqual(0);
        });

        it('should return 14 from 12', () => {
            const res = task5.squareAndConcatenate(12);
            expect(res).toEqual(14);
        });

        it('should return 811181 from 9119', () => {
            const res = task5.squareAndConcatenate(9119);
            expect(res).toEqual(811181);
        });

        it('should return 4364819168149 from 262934923', () => {
            const res = task5.squareAndConcatenate(262934923);
            expect(res).toEqual(4364819168149);
        });
    });
});
