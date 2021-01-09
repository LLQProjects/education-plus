/**
 * @description 系统相关 API：校区列表，创建校区等。
 */
import { post, get } from '../utils/request'
/**
 * @description 获取校区列表
 */
export async function getCampusList() {
    return await get('/api/campus/list')
}