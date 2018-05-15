import React from 'react'
import { withStyles } from 'material-ui'
import Button from 'material-ui/Button'
import classNames from 'classnames'

const FullfillmentOptions = props => {
	const { classes = {} } = props
	return (
		<div className={classes.pickupDiv}>
			<Button
				variant="raised"
				color="primary"
				className={classNames(classes.primaryBtn, classes.pickupBtn)}
			>
				PICKUP IN STORE
			</Button>
			<div className={classes.findTxt}>
				<a href="#" className={classes.anchorText}>
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
	primaryBtn: {
		width: '100%',
		fontColor: '#ffffff',
	},
	pickupBtn: {
		backgroundColor: '#000000',
	},
	findTxt: {
		textAlign: 'center',
		marginTop: 2,
		fontSize: '14px',
	},
	anchorText: {
		textDecoration: 'none',
		color: '#000000',
	}
}

export default withStyles(styles)(FullfillmentOptions)