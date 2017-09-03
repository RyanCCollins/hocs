# HOCs
A library of the React HOCs that I use on a daily basis

## Docs

### Types
```
type HOC = (Component: JSX.Element) => JSX.Element
```

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
