import React from 'react'
import { withStyles } from 'material-ui'
import Typography from 'material-ui/Typography'

const ProductHighlights = props => {
    const { classes = {} } = props

    return (
        <div>
            <Typography variant="headline" gutterBottom>
                product highlights
            </Typography>
            <ul className={classes.highlightsItem}>
                <li>Wattage Output: 1100 Watts</li>
                <li>Number of Speeds: 3</li>
                <li>Capacity (volume): 72.0 Oz.</li>
                <li>Appliance Capabilties: Blends</li>
                <li>Includes: Travel Lid</li>
                <li>Material: Plastics</li>
                <li>Finish: Painted</li>
                <li>Metal Finish: Chrome</li>
                <li>Safety and Security Features: Non-Slip Base</li>
                <li>Care and Cleaning: Easy-To-Clean, Dishwasher Sage Parts</li>
            </ul>
        </div>
    )
}

const styles = {
    highlightsItem: {}
}

export default withStyles(styles)(ProductHighlights)
