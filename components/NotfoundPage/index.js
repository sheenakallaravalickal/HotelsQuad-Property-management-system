import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Grid, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './style.scss'
const NotfoundPage = () => {
    return (
        <Grid className="notfoundArea">
            <h2>404</h2>
            <p>Business plan lean startup holy grail disruptive. Crowdfunding beta <span>prototype gen-z incubator niche market.</span></p>
            <div>
                <Button className="btn bg-default btn-radius" component={Link} to="/dashboard">back To Home</Button>
            </div>
        </Grid>
    );
}

export default NotfoundPage;
