import { Reducer } from 'redux'

const withPagination = (reducer) => (state, action) => {
  if (action.type !== 'PAGINATE') {
    return reducer(state, action)
  }
  switch (action.type) {
  case 'PAGINATE':
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

const reducer = (state, action) => {
  switch (action.type) {
  case 'FOO':
    return {
      ...state,
      foo: 'bar',
    }
  default: return state
  }
}

const enhancedReducer = withPagination(reducer)
