import React from 'react'
import { withStyles } from 'material-ui/styles';

const ProductTitle = props => {
    return (
        <p className={props.classes.productTitle}>
            Ninja Profession Blender
            with Single Serve Blending Cups
        </p>
    )
}

const styles = {
	productTitle: {
		fontSize: '28px',
		color: '#7f7f7f',
		align: 'center',
		//backgroundColor: 'yellow',
		padding: 15,
	},
}

export default withStyles(styles)(ProductTitle)