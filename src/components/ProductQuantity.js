import React, { Component } from 'react';
import { withStyles } from 'material-ui';
//import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

class ProductQuantity extends Component {
	state = {
		qty: 2,
	}

	addQty = () => {
		let new_qty = this.state.qty + 1;
		this.setState({qty: new_qty})
	}

	removeQty = () => {
		let new_qty;
		if (this.state.qty > 0) {
			new_qty = this.state.qty - 1;
		} else {
			new_qty = 0;
		}
		this.setState({qty: new_qty})
	}

	render() {
		const { classes = {} } = this.props;
		const { qty } = this.state;
		return (
			<div className={classes.qtyDiv}>
				<span className={classes.qtyLbl}>
					quantity:
				</span>
				<span>
					<Button variant="fab" color="default" aria-label="add" className={classes.qtyBtn} onClick={this.addQty}>
						<AddIcon />
					</Button>
				</span>
				<input type="text" className={classes.qtyInput} value={qty} readOnly={true}/>
				<span>
					<Button variant="fab" color="default" aria-label="remove" className={classes.qtyBtn} onClick={this.removeQty}>
						<RemoveIcon />
					</Button>
				</span>
				<div className='clearfix'></div>
			</div>
		)
	}
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
		width: '30px',
		background: 'none',
		border: 'none',
		height: '30px',
		paddingLeft: 20,
		paddingTop: 5,
		fontSize: '16px',
		float: 'right',
	}
}

export default withStyles(styles)(ProductQuantity)