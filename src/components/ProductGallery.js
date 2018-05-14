import React from 'react'
import Slider from 'react-slick'
import { withStyles } from 'material-ui'

const ProductGallery = props => {
    const { classes = {}, images } = props

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
    }

    return (
        <React.Fragment>
            <div>
                <img src={images.PrimaryImage[0].image} className={classes.primaryImage}/>
            </div>
            <div className={classes.slider}>
                <Slider {...settings}>
					{images.AlternateImages && images.AlternateImages.length>0 && images.AlternateImages.map((AlternateImage, index) => (
                        <div key={index}>
                            <img src={AlternateImage.image} className={classes.secondaryImage}/>
                        </div>
					))}
                </Slider>
            </div>
        </React.Fragment>
    )
}

const styles = {
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
	}
}

export default withStyles(styles)(ProductGallery)