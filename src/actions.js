/*
Action creators
*/

export const login = (userId, token) => ({
	type: 'LOGIN',
	userId,
	token
})