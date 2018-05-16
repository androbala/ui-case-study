import React from 'react'
import { withStyles } from 'material-ui'
import Rating from 'react-rating'
import PropTypes from 'prop-types';

const ProductRating = props => {
    const { classes = {}, rating = 0, totalReviews = 0 } = props

	return (
		<React.Fragment>
			<div>
				<span className={classes.ratingsText}>
					<Rating
						emptySymbol="fa fa-star-o fa-2x low"
						fullSymbol="fa fa-star fa-2x low"
						initialRating={rating}
					/>
					<b>
						overall
					</b>
				</span>
				<span className={classes.reviewsText}>
					<b>
						<a href="#" className={classes.reviewsLink}>
							view all {totalReviews} reviews
						</a>
					</b>
				</span>
			</div>
			<div className="clearfix"></div>
		</React.Fragment>
	)
}

const styles = {
	ratingsText: {
		float: 'left',
		marginLeft: 7,
		fontSize: '17px',
	},
	reviewsText: {
		float: 'right',
		marginRight: 7,
		paddingTop: 15,
		fontSize: '17px',
	},
	reviewsLink: {
		textDecoration: 'none',
		color: '#000000',
	},
}

ProductRating.propTypes = {
	classes: PropTypes.object.isRequired,
	rating: PropTypes.number.isRequired,
	totalReviews: PropTypes.number.isRequired,
}

export default withStyles(styles)(ProductRating)