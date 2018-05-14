import React, { Component } from 'react';

import "./../node_modules/slick-carousel/slick/slick.css";
import "./../node_modules/slick-carousel/slick/slick-theme.css";
import './../node_modules/font-awesome/css/font-awesome.min.css';

import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import red from 'material-ui/colors/red';
//import FontAwesome from "react-fontawesome";
//todo: might not be used

import ProductTitle from './components/ProductTitle'
import ProductGallery from './components/ProductGallery'
import PriceBlock from './components/PriceBlock'
import ProductOffers from './components/ProductOffers'
import ProductQuantity from './components/ProductQuantity'
import FullfillmentOptions from './components/FullfillmentOptions'
import AddToCartButton from './components/AddToCartButton'
import ReturnPolicyDetails from './components/ReturnPolicyDetails'
import ProductHighlights from './components/ProductHighlights'
import NamelessButtons from './components/NamelessButtons'
import ProductRating from './components/ProductRating'
import ProductReviews from './components/ProductReviews'

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
	}
});


class App extends Component {
	state = {
		direction: 'row',
		justify: 'center',
		alignItems: 'flex-start',
		wrap: 'wrap'
	}

	render() {
		const { classes = {} } = this.props;
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
					<Grid item xs={12} sm={12} md={2} />
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
								<AddToCartButton />
							</div>

							<ReturnPolicyDetails />
							<NamelessButtons />
							<ProductHighlights />
						</div>
					</Grid>
					<Grid item xs={12} sm={12} md={2} />
				</Grid>

				<Grid
					container
					spacing={24}
					alignItems={'flex-start'}
					direction={direction}
					justify={justify}
				>
					<Grid item xs={12} sm={12} md={2} />
					<Grid item xs={12} sm={10} md={4}>
						<div className={classes.leftSection}>
							<ProductRating />
							<ProductReviews />
						</div>
					</Grid>
					<Grid item xs={12} sm={10} md={4} />
					<Grid item xs={12} sm={12} md={2} />
				</Grid>

			</div>
		);
	}
}

App.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
