import React, {Component} from 'react'
import Slider from 'react-slick'
import { withStyles } from 'material-ui'

class ProductGallery extends Component {
	state = {
		primaryImage: '',
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		return {
			primaryImage: nextProps.images.PrimaryImage[0].image
		}
	}

	updatePrimaryImage = (altImage) => {
		this.setState({primaryImage: altImage.image})
	}

	render() {
		const {classes = {}, images} = this.props
		const {primaryImage} = this.state

		const settings = {
			dots: false,
			infinite: true,
			speed: 2000,
			slidesToShow: 1,
			slidesToScroll: 1,
			focusOnSelect: true,
			autoplay: false,
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
						{images.AlternateImages && images.AlternateImages.length > 0 && images.AlternateImages.map((altImage, index) => (
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
		margin: '30px auto 0px auto',
	}
}

export default withStyles(styles)(ProductGallery)