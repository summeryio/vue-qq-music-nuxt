import * as types from './mutation-types'

const mutations = {
  [types.SET_PLAYLISTY_SELECTED_TAG](state, text) {
    state.playlistSelectedTag = text
  },
  [types.SET_PLAYLISTY_ORDER](state, str) {
    state.playlistOrder = str
  },
}

export default mutations