import React from 'react'
import { withStyles } from 'material-ui'

const PriceBlock = props => {
    const { classes = {} } = props
    
    return (
        <div>
            <span className={classes.price}>
                $139.99
            </span>
            <span className={classes.smText}>
                online price
            </span>
        </div>
    )
}

const styles = {
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