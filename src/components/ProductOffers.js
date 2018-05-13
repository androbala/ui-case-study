import React from 'react'
import { withStyles } from 'material-ui';

const ProductOffers = props => {
    return (
        <ul className={props.classes.promoText}>
            <li>spend $50, ship free</li>
            <li>$25 gift card with purchase of a select Ninja Blender</li>
        </ul>
    )
}

const styles = {
    promoText: {
		fontSize: '20px',
		color: 'red',
	}
}

export default withStyles(styles)(ProductOffers)