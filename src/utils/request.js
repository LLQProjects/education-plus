/**
 * @description 封装axios的请求：post，get
 * @author LLQ
 */
import axios from 'axios';
import { getStorage } from './storage.js'
const token = getStorage('token')
if (token) {
    axios.defaults.headers['token'] = token
}
/**
 * @description POST请求
 * @param {String} url 请求地址
 * @param {Object} params 请求体
 * @param {Object} headers 请求头
 */
export function post(url, params, headers) {
    const promise = new Promise((resolve, reject) => {
        axios.post(url, params, headers).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    });
    return promise
}

/**
 * @description get请求
 * @param {String} url 请求地址
 * @param {Object} params url参数
 * @param {Object} headers 请求头
 */
export function get(url, params, headers) {
    const promise = new Promise((resolve, reject) => {
        axios.get(url, params, headers).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
    return promise
}
