import React from 'react'
import OrderProduct from './index'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({ adapter: new Adapter() })

describe('<OrderProduct />', () => {
  let data, data2, wrapper, wrapper2
  beforeEach(() => {
    data = [
      {
        'id': 0,
        'name': 'Dafiti Shoes Nó Nude',
        'image': 'urldaimage',
        'description': 'Sapatilha DAFITI SHOES Nó Nude Tipo de Produto: Sapatilha',
        'date': '10/12/2017'
      }
    ]
    data2 = [
      {
        'id': 0,
        'name': 'Dafiti Shoes Nó Nude',
        'image': 'urldaimage',
        'description': 'Sapatilha DAFITI SHOES Nó Nude Tipo de Produto: Sapatilha',
        'date': '10/12/2017'
      },
      {
        'id': 0,
        'name': 'Ana Cristina',
        'image': 'urldaimage2',
        'description': 'Sapatilha Ana Cristina',
        'date': '10/12/2017'
      }
    ]
    wrapper = shallow(<OrderProduct item={data} />)
    wrapper2 = shallow(<OrderProduct item={data2} />)
  })
  it('Wraper should return li', () => {
    expect(wrapper.find('li')).to.have.length(1)
  })
  it('Wraper should return figure', () => {
    expect(wrapper.find('figure')).to.have.length(1)
  })
  it('Wrapper should return img correct passed data', () => {
    const img = wrapper.find('figure')
    expect(img.contains(<img src='urldaimage' />)).to.equal(true)
  })
  it('Wrapper should return name correct passed data', () => {
    const name = wrapper.find('p').at(0)
    expect(name.text()).to.equal('Dafiti Shoes Nó Nude')
  })
  it('Wrapper should return description correct passed data', () => {
    const description = wrapper.find('p').at(1)
    expect(description.text()).to.equal('Sapatilha DAFITI SHOES Nó Nude Tipo de Produto: Sapatilha')
  })
  it('Wrapper should return date correct passed data', () => {
    const date = wrapper.find('p').at(2)
    expect(date.text()).to.equal('10/12/2017')
  })
  it('Wraper2 should return two li', () => {
    expect(wrapper2.find('li')).to.have.length(2)
  })
  it('Wraper2 should return two figure', () => {
    expect(wrapper2.find('figure')).to.have.length(2)
  })
  it('Wrapper2 should return name correct passed data', () => {
    const name2 = wrapper2.find('p').at(3)
    expect(name2.text()).to.equal('Ana Cristina')
  })
  it('Wrapper2 should return description correct passed data', () => {
    const description2 = wrapper2.find('p').at(4)
    expect(description2.text()).to.equal('Sapatilha Ana Cristina')
  })
  it('Wrapper2 should return date correct passed data', () => {
    const date2 = wrapper2.find('p').at(5)
    expect(date2.text()).to.equal('10/12/2017')
  })
  it('Wrapper2 should return img correct passed data', () => {
    const img2 = wrapper2.find('figure').at(1)
    expect(img2.contains(<img src='urldaimage2' />)).to.equal(true)
  })
})
