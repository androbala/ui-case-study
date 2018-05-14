import React from 'react'
import { withStyles } from 'material-ui'
import Button from 'material-ui/Button'
import classNames from 'classnames'

const AddToCartButton = props => {
    const { classes = {} } = props
    return (
        <Button
            variant="raised"
            color="primary"
            className={classNames(classes.primaryBtn, classes.cartBtn)}
        >
            ADD TO CART
        </Button>
    )
}

const styles = {
    primaryBtn: {
		marginTop: 25,
		marginRight: 6,
		marginBottom: 15,
		width: '47%',
		fontColor: '#ffffff'
	},
	cartBtn: {
		backgroundColor: '#ff0000',
	}
}

export default withStyles(styles)(AddToCartButton)