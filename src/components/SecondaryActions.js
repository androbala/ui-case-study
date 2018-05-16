import React from 'react'
import { withStyles } from 'material-ui'
import Button from 'material-ui/Button'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const SecondaryActions = props => {
	const { classes = {} } = props

	return (
		<div>
			<Button
				variant="raised"
				color="default"
				className={classNames(classes.secondaryBtn)}
			>
                ADD REGISTRY
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
		width: '31%',
		marginTop: 25,
		marginRight: 8,
		marginBottom: 15,
	}
}

SecondaryActions.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SecondaryActions)