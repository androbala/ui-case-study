import React from 'react'
import { withStyles } from 'material-ui'
import Button from 'material-ui/Button'
import PropTypes from 'prop-types';

const FullfillmentOptions = props => {
	const { classes = {} } = props
	return (
		<div className={classes.pickupDiv}>
			<Button
				variant="raised"
				color="primary"
				className={classes.pickupBtn}
			>
				PICKUP IN STORE
			</Button>
			<div className={classes.findTxt}>
				<a href="#" className={classes.anchorTxt}>
					<b>find in a store</b>
				</a>
			</div>
		</div>
	)
}

const styles = {
	pickupDiv: {
		float: 'left',
		width: '47%',
		marginTop: 25,
		marginRight: 6,
		marginBottom: 15,
	},
	pickupBtn: {
		width: '100%',
		fontColor: '#ffffff',
		backgroundColor: '#000000',
	},
	findTxt: {
		textAlign: 'center',
		marginTop: 2,
		fontSize: '14px',
	},
	anchorTxt: {
		textDecoration: 'none',
		color: '#000000',
	}
}

FullfillmentOptions.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FullfillmentOptions)