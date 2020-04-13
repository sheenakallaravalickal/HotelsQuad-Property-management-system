import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core'
import './style.scss'

const featureds = {
    booking: {
        value: '78',
        name:'Total Booking',
    },
    room: {
        value: '284',
        name: 'Available Rooms',
    },
    checkin: {
        value: '84',
        name: 'CheckIn',
    },
    checkout: {
        value: '15',
        name: 'CheckOut',
    },
}


const AnalyticFeatured = () => {
    const { booking, room, checkin, checkout } = featureds;
    return (
        <Fragment>
            <Grid item lg={3} sm={6} xs={12}>
                <Grid className="analyticFeaturedWrap">
                    <Grid className="analyticFeaturedContent">
                        <p>{booking.name}</p>
                        <h3>{booking.value}</h3>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
                <Grid className="analyticFeaturedWrap">
                    <Grid className="analyticFeaturedContent">
                        <p>{room.name}</p>
                        <h3>{room.value}</h3>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
                <Grid className="analyticFeaturedWrap">
                    <Grid className="analyticFeaturedContent">
                        <p>{checkin.name}</p>
                        <h3>{checkin.value}</h3>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
                <Grid className="analyticFeaturedWrap">
                    <Grid className="analyticFeaturedContent">
                        <p>{checkout.name}</p>
                        <h3>{checkout.value}</h3>
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    );
}
export default AnalyticFeatured;
