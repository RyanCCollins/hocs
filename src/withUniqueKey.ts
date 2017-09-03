/* withUniqueKey: (key: string) => HOC
Add a unique key to each object in an array of 
objects in order to satisfy [React's unique key requirements](https://facebook.github.io/react/docs/lists-and-keys.html) 
when mapping over that array.
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
