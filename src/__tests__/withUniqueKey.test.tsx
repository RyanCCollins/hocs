import {} from 'jest'
import * as React from 'react'
import { shallow } from 'enzyme'
import { withUniqueKey } from '../'

interface Props {
  items: Array<{ title: string, key?: string }>
}
const Component = ({ items }: Props): JSX.Element => (
  <ul>
    {items.map((item) =>
      <li key={item.key}>
        {item.title}
      </li>,
    )}
  </ul>
)

describe('withUniqueKeyIndex', () => {
  let EnhancedComponent: JSX.Element
  let props: Props

  beforeEach(() => {
    props = {
      items: [
        {
          title: 'one',
        },
        {
          title: 'two',
        },
      ],
    }

    EnhancedComponent = withUniqueKey('items')(Component)
  })
  
  it('does not have a key prop before being enhanced', () => {
    const Wrapper = shallow(<Component {...props} />)
    expect(Wrapper.find('li').first().props().key).toBeUndefined()
  })

  it('has a unique key prop after being enhanced', () => {
    EnhancedComponent = withUniqueKey('items')(Component)
    const Wrapper = shallow(<EnhancedComponent {...props} />)
    expect(Wrapper.find('li').first().props().key).toBeDefined()
  })
})
