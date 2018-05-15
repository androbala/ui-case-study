import React from 'react'
import { withStyles } from 'material-ui'
import Button from 'material-ui/Button'
import classNames from 'classnames'

const NamelessButtons = props => {
	const { classes = {} } = props

	return (
		<div>
			<Button
				variant="raised"
				color="default"
				className={classNames(classes.secondaryBtn)}
			>
                ADD TO REGISTRY
			</Button>

			<Button
				variant="raised"
				color="default"
				className={classNames(classes.secondaryBtn)}
			>
                ADD TO LIST
			</Button>

			<Button
				variant="raised"
				color="default"
				className={classNames(classes.btn, classes.secondaryBtn)}
			>
                SHARE
			</Button>
		</div>
	)
}

const styles = {
	secondaryBtn: {
		fontSize: 12,
		width: '30%',
		marginTop: 25,
		marginRight: 8,
		marginBottom: 15,
	}
}

export default withStyles(styles)(NamelessButtons)