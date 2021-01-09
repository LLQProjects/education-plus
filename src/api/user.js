/**
 * @description 用户相关的 请求API
 */
import { post, get } from '../utils/request'

/**
 * @description 用户登录
 * @param {Object} params 
 */
export async function login(params) {
    return await post('/api/login', params)
}

/**
 *
 */