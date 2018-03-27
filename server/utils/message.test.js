var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate correct message object', () => {
		from = 'Tim';
		text = 'Some message';
		message = generateMessage(from, text);

		expect(message.from).toBe(from);
		expect(message.text).toBe(text);
		expect(message.createdAt).toBeA('number');
	});
});

describe('generateLocationMessage', () => {
	it('should generate correct location object', () => {
		from = 'Admin';
		lat = 1;
		lon = 1;
		location = generateLocationMessage(from, lat, lon);

		expect(location).toInclude({
			from: from,
			url: `https://www.google.com/maps?q=${lat},${lon}`
		});
		expect(location.createdAt).toBeA('number');
	})
});