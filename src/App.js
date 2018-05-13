import React, { Component } from 'react';

import "./../node_modules/slick-carousel/slick/slick.css";
import "./../node_modules/slick-carousel/slick/slick-theme.css";
import './../node_modules/font-awesome/css/font-awesome.min.css';

import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import classNames from 'classnames';

import Button from 'material-ui/Button';
import red from 'material-ui/colors/red';
import Typography from 'material-ui/Typography';

import Rating from "react-rating";
//import FontAwesome from "react-fontawesome";
//todo: might not be used

import ProductTitle from './components/ProductTitle'
import ProductGallery from './components/ProductGallery';
import PriceBlock from './components/PriceBlock';
import ProductOffers from './components/ProductOffers';
import ProductQuantity from './components/ProductQuantity';
import FullfillmentOptions from './components/FullfillmentOptions';

const styles = theme => ({
	root: {
		flexGrow: 1,
		height: '100vh',
	},
	container: {
		//backgroundColor: '#00ff00',
	},
	leftSection: {
		//backgroundColor: '#ffff00',
		textAlign: 'center',
		padding: 15,
	},
	rightSection: {
		//backgroundColor: '#ffff00',
		padding: 15,
		marginTop: 45,
	},
	primaryBtn: {
		marginTop: 25,
		marginRight: 6,
		marginBottom: 15,
		width: '47%',
		fontColor: '#ffffff'
	},
	cartBtn: {
		backgroundColor: '#ff0000',
	},
	secondaryBtn: {
		fontSize: 12,
		width: '30%',
		marginTop: 25,
		marginRight: 8,
		marginBottom: 15,
	},
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
});


class App extends Component {
	state = {
		direction: 'row',
		justify: 'center',
		alignItems: 'flex-start',
		wrap: 'wrap'
	};
	render() {
		const { classes } = this.props;
		const { alignItems, direction, justify } = this.state;

		return (
			<div className={classes.root}>
				<Grid
					container
					spacing={24}
					className={classes.container}
					alignItems={alignItems}
					direction={direction}
					justify={justify}
				>
					<Grid item xs={12} sm={12} md={2}>
					</Grid>
					<Grid item xs={12} sm={10} md={4}>
						<div className={classes.leftSection}>
							<ProductTitle />
							<ProductGallery />
						</div>
					</Grid>
					<Grid item xs={12} sm={10} md={4} >
						<div className={classes.rightSection}>
							<PriceBlock />
							<hr/>
								<ProductOffers />
							<hr/>
							<ProductQuantity />

							<div>
								<FullfillmentOptions />
								<Button
									variant="raised"
									color="primary"
									className={classNames(classes.primaryBtn, classes.cartBtn)}
								>
									ADD TO CART
								</Button>
							</div>

							<div style={{}}>
								<span className={classes.returnsLabel}>
									returns |
								</span>
								<span className={classes.returnsLabel}>
									This item must be returned within 30 days of the ship date. See return policy for details.
									Prices, promotions, styles and availability may vary by store and online.
								</span>
							</div>

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

							<div>
								<Typography variant="headline" gutterBottom>
									product highlights
								</Typography>
								<ul className={classes.highlightsItem}>
									<li>Wattage Output: 1100 Watts</li>
									<li>Number of Speeds: 3</li>
									<li>Capacity (volume): 72.0 Oz.</li>
									<li>Appliance Capabilties: Blends</li>
									<li>Includes: Travel Lid</li>
									<li>Material: Plastics</li>
									<li>Finish: Painted</li>
									<li>Metal Finish: Chrome</li>
									<li>Safety and Security Features: Non-Slip Base</li>
									<li>Care and Cleaning: Easy-To-Clean, Dishwasher Sage Parts</li>
								</ul>
							</div>
						</div>
					</Grid>
					<Grid item xs={12} sm={12} md={2}>
					</Grid>
				</Grid>

				<Grid
					container
					spacing={24}
					alignItems={'flex-start'}
					direction={direction}
					justify={justify}
				>
					<Grid item xs={12} sm={12} md={2}>
					</Grid>
					<Grid item xs={12} sm={10} md={4}>
						<div className={classes.leftSection}>
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
							<div className={classes.commentsSection}>
								<div className={classes.proSection}>
									<div>
										<p>
											PRO <br/>
											Most helpful 4-5 star review
										</p>
									</div>
									<hr/>
									<div>
										<Rating
										emptySymbol="fa fa-star-o fa-1x low"
										fullSymbol="fa fa-star fa-1x low"
										initialRating={5}
										/>
									</div>
									<h4>
										Fantastic Blender
									</h4>
									<p align="left">
										This blender works amazingly, and blends within seconds. The single
										serve cups also work really well for smoothies or protein shakes!
									</p>
									<p>
										<a href="#">
											Eric
										</a>
										April 18, 2013
									</p>
								</div>
								<div className={classes.conSection}>
									<div>
										<p>
											CON <br/>
											Most helpful 4-5 star review
										</p>
									</div>
									<hr/>
									<div>
										<Rating
											emptySymbol="fa fa-star-o fa-1x low"
											fullSymbol="fa fa-star fa-1x low"
											initialRating={1}
										/>
									</div>
									<h4>
										Fantastic Blender
									</h4>
									<p align="left">
										This blender works amazingly, and blends within seconds. The single
										serve cups also work really well for smoothies or protein shakes!
									</p>
									<p>
										<a href="#">
											Eric
										</a>
										April 18, 2013
									</p>
								</div>
							</div>
							<div className="clearfix"></div>
						</div>
					</Grid>
					<Grid item xs={12} sm={10} md={4}>
					</Grid>
					<Grid item xs={12} sm={12} md={2}>
					</Grid>
				</Grid>

			</div>
		);
	}
}

App.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
