const blog = require('../src/routes/blog.js');

test('Get with id that not exists', () => {
	expect(blog.get('-12')).toBe("This article does not exist");
});