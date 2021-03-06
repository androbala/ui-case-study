import React from 'react'
import { withStyles } from 'material-ui'
import Typography from 'material-ui/Typography'
import ReactHtmlParser from 'react-html-parser'
import {map} from 'lodash'
import PropTypes from 'prop-types'

const ProductHighlights = props => {
	const { classes = {}, highlights = [] } = props

	return (
		<div className={classes.highlightsDiv}>
			<Typography variant="display1" className={classes.highlightsHeader}>
                product highlights
			</Typography>
			<ul className={classes.highlightsList}>
				{map(highlights, (highlight, index) => (
					<li key={index} className={classes.highlightsItem}>
						{
							ReactHtmlParser(highlight)
						}
					</li>
				))}
			</ul>
		</div>
	)
}

const styles = {
	highlightsDiv: {
	    marginTop: 20,
	},
	highlightsList: {
		padding: 0,
		marginLeft: 20,
	},
	highlightsItem: {
		padding: 3,
		color: '#757575',
	},
	highlightsHeader: {
		color: '#000000',
	}
}

ProductHighlights.propTypes = {
	classes: PropTypes.object.isRequired,
	highlights: PropTypes.array.isRequired,
}

export default withStyles(styles)(ProductHighlights)
