import {get, post} from './http'
import {getRandomNum} from './util'




// 顶部导航搜索框
export const getSearchHot = () => get('/search/hot/detail')
export const getSearchSuggest = (val) => get(`/search/suggest?keywords=${val}`)


// 首页
export const getHomePlaylist = (tag) => get(`/top/playlist?limit=${15}&cat=${tag}`)
export const getHomePlaylistTag = () => get('/playlist/hot')
export const getHomeAlbum = () => get('/album/newest')
export const getNewSong = (tag) => get(`/top/song?type=${tag}`)
export const getHomeBanner = () => get('/banner')
export const getHomeMV = (tag) => get(`/mv/first?limit=20&area=${tag}`)