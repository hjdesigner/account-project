import React from 'react'
import Address from './index'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({ adapter: new Adapter() })

describe('<Address />', () => {
  let date1, date2, wrapper, wrapper2
  beforeEach(() => {
    date1 = [
      {
        'id': 0,
        'title': 'Principal',
        'name': 'Henrique Melanda',
        'street': 'Rua Atalaia Velha',
        'number': '140',
        'complement': '121C',
        'neighborhood': 'Vila Canero',
        'state': 'São Paulo',
        'city': 'SP',
        'zipeCode': '03191-140'
      }
    ]
    date2 = [
      {
        'id': 0,
        'title': 'Principal',
        'name': 'Henrique Melanda',
        'street': 'Rua Atalaia Velha',
        'number': '140',
        'complement': '121C',
        'neighborhood': 'Vila Canero',
        'state': 'São Paulo',
        'city': 'SP',
        'zipeCode': '03191-140'
      },
      {
        'id': 1,
        'title': 'Secundário',
        'name': 'Caroline Duarte',
        'street': 'Rua Nebulosa',
        'number': '202',
        'complement': '',
        'neighborhood': 'Vila Formosa',
        'state': 'São Paulo',
        'city': 'SP',
        'zipeCode': '02191-202'
      }
    ]
    wrapper = shallow(<Address item={date1} />)
    wrapper2 = shallow(<Address item={date2} />)
  })
  it('Should wrapper return ul', () => {
    expect(wrapper.find('ul')).to.have.length(1)
  })
  it('Should wrapper return li', () => {
    expect(wrapper.find('li')).to.have.length(1)
  })
  it('Should wrapper return 5 p', () => {
    expect(wrapper.find('p')).to.have.length(5)
  })
  it('Wrapper should return in the h2 Principal', () => {
    const title = wrapper.find('h2').at(0)
    expect(title.text()).to.equal('Principal')
  })
  it('Wrapper should return in the first o name', () => {
    const first = wrapper.find('p').at(0)
    expect(first.text()).to.equal('Henrique Melanda')
  })
  it('Wrapper should return in the second p return street, number and complement', () => {
    const secord = wrapper.find('p').at(1)
    expect(secord.text()).to.equal('Rua Atalaia Velha, 140 - 121C')
  })
  it('Wrapper should return in the third p neighborhood', () => {
    const third = wrapper.find('p').at(2)
    expect(third.text()).to.equal('Vila Canero')
  })
  it('Wrapper should return int the four p state and city', () => {
    const four = wrapper.find('p').at(3)
    expect(four.text()).to.equal('São Paulo - SP')
  })
  it('Wrapper should return in the last p zipeCode', () => {
    const last = wrapper.find('p').at(4)
    expect(last.text()).to.equal('03191-140')
  })
  it('Should wrapper2 return two li', () => {
    expect(wrapper2.find('li')).to.have.length(2)
  })
  it('Wrapper2 should return in the h2 Secundário', () => {
    const title = wrapper2.find('h2').at(1)
    expect(title.text()).to.equal('Secundário')
  })
  it('Should wrapper2 return 10 p', () => {
    expect(wrapper2.find('p')).to.have.length(10)
  })
  it('Wrapper2 should return in the first o name', () => {
    const first = wrapper2.find('p').at(5)
    expect(first.text()).to.equal('Caroline Duarte')
  })
  it('Wrapper2 should return in the second p return street, number and complement', () => {
    const secord = wrapper2.find('p').at(6)
    expect(secord.text()).to.equal('Rua Nebulosa, 202')
  })
  it('Wrapper2 should return in the third p neighborhood', () => {
    const third = wrapper2.find('p').at(7)
    expect(third.text()).to.equal('Vila Formosa')
  })
  it('Wrapper2 should return int the four p state and city', () => {
    const four = wrapper2.find('p').at(8)
    expect(four.text()).to.equal('São Paulo - SP')
  })
  it('Wrapper2 should return in the last p zipeCode', () => {
    const last = wrapper2.find('p').at(9)
    expect(last.text()).to.equal('02191-202')
  })
})
