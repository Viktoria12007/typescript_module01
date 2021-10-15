import * as task6 from '../../src/task6/task6';

describe('task6', () => {
    it('should return 0 from 0', () => {
        const res = task6.getDigitalRoot(0);
        expect(res).toEqual(0);
    });

    it('should return 1 from 1234', () => {
        const res = task6.getDigitalRoot(1234);
        expect(res).toEqual(1);
    });

    it('should return 9 from 9999', () => {
        const res = task6.getDigitalRoot(9999);
        expect(res).toEqual(9);
    });

    it('should return 3 from 24422412', () => {
        const res = task6.getDigitalRoot(24422412);
        expect(res).toEqual(3);
    });
});
