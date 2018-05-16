import React from 'react'
import { withStyles } from 'material-ui'
import PropTypes from 'prop-types';

const PriceBlock = props => {
	const { classes = {}, price = '' } = props
    
	return (
		<div className={classes.priceBlock}>
			{ price && <span className={classes.price}> {price} </span> }
			{ !price && <span className="error-lbl"> Price N/A at this moment </span>}
			<span className={classes.smText}>
                online price
			</span>
		</div>
	)
}

const styles = {
	priceBlock: {
		paddingBottom: 10,
	},
	price: {
		fontSize: '27px',
	},
	smText: {
		fontSize: '15px',
		color: 'grey',
		marginLeft: 3,
	},
}

PriceBlock.propTypes = {
	classes: PropTypes.object.isRequired,
	price: PropTypes.string.isRequired,
}

export default withStyles(styles)(PriceBlock)