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

//import IconButton from 'material-ui/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import Slider from "react-slick";
import Rating from "react-rating";
//import FontAwesome from "react-fontawesome";
//todo: might not be used

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
	productTitle: {
		fontSize: '28px',
		color: '#7f7f7f',
		align: 'center',
		//backgroundColor: 'yellow',
		padding: 15,
	},
	primaryImage: {
		width: '70%',
		margin: '0 auto',
	},
	secondaryImage: {
		width: '50%',
		margin: '0 auto',
	},
	slider: {
		width: '80%',
		margin: '20px auto 0px auto',
	},
	price: {
		fontSize: '27px'
	},
	smText: {
		fontSize: '12px',
		color: 'grey',
		marginLeft: 10
	},
	promoText: {
		fontSize: '20px',
		color: 'red',
	},
	qtyDiv: {
		border: '1px solid #EFEFEF',
		boxShadow: '1px 2px #EFEFEF',
		marginTop: 20,
		padding: '5px 5px 8px 5px',
		width: '60%',
		fontSize: '18px',
		color: '#5e5e5e'
	},
	qtyBtn: {
		width: '35px',
		height: '0px',
		float: 'right',
	},
	qtyLbl: {
		marginTop: 8,
		marginRight: 2,
		float: 'left',
	},
	qtyInput: {
		width: '40px',
		background: 'none',
		border: 'none',
		height: '30px',
		paddingLeft: 10,
		fontSize: '15px',
		float: 'right',
	},
	primaryBtn: {
		marginTop: 25,
		marginRight: 6,
		marginBottom: 15,
		width: '47%',
		fontColor: '#ffffff'
	},
	pickupBtn: {
		backgroundColor: '#000000',
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
		const settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			focusOnSelect: true,
			autoplay: true,
			autoplaySpeed: 1000,
			slidesToShow: 3,
			slidesToScroll: 1,
			initOnload: true,
		};

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
							<p className={classes.productTitle}>
									Ninja Profession Blender
									with Single Serve Blending Cups
							</p>
							<div>
								<img src='http://target.scene7.com/is/image/Target/14263758' className={classes.primaryImage}/>
							</div>
							<div className={classes.slider}>
								<Slider {...settings}>
									<div>
										<img src='http://target.scene7.com/is/image/Target/14263758_Alt01' className={classes.secondaryImage}/>
									</div>
									<div>
										<img src='http://target.scene7.com/is/image/Target/14263758_Alt02' className={classes.secondaryImage}/>
									</div>
									<div>
										<img src='http://target.scene7.com/is/image/Target/14263758_Alt03' className={classes.secondaryImage}/>
									</div>
									<div>
										<img src='http://target.scene7.com/is/image/Target/14263758_Alt04' className={classes.secondaryImage}/>
									</div>
								</Slider>
							</div>
						</div>
					</Grid>
					<Grid item xs={12} sm={10} md={4} >
						<div className={classes.rightSection}>
							<div>
								<span className={classes.price}>
									$139.99
								</span>
								<span className={classes.smText}>
									online price
								</span>
							</div>

							<hr/>
								<ul className={classes.promoText}>
									<li>spend $50, ship free</li>
									<li>$25 gift card with purchase of a select Ninja Blender</li>
								</ul>
							<hr/>

							<div className={classes.qtyDiv}>
								<span className={classes.qtyLbl}>
									quantity:
								</span>
								<span>
									<Button variant="fab" color="default" aria-label="add" className={classes.qtyBtn}>
										<RemoveIcon />
									</Button>
								</span>
								<input type="text" className={classes.qtyInput} defaultValue={100}/>
								<span>
									<Button variant="fab" color="default" aria-label="add" className={classes.qtyBtn}>
										<AddIcon />
									</Button>
								</span>
								<div className='clearfix'></div>
							</div>

							<div>
								<Button
									variant="raised"
									color="primary"
									className={classNames(classes.primaryBtn, classes.pickupBtn)}
								>
									PICKUP IN STORE
								</Button>

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
