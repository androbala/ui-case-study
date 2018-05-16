import React from 'react'
import { withStyles } from 'material-ui'
import Rating from 'react-rating'
import dateFormat from  'dateformat'
import grey from '@material-ui/core/colors/grey'
import PropTypes from 'prop-types';
import {get} from 'lodash'

const ProductReviews = props => {
    const { classes = {}, reviews = {} } = props
	const defaultReview = {
		overallRating: '',
		title: '',
		review: '',
		screenName: '',
		datePosted: '',
	}
	const pro = get(reviews, 'Pro[0]') || defaultReview
	const con = get(reviews, 'Con[0]') || defaultReview

	return (
		<React.Fragment>
			<div className={classes.commentsSection}>
				<div className={classes.proSection}>
					<div>
						<p>
                            PRO <br/>
							<span className={classes.reviewTxt}>Most helpful 4-5 star review</span>
						</p>
					</div>
					<hr/>
					<div>
						{
							pro.overallRating && <Rating
								emptySymbol="fa fa-star-o fa-1x low"
								fullSymbol="fa fa-star fa-1x low"
								initialRating={Number(pro.overallRating)}
							/>
						}
					</div>
					<h4>
						{pro.title}
					</h4>
					<p align="left">
						{pro.review}
					</p>
					<p>
						<span>
							<a href="#" className={classes.screenNameTxt}>
								{pro.screenName}
							</a>
						</span>
						<span className={classes.dateSpan}>
							{pro.datePosted && dateFormat(pro.datePosted, 'mmmm d, yyyy')}
						</span>
					</p>
				</div>
				<div className={classes.conSection}>
					<div>
						<p>
                            CON <br/>
							<span className={classes.reviewTxt}>Most helpful 4-5 star review</span>
						</p>
					</div>
					<hr/>
					<div>
						{
							con.overallRating && <Rating
								emptySymbol="fa fa-star-o fa-1x low"
								fullSymbol="fa fa-star fa-1x low"
								initialRating={Number(con.overallRating)}
							/>
						}
					</div>
					<h4>
						{con.title}
					</h4>
					<p align="left">
						{con.review}
					</p>
					<p>
						<span>
							<a href="#" className={classes.screenNameTxt}>
								{con.screenName}
							</a>
						</span>
						<span className={classes.dateSpan}>
							{con.datePosted && dateFormat(con.datePosted, 'mmmm d, yyyy')}
						</span>
					</p>
				</div>
			</div>
			<div className="clearfix"></div>
		</React.Fragment>
	)
}

const styles = {
	commentsSection: {
		textAlign: 'left',
		display: 'inline-block',
		backgroundColor: '#F0F0F0',
		marginTop: 15,
	},
	proSection: {
		backgroundColor: '#F0F0F0',
		float: 'left',
		width: '43%',
		paddingBottom: 10,
		paddingLeft: 15,
	},
	conSection: {
		backgroundColor: '#F0F0F0',
		float: 'right',
		width: '43%',
		paddingRight: 15,
		paddingBottom: 10,
	},
	dateSpan: {
		marginLeft: 5,
	},
	reviewTxt: {
		fontSize: '14px',
		color: grey[600],
	},
	screenNameTxt: {
		textDecoration: 'none',
	},
}

ProductReviews.propTypes = {
	classes: PropTypes.object.isRequired,
	reviews: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProductReviews)