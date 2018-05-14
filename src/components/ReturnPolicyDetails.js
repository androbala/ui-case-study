import React from 'react'
import { withStyles } from 'material-ui';

const ReturnPolicyDetails = props => {
    const { classes = {} } = props
    
    return (
        <div style={{}}>
            <span className={classes.returnsLabel}>
                returns |
            </span>
            <span className={classes.returnsLabel}>
                This item must be returned within 30 days of the ship date. See return policy for details.
                Prices, promotions, styles and availability may vary by store and online.
            </span>
        </div>
    )
}

const styles = {
    returnsLabel: {}
}

export default withStyles(styles)(ReturnPolicyDetails)