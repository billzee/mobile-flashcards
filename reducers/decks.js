import { SET } from '../actions/decks'

const initialState = {
  '1': {
    id: '1',
    title: 'deck 1',
    cards: [],
  },
}

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case SET:
      return { ...state, ...{ [payload.id]: payload } }
    default:
      return state
  }
}