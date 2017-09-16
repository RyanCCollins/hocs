import { Reducer, Action } from 'redux'
import { callReducer } from './utils'

export interface Pagination {
  perPage: number
  currentPage: number
}

export interface State {
  pagination: Pagination
}

const withPagination = (actionPrefix: string = 'UNKNOWN') =>
  (reducer: Reducer<State>) => (state: State, action: Action): State => {
    if (action.type !== `${actionPrefix}/PAGINATE`) {
      return callReducer(reducer)(state, action)
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

export const initialState: State = {
  pagination: {
    currentPage: 1,
    perPage: 8,
  },
}

export const selectPagination = (state: State): Pagination => state.pagination

export const selectCurrentPage = (state: State): number => selectPagination(state).currentPage
export const selectPerPage = (state: State): number => selectPagination(state).perPage

export const selectCurrentItems = (path: string) => (state: State) => {
  const items = get(state, path, []);
  const currentPage = selectCurrentPage(state);
  const perPage = selectPerPage(state);
  const current = currentPage - 1;
  const from = current * perPage;
  const to = (current * perPage) + perPage;
  return items.filter((_, i) => i >= from && i < to);
}
