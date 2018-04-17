import React from 'react'
import { Link } from 'react-router-dom'
import NavAccount from './index'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({ adapter: new Adapter() })

describe('<NavAccount />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavAccount text='Profile' link='/' image='icon-profile.png' />)
  })
  it('Should that the component return li', () => {
    expect(wrapper.find('li')).to.have.length(1)
  })
  it('Should that the component return img', () => {
    expect(wrapper.find('img')).to.have.length(1)
  })
  it('Should that the component return link', () => {
    expect(wrapper.find('Link')).to.have.length(1)
  })
  it('Should that the component returns the value of the text and link passed by prop', () => {
    expect(wrapper.contains(<Link to='/'>Profile</Link>)).to.equal(true)
  })
  it('Should tha the compoente return img the value of image passed por prop', () => {
    expect(wrapper.contains(<img src='icon-profile.png' />)).to.equal(true)
  })
})
