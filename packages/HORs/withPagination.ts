import { Reducer, Action } from 'redux'

export interface Pagination {
  perPage: number
  currentPage: number
}

export interface State {
  pagination: Pagination
}

const withPagination = (actionPrefix: string) =>
  (reducer: Reducer<State>) => (state: State, action: Action): State => {
    if (action.type !== `${actionPrefix}/PAGINATE`) {
      return reducer(state, action)
    }
    switch (action.type) {
    case `${actionPrefix}/PAGINATE`:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          currentPage: state.pagination.currentPage + 1,
        },
      }
    default: return state
    }
  }

export default withPagination
