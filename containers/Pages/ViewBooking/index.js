import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { Grid, TextField } from '@material-ui/core';
import Card from 'components/Card/Loadable';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import SimpleTableBooking from '../../../components/Tables/MaterialTable/components/simpleTableBooking';
import '../../../components/Tables/MaterialTable/style.scss';

const tables = [
  {
    name: 'Luther M. Roach',
    email: 'roach@jourrapide.com',
    phone: '412-206-6478',
    status: 'arrived',
  },
  {
    name: 'Rosemary F. Goebel',
    email: 'goebel@jourrapide.com',
    phone: '979 - 488 - 2394',
    status: 'departed',
  },
  {
    name: 'Jarvis M. Wells',
    email: 'JarvisMWells@rhyta.com',
    phone: '605-855 - 8626',
    status: 'confirmed',
  },
  {
    name: 'Luther M. Roach',
    email: 'roach@jourrapide.com',
    phone: '412-206-6478',
    status: 'pending',
  },
  {
    name: 'Rosemary F. Goebel',
    email: 'goebel@jourrapide.com',
    phone: '979 - 488 - 2394',
    status: 'departed',
  },
];
const tablehead = ['#', 'Name', 'Email', 'Phone', 'Status', 'Action'];
const ViewBooking = () => {
  return (
    <Fragment>
      <Helmet>
        <title>View Booking</title>
        {/* <meta name="description" content="Description of MaterialTable" /> */}
      </Helmet>
      <Grid container spacing={3}>
        <Grid item xl={6} md={6} sm={12} xs={12}>
          <Link to="/add-booking">
            <Fab
              color="primary"
              aria-label="add"
              size="small"
              align="right"
              style={{ marginRight: 20 }}
            >
              <AddIcon />
            </Fab>
          </Link>
          <b>Add Booking </b>
        </Grid>
        <Grid item xl={6} md={6} sm={12} xs={12}>
          <TextField
            label="Search"
            placeholder="Booking ID"
            type="search"
            className="inputField"
            fullWidth
            variant="outlined"
          />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <SimpleTableBooking tablehead={tablehead} tablebody={tables} />
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(ViewBooking);
