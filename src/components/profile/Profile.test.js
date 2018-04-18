import React from 'react'
import Profile from './index'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({ adapter: new Adapter() })

describe('<Profile />', () => {
  let date, wrapper
  beforeEach(() => {
    date = {
      "id": 1,
      "name": "Henrique",
      "lastname": "Melanda",
      "email": "hjdesigner23@gmail.com",
      "sex": "Masculino",
      "cpf": "232.107.978-97",
      "birthDate": "27/12/1990"
    }
    wrapper = shallow(<Profile item={date} />)
  })
  it('Should return ul', () => {
    expect(wrapper.find('ul')).to.have.length(1)
  })
  it('Should that the component return li', () => {
    expect(wrapper.find('li')).to.have.length(6)
  })
  it('Should show name equal to date', () => {
    const itemLi = wrapper.find('li').at(0);
    expect(itemLi.contains(date.name)).to.equal(true)
  })
  it('Should show last name equal to date', () => {
    const itemLi = wrapper.find('li').at(1);
    expect(itemLi.contains(date.lastname)).to.equal(true)
  })
  it('Should show email equal to date', () => {
    const itemLi = wrapper.find('li').at(2);
    expect(itemLi.contains(date.email)).to.equal(true)
  })
  it('Should show sex equal to date', () => {
    const itemLi = wrapper.find('li').at(3);
    expect(itemLi.contains(date.sex)).to.equal(true)
  })
  it('Should show cpf equal to date', () => {
    const itemLi = wrapper.find('li').at(4);
    expect(itemLi.contains(date.cpf)).to.equal(true)
  })
  it('Should show birth date equal to date', () => {
    const itemLi = wrapper.find('li').at(5);
    expect(itemLi.contains(date.birthDate)).to.equal(true)
  })
})
