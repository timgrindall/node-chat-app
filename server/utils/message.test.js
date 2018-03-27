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
		lat = 100;
		lon = 19;
		url = 'https://www.google.com/maps?q=100,19';
		location = generateLocationMessage(from, lat, lon);

		expect(location.createdAt).toBeA('number');
		expect(location).toInclude({from, url});
	})
});