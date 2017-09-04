import { Reducer, Action } from 'redux'

export interface Error {
  message: string
}

export interface State {
  isLoading: boolean
  error?: Error | {}
  data?: {}
}

export type Payload = Error | {}
export interface PayloadAction extends Action {
  payload?: Payload
}

type HOR = (reducer: Reducer<State>) => (state: State, action: PayloadAction) => State
const withRequest = (actionPrefix: string = ''): HOR => (reducer) =>
  (state, action) => {
    const withPrefix = (x: string) => `${actionPrefix}/${x}`
    const actions = [
      withPrefix('REQUEST_INITIATION'),
      withPrefix('REQUEST_FAILURE'),
      withPrefix('REQUEST_SUCCESS'),
    ]
    if (actions.indexOf(action.type) < 0) {
      return reducer(state, action)
    }
    switch (action.type) {
    case actions[0]:
      return {
        ...state,
        isLoading: true,
      }
    case actions[1]:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    case actions[2]:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }
    default: return state
    }
  }

export default withRequest
