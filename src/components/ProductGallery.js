import React, {Component} from 'react'
import Slider from 'react-slick'
import { withStyles } from 'material-ui'
import {get, map} from 'lodash'

class ProductGallery extends Component {
	state = {
		primaryImage: '',
		altImages: [],
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		return {
			primaryImage: get(nextProps, 'images.PrimaryImage[0].image') || '/assets/img/sorry-image-na.png',
			altImages: get(nextProps, 'images.AlternateImages') || [{image: '/assets/img/sorry-image-na.png'},],
		}
	}

	updatePrimaryImage = (altImage) => this.setState({primaryImage: altImage.image})

	render() {
		const {classes = {}} = this.props
		const {primaryImage, altImages} = this.state

		const settings = {
			dots: false,
			infinite: true,
			speed: 2000,
			slidesToShow: 1,
			slidesToScroll: 1,
			focusOnSelect: true,
			autoplay: true,
			autoplaySpeed: 2000,
			slidesToShow: 3,
			slidesToScroll: 1,
			initOnload: true,
		}

		return (
			<React.Fragment>
				<div>
					<img src={primaryImage} className={classes.primaryImage}/>
				</div>
				<div className={classes.slider}>
					<Slider {...settings}>
						{map(altImages, (altImage, index) => (
							<div key={index} className={classes.imgPlaceholder} onClick={(e) => this.updatePrimaryImage(altImage, e)}>
								<img src={altImage.image} className={classes.secondaryImage}/>
							</div>
						))}
					</Slider>
				</div>
			</React.Fragment>
		)
	}
}

const styles = {
    primaryImage: {
		width: '75%',
		margin: '0 auto',
	},
	secondaryImage: {
		width: '55%',
		margin: '0 auto',
    },
	imgPlaceholder: {
		margin: 5,
	},
    slider: {
		width: '70%',
		margin: '60px auto 0px auto',
	}
}

export default withStyles(styles)(ProductGallery)