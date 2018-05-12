import React, { Component } from 'react';
import './App.css';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import classNames from 'classnames';

import Button from 'material-ui/Button';
import red from 'material-ui/colors/red';
import Typography from 'material-ui/Typography';

const styles = theme => ({
	root: {
		flexGrow: 1,
		height: '100vh',
	},
	container: {
		//backgroundColor: '#00ff00',
		marginTop: 50,
	},
	leftSection: {
		backgroundColor: '#ffff00',
		textAlign: 'center',
		padding: 15,
	},
	rightSection: {
		//backgroundColor: '#ffff00',
		padding: 15,
	},
	price: {
		fontSize: '25px'
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
	},
	reviewsText: {
		float: 'right',
	},
	commentsSection: {
		backgroundColor: 'grey',
		textAlign: 'left',
		marginTop: 25,
	},
	proSection: {
		float: 'left',
		width: '50%',
	},
	conSection: {
		float: 'right',
		width: '50%',
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
							<div>
								Ninja Profession Blender
								with Single Serve Blending Cups
							</div>
							<div>
								<img src='http://target.scene7.com/is/image/Target/14263758' />
							</div>
						</div>
					</Grid>
					<Grid item xs={12} sm={10} md={4} alignContent={'flex-start'}>
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

							<div>
								<input type={'text'} value={'quantity:'}/>
							</div>

							<div style={{'text-align': 'center'}}>
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

							<div style={{'text-align': 'center'}}>
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
								<span className={classes.ratingsText}>*****overall</span>
								<span className={classes.reviewsText}>view all 14 reviews</span>
							</div>
							<div style={{'clear': 'both'}}></div>
							<div className={classes.commentsSection}>
								<div className={classes.proSection}>
									PRO
									<p>
										Fantastic Blender
									</p>
								</div>
								<div className={classes.conSection}>
									CON
									<p>
										Very unhappy
									</p>
								</div>
							</div>
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
