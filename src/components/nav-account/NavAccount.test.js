import React from 'react'
import NavAccount from './index'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({ adapter: new Adapter() })

describe('<NavAccount />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<NavAccount text='Profile' link='/' image='user' />)
  })
  it('Should that the component return li', () => {
    expect(wrapper.find('li')).to.have.length(1)
  })
  it('Should that the component return Icon', () => {
    expect(wrapper.find('Icon')).to.have.length(1)
  })
  it('Should that the component return link', () => {
    expect(wrapper.find('Link')).to.have.length(1)
  })
  it('Should tha the component return url the value of link passed the prop', () => {
    expect(wrapper.instance().props.link).to.equal('/')
  })
  it('Should tha the component return svg the value of image passed the prop', () => {
    expect(wrapper.instance().props.image).to.equal('user')
  })
})
