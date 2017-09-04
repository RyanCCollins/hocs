# HOCs & HORs
A library of the React Higher Order goodness that I use on a daily basis, including Higher Order Components, Reducers and more!

## Docs

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

### Higher Order Reducers (HOCs)
- [`withPagination`](https://github.com/RyanCCollins/hocs/blob/master/packages/HORs/withPagination.ts): `(actionPrefix: string) => (reducer: Reducer<State>) => (state: State, action: Action) => State`

Enhance a reducer with pagination abilities. (NOTE: I will try to add some selectors to make this more useful for the sake of rendering UI from the state for pagination.)

Example:

```
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
```

### Type Glossary
Below are a few types that you might find useful when reading these docs

```
type HOC = (Component: JSX.Element) => JSX.Element
```
