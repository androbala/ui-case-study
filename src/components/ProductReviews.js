import React from 'react'
import { withStyles } from 'material-ui'
import Rating from 'react-rating'

const ProductReviews = props => {
    const { classes = {} } = props

    return (
        <React.Fragment>
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
	}
}

export default withStyles(styles)(ProductReviews)