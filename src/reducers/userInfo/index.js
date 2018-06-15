import { USER_INFO } from 'actions/actionsTypes';

export default userInfo = (state = {}, action) => {
	switch (action.type) {
		case USER_INFO:
			return Object.assign({} , state , {
				data : action.data
			})
		default:
			return state
	}
}