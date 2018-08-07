const loginReducer = (state = [], action) => {
	switch (action.type) {
		case 'LOGIN':
			return {
				userId: action.userId,
				token: action.token
			};
		default:
			return state;
	}
}

export default loginReducer;
