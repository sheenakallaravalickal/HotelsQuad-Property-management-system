import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import Card from 'components/Card/Loadable'
import { Grid } from '@material-ui/core'
import BarRechart from './components/bar'
import LineRechart from './components/line'
import './style.scss'
const ReChart = () => {
    return (
        <Fragment>
            <Helmet>
                <title>ReChart</title>
            </Helmet>
            <Grid container spacing={2}>
                <Grid item lg={6} xs={12}>
                    <Card
                        title="Bar Chart With Custom Tooltip">
                        <BarRechart />
                    </Card>
                </Grid>
                <Grid item lg={6} xs={12}>
                    <Card
                        title="Line Chart">
                        <LineRechart />
                    </Card>
                </Grid>
            </Grid>
        </Fragment>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
    };
}

const withConnect = connect(
    null,
    mapDispatchToProps,
);

export default compose(withConnect)(ReChart);
