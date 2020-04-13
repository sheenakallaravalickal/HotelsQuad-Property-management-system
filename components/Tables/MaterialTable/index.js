import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { Grid } from '@material-ui/core';
import Card from 'components/Card/Loadable';
import messages from './messages';
import SimpleTableBooking from './components/simpleTableBooking';
import './style.scss';

// images
import image from 'images/team/img1.jpg';
import image2 from 'images/team/img2.jpg';
import image3 from 'images/team/img3.jpg';

const tables = [
  {
    image: image,
    name: 'Luther M. Roach',
    email: 'roach@jourrapide.com',
    phone: '412-206-6478',
    status: 'active',
  },
  {
    image: image2,
    name: 'Rosemary F. Goebel',
    email: 'goebel@jourrapide.com',
    phone: '979 - 488 - 2394',
    status: 'inactive',
  },
  {
    image: image3,
    name: 'Jarvis M. Wells',
    email: 'JarvisMWells@rhyta.com',
    phone: '605-855 - 8626',
    status: 'pending',
  },
  {
    image: image,
    name: 'Luther M. Roach',
    email: 'roach@jourrapide.com',
    phone: '412-206-6478',
    status: 'active',
  },
  {
    image: image2,
    name: 'Rosemary F. Goebel',
    email: 'goebel@jourrapide.com',
    phone: '979 - 488 - 2394',
    status: 'inactive',
  },
];
const tablehead = ['#', 'image', 'Name', 'Email', 'Phone', 'Status'];

const MaterialTable = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Material Table</title>
        <meta name="description" content="Description of MaterialTable" />
      </Helmet>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card title="Simple Table">
            <SimpleTable tablehead={tablehead} tablebody={tables} />
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card title="Simple TableBooking">
            <SimpleTableBooking tablehead={tablehead} tablebody={tables} />
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card title="Sorting & Selecting ">
            <EnhancedTable />
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card title="Customized Tables">
            <CustomizedTables className="customizedTables" />
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card title="Custom Table Pagination Action">
            <CustomPaginationActionsTable />
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card title="Spanning Table">
            <SpanningTable />
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card title="Virtualized Table">
            <ReactVirtualizedTable />
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

export default compose(withConnect)(MaterialTable);
