import React from 'react'
import { withStyles } from 'material-ui'

const PriceBlock = props => {
    const { classes = {}, price } = props
    
    return (
        <div className={classes.priceBlock}>
            <span className={classes.price}>
				{price}
            </span>
            <span className={classes.smText}>
                online price
            </span>
        </div>
    )
}

const styles = {
	priceBlock: {
		paddingBottom: 15,
	},
	price: {
		fontSize: '27px'
	},
	smText: {
		fontSize: '12px',
		color: 'grey',
		marginLeft: 10
	},
}

export default withStyles(styles)(PriceBlock)