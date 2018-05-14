import React from 'react'
import { withStyles } from 'material-ui'
import Rating from 'react-rating'

const ProductRating = props => {
    const { classes = {} } = props

    return (
        <React.Fragment>
            <div className={classes.ratingsSection}>
                <span className={classes.ratingsText}>
                    <Rating
                        emptySymbol="fa fa-star-o fa-2x low"
                        fullSymbol="fa fa-star fa-2x low"
                    />overall
                </span>
                <span className={classes.reviewsText}>view all 14 reviews</span>
            </div>
            <div className="clearfix"></div>
        </React.Fragment>
    )
}

const styles = {
    ratingsSection: {

	},
	ratingsText: {
		float: 'left',
		marginLeft: 10,
	},
	reviewsText: {
		float: 'right',
		marginRight: 10,
		paddingTop: 15,
	},
}

export default withStyles(styles)(ProductRating)