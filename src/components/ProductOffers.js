import React from 'react'
import { withStyles } from 'material-ui';
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import red from '@material-ui/core/colors/red'
import {map} from 'lodash'

const ProductOffers = props => {
	const { classes = {}, offers = [] } = props

    return (
        <ul className={classes.promoText}>
			{map(offers, (offer, index) => (
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