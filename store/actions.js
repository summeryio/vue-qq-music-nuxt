import * as types from './mutation-types'
import {playMode} from '@/common/js/config'
import {shuffle} from '@/common/js/util'

function findIndex(list, song) {
  return list.findIndex((item) => {
    return item.id === song.id
  })
}

export const selectPlay = ({commit, state}, {list, index}) => {
  commit(types.SET_SEQUENCE_LIST, list)

  if (state.mode === playMode.random) {
    let random = shuffle(list)

    commit(types.SET_PLAYLIST, random)
    index = findIndex(random, list[index])
  } else {
    commit(types.SET_PLAYLIST, list)
  }
  
  commit(types.SET_PLAYING, true)
  commit(types.SET_FULL_SCREEN, true)
  commit(types.SET_CURRENT_INDEX, index)
}

export const randomplay = ({commit}, {list}) => {
  let random = shuffle(list)
  
  commit(types.SET_PLAY_MODE, playMode.random)
  commit(types.SET_SEQUENCE_LIST, list)
  commit(types.SET_PLAYLIST, random)
  commit(types.SET_CURRENT_INDEX, 0)
  commit(types.SET_PLAYING, true)
  commit(types.SET_FULL_SCREEN, true)
}