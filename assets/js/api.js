import {get, post} from './http'
import {getRandomNum} from './util'




// 顶部导航搜索框
export const getSearchHot = () => get('/search/hot/detail')
export const getSearchSuggest = (val) => get(`/search/suggest?keywords=${val}`)


// 首页
export const getHomePlaylist = (tag) => {
    let _tag = tag || '全部'

    return get(`/top/playlist?limit=${15}&cat=${encodeURIComponent(_tag)}`)
}
export const getHomePlaylistTag = () => get('/playlist/hot')
export const getHomeAlbum = () => get('/album/newest')
export const getHomeNewSong = (tag) => {
    let _tag = tag || 0
    
    return get(`/top/song?type=${_tag}`)
}
export const getHomeBanner = () => get('/banner')
export const getHomeMV = (tag) => {
    let _tag = tag ? encodeURIComponent(tag) : ''
    
    return get(`/mv/first?limit=20&area=${_tag}`)
}


// 新碟上架
export const getAlbum = (page = 1, pageSize = 20) => {
    return get(`/top/album?offset=${(page - 1) * pageSize}&limit=${pageSize}`)
}

// 歌单
export const getPlaylistTag = () => get(`/playlist/catlist`)
export const getPlaylist = (tag, page, pageSize) => {
    let _tag = tag ? encodeURIComponent(tag) : encodeURIComponent('全部')
    let _page = page || 1
    let _pageSize = pageSize || 20
    
    return get(`/top/playlist?offset=${(_page - 1) * _pageSize}&limit=${_pageSize}&cat=${_tag}`)
}