import React from 'react'

import './../../node_modules/slick-carousel/slick/slick.css'
import './../../node_modules/slick-carousel/slick/slick-theme.css'
import './../../node_modules/font-awesome/css/font-awesome.min.css'

import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import { get } from 'lodash'

import ProductTitle from '../components/ProductTitle'
import ProductGallery from '../components/ProductGallery'
import PriceBlock from '../components/PriceBlock'
import ProductOffers from '../components/ProductOffers'
import ProductQuantity from '../components/ProductQuantity'
import FullfillmentOptions from '../components/FullfillmentOptions'
import AddToCartButton from '../components/AddToCartButton'
import ReturnPolicyDetails from '../components/ReturnPolicyDetails'
import ProductHighlights from '../components/ProductHighlights'
import NamelessButtons from '../components/NamelessButtons'
import ProductRating from '../components/ProductRating'
import ProductReviews from '../components/ProductReviews'

class ProductDetailsPage extends React.Component {
	render() {
		const { classes = {}, productData = {} } = this.props

		//mapping product attributes
		const product = {
			title: get(productData, 'title') || '',
			images: get(productData, 'Images[0]') || [],
			price: get(productData, 'Offers[0].OfferPrice[0].formattedPriceValue') || '',
			offers: get(productData, 'Promotions') || [],
			showAddToCart: (productData.purchasingChannelCode === '0' || productData.purchasingChannelCode === '1'),
			showFulfillmentOptions: (productData.purchasingChannelCode === '0'|| productData.purchasingChannelCode === '2'),
			highlights: get(productData, 'ItemDescription[0].features') || [],
			rating: Number(get(productData, 'CustomerReview[0].consolidatedOverallRating') || 0),
			totalReviews: get(productData, 'CustomerReview[0].totalReviews') || 0,
			reviews: get(productData, 'CustomerReview[0]') || {}
		}

		return (
			<div className={classes.root}>
				<Grid
					container
					spacing={24}
					className={classes.container}
					alignItems={flexProps.alignItems}
					direction={flexProps.direction}
					justify={flexProps.justify}
				>
					<Grid item xs={12} sm={12} md={2} />
					<Grid item xs={12} sm={10} md={4}>
						<div className={classes.leftSection}>
							<ProductTitle title={product.title} />
							<ProductGallery images={product.images} />
						</div>
					</Grid>
					<Grid item xs={12} sm={10} md={4} >
						<div className={classes.rightSection}>
							<PriceBlock price={product.price} />
							<hr />
							<ProductOffers offers={product.offers} />
							<hr />
							<ProductQuantity />

							<div>
								{product.showFulfillmentOptions && <FullfillmentOptions />}
								{product.showAddToCart && <AddToCartButton />}
								<div className='clearfix'></div>
							</div>

							<ReturnPolicyDetails />
							<NamelessButtons />
							<ProductHighlights highlights={product.highlights} />
						</div>
					</Grid>
					<Grid item xs={12} sm={12} md={2} />
				</Grid>

				<Grid
					container
					spacing={24}
					alignItems={flexProps.alignItems}
					direction={flexProps.direction}
					justify={flexProps.justify}
				>
					<Grid item xs={12} sm={12} md={2} />
					<Grid item xs={12} sm={10} md={4}>
						<div className={classes.leftSection}>
							<ProductRating rating={product.rating} totalReviews={product.totalReviews} />
							<ProductReviews reviews={product.reviews} />
						</div>
					</Grid>
					<Grid item xs={12} sm={10} md={4} />
					<Grid item xs={12} sm={12} md={2} />
				</Grid>

			</div>
		)
	}
}

const styles = {
	root: {
		flexGrow: 1,
		height: '100vh',
	},
	container: {
	},
	leftSection: {
		textAlign: 'center',
		padding: 15,
	},
	rightSection: {
		padding: 15,
		marginTop: 45,
	}
}

const flexProps = {
	direction: 'row',
	justify: 'center',
	alignItems: 'flex-start',
}

ProductDetailsPage.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProductDetailsPage)
