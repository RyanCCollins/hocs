import { Reducer } from 'redux'

const withPagination = (actionPrefix) => (reducer) => (state, action) => {
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
