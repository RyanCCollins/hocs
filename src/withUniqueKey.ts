/* withUniqueKey
Add a unique key to a specified prop array

Example:
const enhance = withKeyIndex('items')

const Component = enhance(({ items }) => (
  <div>
    {items.map(item =>
      <Item {...item} /> // has a unique key property
    )}
  </div>
))
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

const withUniqueKey = (key: string): InferableComponentEnhancerWithProps<Props, {}> => mapProps(
  (props: Props) => ({ ...props, [key]: keyIndex(props[key]) }),
)

export default withUniqueKey
