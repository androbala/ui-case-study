import React from 'react'
import Slider from "react-slick";
import { withStyles } from 'material-ui';

const ProductGallery = props => {
    const { classes = {} } = props
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