import React from 'react'
import { withStyles } from 'material-ui'
import grey from '@material-ui/core/colors/grey'

const ReturnPolicyDetails = props => {
	const { classes = {} } = props
    
	return (
		<div>
			<div className={classes.returnsLabel}>
                returns
			</div>
			<div className={classes.returnsSymbol}>
                |
			</div>
			<div className={classes.returnsDesc}>
                This item must be returned within 30 days of the ship date. See return policy for details.
                Prices, promotions, styles and availability may vary by store and online.
			</div>
			<div className='clearfix'></div>
		</div>
	)
}

const styles = {
	returnsLabel: {
		float: 'left',
		fontSize: '18px',
		color: grey[700],
		marginRight: 4,
		paddingTop: 4,
	},
	returnsSymbol: {
		float: 'left',
		fontSize: '30px',
		marginRight: 4,
		color: grey[300],
	},
	returnsDesc: {
		float: 'left',
		width: '80%',
		fontSize: '10px',
		color: grey[700],
		paddingTop: 4,
	}
}

export default withStyles(styles)(ReturnPolicyDetails)