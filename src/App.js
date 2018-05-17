import React from 'react'
import ProductDetailsPage from './containers/ProductDetailsPage'
import './styles/App.css'
import {get} from 'lodash'

import jsonData from './data/item-data.json'

const App = props => {
	const productData = get(jsonData, 'CatalogEntryView[0]') || {}

	return (
		<ProductDetailsPage {...props} productData={productData}/>
	)
}

export default App
