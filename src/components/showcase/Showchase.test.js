import React from 'react'
import Showcase from './index'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({ adapter: new Adapter() })

describe('<Showcase />', () => {
	let data, wrapper
	beforeEach(() => {
		data = [
			{
				'id': 0,
				'name': 'Dafiti Shoes',
				'image': 'urldaimage',
				'valueDe': '119,90',
				'valuePor': '99,99',
				'url': 'https://www.dafiti.com.br/Tenis-FiveBlu-Escalator-Duo-DVB14091-Marrom-2699793.html'
			},
			{
				'id': 1,
				'name': 'Dafiti Shoes2',
				'image': 'urldaimage2',
				'valueDe': '',
				'valuePor': '9,99',
				'url': 'https://www.dafiti.com.br/Tenis-FiveBlu-Escalator-Duo-DVB14091-Marrom-2699793.html'
			}
		]
		wrapper = shallow(<Showcase item={data} />)
	})
	it('Should return li', () => {
		expect(wrapper.find('li')).to.have.length(2)
	})
	it('Should return two figure', () => {
		expect(wrapper.find('figure')).to.have.length(2)
	})
	it('Should return first figure img correct passed data', () => {
    const img = wrapper.find('figure').at(0)
    expect(img.contains(<img src='urldaimage' />)).to.equal(true)
	})
	it('Should return last figure img correct passed data', () => {
    const img = wrapper.find('figure').at(1)
    expect(img.contains(<img src='urldaimage2' />)).to.equal(true)
	})
	it('Should return first h2 name correct passed data', () => {
		const first = wrapper.find('h2').at(0)
		expect(first.text()).to.equal('Dafiti Shoes')
	})
	it('Should return last h2 name correct passed data', () => {
		const first = wrapper.find('h2').at(1)
		expect(first.text()).to.equal('Dafiti Shoes2')
	})
	it('Should return first p value de correct passed data', () => {
		const first = wrapper.find('p').at(0)
		expect(first.text()).to.equal('R$ 119,90')
	})
	it('Should return last p value de correct passed data', () => {
		const first = wrapper.find('p').at(2)
		expect(first.text()).to.equal('')
	})
	it('Should return first p value por correct passed data', () => {
		const first = wrapper.find('p').at(1)
		expect(first.text()).to.equal('R$ 99,99')
	})
	it('Should return last p value por correct passed data', () => {
		const first = wrapper.find('p').at(3)
		expect(first.text()).to.equal('R$ 9,99')
	})

})
