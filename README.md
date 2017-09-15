# HOCs & HORs
A library of the React Higher Order goodness that I use on a daily basis, including Higher Order Components, Reducers and more!

## Documentation

### Higher Order Components (HOCs)
Below is a list of HOCs that this library includes

- [`withUniqueKey`](https://github.com/RyanCCollins/hocs/blob/master/src/withUniqueKey.ts): `(key: string) => HOC`

Add a unique key to each object in an array of objects in order to satisfy [React's unique key requirements](https://facebook.github.io/react/docs/lists-and-keys.html) when mapping over that array.

Example:
```
const Component = withKeyIndex('items')(({ items }) => (
  <List>
    {items.map(item =>
      <ListItem {...item} /> // has a unique key property
    )}
  </List>
))
const items = [
  { title: 'one' },
  { title: 'two' },
]
<Component items={items} />
```

### Higher Order Reducers (HORs)
#### - [`withPagination`](https://github.com/RyanCCollins/hocs/blob/master/packages/HORs/withPagination.ts): `(actionPrefix: string) => HOR`

Enhance a reducer with pagination abilities. (NOTE: I will try to add some selectors to make this more useful for the sake of rendering UI from the state for pagination.)

Example:

```
import { withPagination, paginationState } from 'hors'

export const initialState = {
  ...paginationState,
  foo: 'baz'
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

const enhancedReducer = withPagination('HOME_CONTAINER')(reducer)

export default enhancedReducer

// Now to paginate call an action:
dispatch({ type: 'HOME_CONTAINER/PAGINATE' })
```

#### - [`withRequest`](https://github.com/RyanCCollins/hocs/blob/master/packages/HORs/withRequest.ts): `(actionPrefix: string) => HOR`

Enhance a reducer with a request flow, handling error and success.

Example:

```
import { withRequest, requestState } from 'hors'

export const initialState = {
  ...requestState,
  foo: 'baz'
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

const enhancedReducer = withRequest('HOME_CONTAINER')(reducer)

export default enhancedReducer

To initiate a request, you can use a thunk:
const request = () => (dispatch) => {
  dispatch({ type: 'HOME_CONTAINER/REQUEST_INITIATION' })
  Request.get(url)
    .then(payload => dispatch({ type: 'HOME_CONTAINER/REQUEST_SUCCESS', payload }))
    .catch(error => dispatch({ type: 'HOME_CONTAINER/REQUEST_FAILURE', error }))
}
```
### Type Glossary
Below are a few types that you might find useful when reading these docs

`type HOC = (Component: JSX.Element) => JSX.Element`

`type HOR = (reducer: Reducer<State>) => Reducer<State>`
