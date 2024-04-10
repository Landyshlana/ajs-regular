import Validator from '../app';

test('тестирование функции validateUsername', () => {
	const username = 'user1- name';
	expect(Validator.validateUsername(username)).toBeTruthy();
});

test.each([
	['user%name'],
	['user!name'],
	['user;name '],
	['user.name'],
	['user#name'],
	['user&name'],
	['1username%'],
	['-user-name '],
	['_user_name-'],
	['1user1name1'],
	['&username#']
])(
	('falsy'),
	(str) => {
		expect(Validator.validateUsername(str)).toBeFalsy();
	},
);
test('тестирование функции validateUsername', () => {
	const username = 'user1111name';
	expect(Validator.validateUsername(username)).toBeFalsy();
})