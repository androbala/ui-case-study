import React from 'react'
import { shallow } from 'enzyme'
import ProductQuantity from '../ProductQuantity'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

describe('ProductQuantity', () => {
	it('should increase the quantity when + button is clicked', () => {
		const wrapper = shallow(<ProductQuantity />).dive()
		const wrapperInstance = wrapper.instance()
		const AddButton = wrapper.find(AddIcon).parent()

		expect(wrapperInstance.state.qty).toBe(1)
		expect(AddButton.exists()).toBeTruthy()

		AddButton.simulate('click')
		wrapper.update()

		expect(wrapperInstance.state.qty).toBe(2)
	})

	it('should decrease the quantity when - button is clicked', () => {
		const wrapper = shallow(<ProductQuantity />).dive()
		const wrapperInstance = wrapper.instance()
		const RemoveButton = wrapper.find(RemoveIcon).parent()

		expect(wrapperInstance.state.qty).toBe(1)
		expect(RemoveButton.exists()).toBeTruthy()

		RemoveButton.simulate('click')
		wrapper.update()

		expect(wrapperInstance.state.qty).toBe(0)
	})
})