import request from './http'
import {get} from './http2'

/**
 * 获取博客详情
 * @param id 博客ID
 */
export function getBanner() {
  return request({
    url: '/banner',
    method: 'get'
  })
}


export const getBanner2 = () => get('/banner')