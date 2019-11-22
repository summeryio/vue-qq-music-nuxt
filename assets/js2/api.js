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
export const getHomePlaylist = (tag) => {
  let _tag = tag || '全部'

  return get(`/top/playlist?limit=${15}`)
}


export const getBanner2 = () => get('/banner')