import React from 'react'
import { withStyles } from 'material-ui'
import Typography from 'material-ui/Typography'
import ReactHtmlParser from 'react-html-parser';

const ProductHighlights = props => {
    const { classes = {}, highlights } = props

    return (
        <div className={classes.highlightsDiv}>
            <Typography variant="display1" className={classes.highlightsHeader}>
                product highlights
            </Typography>
			<ul>
				{highlights && highlights.length>0 && highlights.map((highlight, index) => (
					<li key={index} className={classes.highlightsItem}>{ReactHtmlParser(highlight)}</li>
				))}
			</ul>
        </div>
    )
}

const styles = {
	highlightsDiv: {
	    marginTop: 20,
    },
    highlightsItem: {
		padding: 3,
		color: '#757575',
    },
	highlightsHeader: {
		color: '#000000',
	}
}

export default withStyles(styles)(ProductHighlights)
