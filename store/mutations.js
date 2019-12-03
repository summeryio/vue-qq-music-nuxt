import * as types from './mutation-types'

const mutations = {
  // 歌单
  [types.SET_PLAYLISTY_SELECTED_TAG](state, text) {
    state.playlistSelectedTag = text
  },
  [types.SET_PLAYLISTY_ORDER](state, str) {
    state.playlistOrder = str
  },

  // MV
  [types.SET_MV_AREA_TAG](state, str) {
    state.mv = {...state.mv, areaTag: str}
  },
  [types.SET_MV_TYPE_TAG](state, str) {
    state.mv = {...state.mv, typeTag: str}
  },
  [types.SET_MV_ORDER](state, str) {
    state.mv = {...state.mv, order: str}
  },
}

export default mutations