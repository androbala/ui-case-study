import React from 'react'
import { withStyles } from 'material-ui/styles'

const ProductTitle = props => {
	const { classes = {}, title } = props

	return (
		<p className={classes.productTitle}>
			{
				title && <span> {title} </span>
			}
			{
				!title && <span className="error-lbl"> title N/A at this moment </span>
			}
		</p>
	)
}

const styles = {
	productTitle: {
		fontSize: '28px',
		color: '#7f7f7f',
		align: 'center',
		padding: 15,
	},
}

export default withStyles(styles)(ProductTitle)