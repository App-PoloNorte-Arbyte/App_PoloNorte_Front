export default function reducer(store = { user: {}, equipment: {} }, action) {
	switch (action.type) {
		case 'LOGIN':
			return { ...store, user: action.user }
		case 'GET_EQUIPMENT':
			return { ...store, equipment: { ...action.equipment} }
		default:
			return store
	}
}

