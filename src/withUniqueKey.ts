/* withUniqueKey
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
*/
import { mapProps, InferableComponentEnhancerWithProps } from 'recompose'

const uniqueId = () => Math.random().toString(36).substr(2, 9)

export interface WithKey {
  key: string
}

export const keyIndex = (xs: Array<{}>): WithKey[] => xs.map((x) => ({ ...x, key: uniqueId() }))

export interface Props {
  [key: string]: Array<{}>
}

const withUniqueKey = (key: string) => mapProps(
  (props: Props) => ({ ...props, [key]: keyIndex(props[key]) }),
)

export default withUniqueKey
