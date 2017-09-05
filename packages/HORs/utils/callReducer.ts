import { Action, Reducer } from 'redux'

export type AnyState = any

const callReducer = (reducer: Reducer<AnyState>) => (state: AnyState, action: Action) => {
  return reducer(state, action)
}

export default callReducer
