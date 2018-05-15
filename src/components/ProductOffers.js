import React from 'react'
import { withStyles } from 'material-ui'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import red from '@material-ui/core/colors/red'

const ProductOffers = props => {
	const { classes = {}, offers } = props

	return (
		<ul className={classes.promoText}>
			{offers && offers.length>0 && offers.map((offer, index) => (
				<li key={index}><LocalOfferIcon className={classes.OfferIcon}/> {offer.Description[0].shortDescription.toLowerCase()}</li>
			))}
		</ul>
	)
}

const styles = {
	promoText: {
		fontSize: '17px',
		color: red[700],
		listStyleType: 'none',
		padding: 0,
	},
	OfferIcon: {
		fontSize: '15px',
		paddingTop: 5,
	}
}

export default withStyles(styles)(ProductOffers)