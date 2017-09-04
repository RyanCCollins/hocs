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

/*
Example:
const initialState = {
  pagination: {
    currentPage: 1,
    perPage: 8,
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'FOO':
    return {
      ...state,
      foo: 'bar',
    }
  default: return state
  }
}

const enhancedReducer = withPagination()(reducer)
*/
