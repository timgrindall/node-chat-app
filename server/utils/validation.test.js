const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
	it('should reject non-string values', () => {
		expect(isRealString(0)).toBe(false);
	});

	it('should reject strings with only spaces', () => {
		expect(isRealString('   ')).toBe(false);
	});

	it('should allow strings with non-space characters', () => {
		expect(isRealString('  Room  ')).toBe(true);
	});
});
