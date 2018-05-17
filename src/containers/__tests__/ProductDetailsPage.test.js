import React from 'react'
import {shallow} from 'enzyme'
import ProductDetailsPage from '../ProductDetailsPage'
import ProductTitle from '../../components/ProductTitle'
import ProductGallery from '../../components/ProductGallery'
import PriceBlock from '../../components/PriceBlock'
import ProductOffers from '../../components/ProductOffers'
import ProductQuantity from '../../components/ProductQuantity'
import FullfillmentOptions from '../../components/FullfillmentOptions'
import AddToCartButton from '../../components/AddToCartButton'
import ReturnPolicyDetails from '../../components/ReturnPolicyDetails'
import ProductHighlights from '../../components/ProductHighlights'
import NamelessButtons from '../../components/SecondaryActions'
import ProductRating from '../../components/ProductRating'
import ProductReviews from '../../components/ProductReviews'

describe('ProductDetailsPage', () => {
	it('should render expected fields', () => {
		const initialProps = {
			title: 'foo',
			Images: [{ imageProps: 'foobar' }],
			Offers: [{
				OfferPrice: [{
					formattedPriceValue: 12345
				}]
			}],
			Promotions: [{ promotion: 'data' }],
			purchasingChannelCode: '0',
			ItemDescription: [{
				features: [{ feature: 'data' }]
			}],
			CustomerReview: [{
				consolidatedOverallRating: '1',
				totalReviews: '1234',
				review: 'data'
			}]
		}
	
		let wrapper = shallow(<ProductDetailsPage productData={initialProps}/>).dive()

		expect(wrapper.find(ProductTitle).exists()).toBeTruthy()
		expect(wrapper.find(ProductTitle).props().title).toBe(initialProps.title)
		expect(wrapper.find(ProductGallery).exists()).toBeTruthy()
		expect(wrapper.find(ProductGallery).props().images).toBe(initialProps.Images[0])
		expect(wrapper.find(PriceBlock).exists()).toBeTruthy()
		expect(wrapper.find(PriceBlock).props().price).toBe(initialProps.Offers[0].OfferPrice[0].formattedPriceValue)
		expect(wrapper.find(ProductOffers).exists()).toBeTruthy()
		expect(wrapper.find(ProductOffers).props().offers).toBe(initialProps.Promotions)
		expect(wrapper.find(ProductQuantity).exists()).toBeTruthy()
		expect(wrapper.find(FullfillmentOptions).exists()).toBeTruthy()
		expect(wrapper.find(AddToCartButton).exists()).toBeTruthy()
		expect(wrapper.find(ReturnPolicyDetails).exists()).toBeTruthy()
		expect(wrapper.find(NamelessButtons).exists()).toBeTruthy()
		expect(wrapper.find(ProductHighlights).exists()).toBeTruthy()
		expect(wrapper.find(ProductHighlights).props().highlights).toBe(initialProps.ItemDescription[0].features)
		expect(wrapper.find(ProductRating).exists()).toBeTruthy()
		expect(wrapper.find(ProductRating).props().rating).toBe(Number(initialProps.CustomerReview[0].consolidatedOverallRating))
		expect(wrapper.find(ProductRating).props().totalReviews).toBe(Number(initialProps.CustomerReview[0].totalReviews))
		expect(wrapper.find(ProductReviews).exists()).toBeTruthy()
		expect(wrapper.find(ProductReviews).props().reviews).toBe(initialProps.CustomerReview[0])
	})

	describe('AddToCartButton', () => {
		it('should render AddToCart button if purchasingChannelCode is 0', () => {
			const initialProps = { purchasingChannelCode: '0' }
		
			let wrapper = shallow(<ProductDetailsPage productData={initialProps}/>).dive()
		
			expect(wrapper.find(AddToCartButton).exists()).toBeTruthy()
		})
		
		it('should render AddToCart button if purchasingChannelCode is 1', () => {
			const initialProps = { purchasingChannelCode: '1' }
		
			let wrapper = shallow(<ProductDetailsPage productData={initialProps}/>).dive()
		
			expect(wrapper.find(AddToCartButton).exists()).toBeTruthy()
		})
		
		it('should NOT render AddToCart button if purchasingChannelCode is neither 0 nor 1', () => {
			const initialProps = { purchasingChannelCode: '4' }
		
			let wrapper = shallow(<ProductDetailsPage productData={initialProps}/>).dive()
		
			expect(wrapper.find(AddToCartButton).exists()).toBeFalsy()
		})
	})
	
	describe('FullfillmentOptions', () => {
		it('should render PickUpInStore button if purchasingChannelCode is 0', () => {
			const initialProps = { purchasingChannelCode: '0' }
		
			let wrapper = shallow(<ProductDetailsPage productData={initialProps}/>).dive()
		
			expect(wrapper.find(FullfillmentOptions).exists()).toBeTruthy()
		})
		
		it('should render PickUpInStore button if purchasingChannelCode is 2', () => {
			const initialProps = { purchasingChannelCode: '2' }
		
			let wrapper = shallow(<ProductDetailsPage productData={initialProps}/>).dive()
		
			expect(wrapper.find(FullfillmentOptions).exists()).toBeTruthy()
		})
		
		it('should NOT render PickUpInStore button if purchasingChannelCode is neither 0 nor 2', () => {
			const initialProps = { purchasingChannelCode: '1' }
		
			let wrapper = shallow(<ProductDetailsPage productData={initialProps}/>).dive()
		
			expect(wrapper.find(FullfillmentOptions).exists()).toBeFalsy()
		})
	})
})
