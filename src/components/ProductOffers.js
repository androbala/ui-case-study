import React from 'react'
import { withStyles } from 'material-ui'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import red from '@material-ui/core/colors/red'
import {map, get} from 'lodash'
import PropTypes from 'prop-types'

const ProductOffers = props => {
	const { classes = {}, offers = [] } = props

    return (
        <ul className={classes.promoText}>
			{map(offers, (offer, index) => (
           		<li key={index}><LocalOfferIcon className={classes.OfferIcon}/> {get(offer, 'Description[0].shortDescription').toLowerCase() || ''}</li>
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

ProductOffers.propTypes = {
	classes: PropTypes.object.isRequired,
	offers: PropTypes.array.isRequired,
}

export default withStyles(styles)(ProductOffers)