# HOCs
A library of the React HOCs that I use on a daily basis

## Docs
- `withUniqueKey`
Add a unique key to a specified prop array in order to meet React's unique key requirement.

Example:
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
