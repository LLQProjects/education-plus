/**
 * @description 用户相关的 请求API
 */
import { post, get } from '../utils/request'

export async function login() {
    await post('/api/login', params)
}