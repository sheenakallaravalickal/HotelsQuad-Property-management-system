import React, { Component } from 'react'
import { Grid, Button } from '@material-ui/core'
class DayNames extends Component {
    render() {
        return (
            <Grid className="daysHeader">
                <span className="dayName">Mon</span>
                <span className="dayName">Tue</span>
                <span className="dayName">Wed</span>
                <span className="dayName">Thu</span>
                <span className="dayName">Fri</span>
                <span className="dayName">Sat</span>
                <span className="dayName">Sun</span>
            </Grid>
        );
    }
}
export default DayNames