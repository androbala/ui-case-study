import React from 'react'
import { withStyles } from 'material-ui'
import Button from 'material-ui/Button'
import classNames from 'classnames'

const FullfillmentOptions = props => {
    const { classes = {} } = props
    return (
        <Button
            variant="raised"
            color="primary"
            className={classNames(classes.primaryBtn, classes.pickupBtn)}
        >
            PICKUP IN STORE
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
	pickupBtn: {
		backgroundColor: '#000000',
	}
}

export default withStyles(styles)(FullfillmentOptions)