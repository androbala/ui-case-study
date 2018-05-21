import React from 'react'
import { shallow } from 'enzyme'
import ProductTitle from '../ProductTitle'

describe('ProductTitle', () => {
	const initialProps = {
		title: 'foo',
	}

	it('should render product title if title is passed', () => {
		const wrapper = shallow(<ProductTitle title={initialProps.title} />)
		expect(wrapper.html()).toBe('<p class="ProductTitle-productTitle-1"><span> foo </span></p>')

	})

	it('should display error if title is not passed', () => {
		const wrapper = shallow(<ProductTitle title={''} />)
		expect(wrapper.html()).toBe('<p class="ProductTitle-productTitle-1"><span class="error-lbl"> title N/A at this moment </span></p>')
	})
})
