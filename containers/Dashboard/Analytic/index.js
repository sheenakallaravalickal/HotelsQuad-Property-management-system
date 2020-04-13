import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { Grid } from '@material-ui/core';

import './style.scss';

// components
import AnalyticFeatured from 'components/Dashboard/Analytic/Featured/Loadable';
import WebsiteVisitors from 'components/Dashboard/Analytic/WebsiteVisitors/Loadable';
import messages from './messages';
import BarRechart from '../../../components/Chart/ReChart/components/bar';
import LineRechart from '../../../components/Chart/ReChart/components/line';
import ReactCircleSlider from '../../../components/Dashboard/Analytic/ReactCircleSlider';

import Card from '../../../components/Card';

const DashboardAnalytic = () => (
  <Fragment>
    <Helmet>
      <title>Dashboard </title>
    </Helmet>
    <Grid container spacing={3}>
      <AnalyticFeatured />
      <Grid item lg={9} xs={12}>
        <Card title="Booking Growth">
          <BarRechart />
        </Card>
      </Grid>
      <Grid item lg={3} xs={12}>
        <Card title="Hotel Visitors">
          <WebsiteVisitors />
        </Card>
      </Grid>
      <Grid item lg={3} xs={12}>
        <Grid container spacing={3}>
          <Grid item lg={12} sm={6} xs={12}>
            <Card title="CheckIn">
              <ReactCircleSlider
                percentage={64}
                progressColor="#F1682C"
                circleColor="#FEF0EA"
              />
            </Card>
          </Grid>
          <Grid item lg={12} sm={6} xs={12}>
            <Card title="CheckOut">
              <ReactCircleSlider
                percentage={45}
                progressColor="#BD20D3"
                circleColor="#F8E9FB"
              />
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={9} xs={12}>
        <Card title="Customer Rating">
          <LineRechart />
        </Card>
      </Grid>
      
    </Grid>
  </Fragment>
);

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(DashboardAnalytic);
