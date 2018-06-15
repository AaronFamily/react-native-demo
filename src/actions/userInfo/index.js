import { USER_INFO } from '../actionsTypes';

// 添加用户数据
export const addBanner = (data) => {
	return {
		type: USER_INFO,
		data
	}
}
