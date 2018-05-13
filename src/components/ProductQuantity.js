import React from 'react'
import { withStyles } from 'material-ui';
//import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const ProductQuantity = props => {
    const { classes = {} } = props

    return (
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
    )
}

const styles = {
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
	}
}

export default withStyles(styles)(ProductQuantity)