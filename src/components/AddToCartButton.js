import React from 'react'
import { withStyles } from 'material-ui'
import Button from 'material-ui/Button'
import red from '@material-ui/core/colors/red'
import PropTypes from 'prop-types'

const AddToCartButton = props => {
	const { classes = {} } = props
	return (
		<div className={classes.addToCartDiv}>
			<Button
				variant="raised"
				color="primary"
				className={classes.cartBtn}
			>
				ADD TO CART
			</Button>
		</div>
	)
}

const styles = {
	addToCartDiv: {
		float: 'left',
		width: '48%',
		marginTop: 25,
		marginRight: 6,
		marginBottom: 15,
	},
	cartBtn: {
		width: '100%',
		fontColor: '#ffffff',
		backgroundColor: red[700],
	}
}

AddToCartButton.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AddToCartButton)