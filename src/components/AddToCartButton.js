import React from 'react'
import { withStyles } from 'material-ui'
import Button from 'material-ui/Button'
import red from '@material-ui/core/colors/red';

import classNames from 'classnames'

const AddToCartButton = props => {
    const { classes = {} } = props
    return (
    	<div className={classes.addToCartDiv}>
			<Button
				variant="raised"
				color="primary"
				className={classNames(classes.primaryBtn, classes.cartBtn)}
			>
				ADD TO CART
			</Button>
		</div>
    )
}

const styles = {
	addToCartDiv: {
		float: 'left',
		width: '47%',
		marginTop: 25,
		marginRight: 6,
		marginBottom: 15,
	},
    primaryBtn: {
		width: '100%',
		fontColor: '#ffffff',
	},
	cartBtn: {
		backgroundColor: red[700],
	}
}

export default withStyles(styles)(AddToCartButton)