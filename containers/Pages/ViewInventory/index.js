import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { Grid, TextField } from '@material-ui/core';
import Card from 'components/Card/Loadable';
import Fab from '@material-ui/core/Fab';
import { Link } from 'react-router-dom';
import { Badge, CardBody, Table } from 'reactstrap';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

import SimpleTableBooking from '../../../components/Tables/MaterialTable/components/simpleTableBooking';
//mport '../../../containers/Pages/Inventory/style.scss';
//import Icon from '@material-ui/core/Icon';
import './style.scss';

//import DeleteIcon from '@material-ui/icons/Delete';

import messages from './messages';

const ViewInventory = () => {
  return (
    <Fragment>
      <Helmet>
        <title>View Inventory</title>
        {/* <meta name="description" content="Description of MaterialTable" /> */}
      </Helmet>
      <Grid container spacing={3}>
        <Grid item xl={6} md={6} sm={12} xs={12}>
          <Link to="/add-item">
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
          <b>Add Item </b>
        </Grid>
        <Grid item xl={6} md={6} sm={12} xs={12}>
          <TextField
            label="Search"
            placeholder="ID"
            type="search"
            className="inputField"
            fullWidth
            variant="outlined"
          />
        </Grid>
      </Grid>

      <Grid container spacing={3} className="tableResponsive">
        <Grid item xs={12}>
          <Card>
            <CardBody item xl={12} md={12} sm={12} xs={12}>
              <Table>
                <table className="content">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Category</th>
                      <th>Location</th>
                      <th>Quantity</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="tr">
                      <td>21312321</td>
                      <td>Bedsheet</td>
                      <td>Room</td>
                      <td>Shelf 4</td>
                      <td>25</td>
                      <td>
                        <Link to="/edit-item">
                          <Fab
                            color="secondary"
                            aria-label="edit"
                            size="small"
                            style={{ marginRight: 10 }}
                          >
                            <EditIcon />
                          </Fab>{' '}
                        </Link>
                      </td>
                    </tr>
                    <tr className="te">
                      <td>21312322</td>
                      <td>table</td>
                      <td>Room</td>
                      <td>Shelf 4</td>
                      <td>25</td>
                      <td>
                        <Link to="/edit-item">
                          <Fab
                            color="secondary"
                            aria-label="edit"
                            size="small"
                            style={{ marginRight: 10 }}
                          >
                            <EditIcon />
                          </Fab>{' '}
                        </Link>
                      </td>
                    </tr>
                    <tr className="tr">
                      <td>21312323</td>
                      <td>chair</td>
                      <td>Room</td>
                      <td>Shelf 4 </td>
                      <td>25</td>
                      <td>
                        <Link to="/edit-item">
                          <Fab
                            color="secondary"
                            aria-label="edit"
                            size="small"
                            style={{ marginRight: 10 }}
                          >
                            <EditIcon />
                          </Fab>{' '}
                        </Link>
                      </td>
                    </tr>
                    <tr className="te">
                      <td>21312324</td>
                      <td>pillow</td>
                      <td>Room</td>
                      <td>Shelf 4</td>
                      <td>25</td>
                      <td>
                        <Link to="/edit-item">
                          <Fab
                            color="secondary"
                            aria-label="edit"
                            size="small"
                            style={{ marginRight: 10 }}
                          >
                            <EditIcon />
                          </Fab>{' '}
                        </Link>
                      </td>
                    </tr>
                    <tr className="tr">
                      <td>21312325</td>
                      <td>table</td>
                      <td>Room</td>
                      <td>Shelf 4</td>
                      <td>25</td>
                      <td>
                        <Link to="/edit-item">
                          <Fab
                            color="secondary"
                            aria-label="edit"
                            size="small"
                            style={{ marginRight: 10 }}
                          >
                            <EditIcon />
                          </Fab>{' '}
                        </Link>
                      </td>
                    </tr>
                    <tr className="te">
                      <td>21312326</td>
                      <td>table</td>
                      <td>Room</td>
                      <td>Shelf 4</td>
                      <td>25</td>
                      <td>
                        <Link to="/edit-item">
                          <Fab
                            color="secondary"
                            aria-label="edit"
                            size="small"
                            style={{ marginRight: 10 }}
                          >
                            <EditIcon />
                          </Fab>{' '}
                        </Link>
                      </td>
                    </tr>
                    <tr className="tr">
                      <td>21312327</td>
                      <td>table</td>
                      <td>Room</td>
                      <td>Shelf 4</td>
                      <td>25</td>
                      <td>
                        <Link to="/edit-item">
                          <Fab
                            color="secondary"
                            aria-label="edit"
                            size="small"
                            style={{ marginRight: 10 }}
                          >
                            <EditIcon />
                          </Fab>{' '}
                        </Link>
                      </td>
                    </tr>
                    <tr className="te">
                      <td>21312328</td>
                      <td>table</td>
                      <td>Room</td>
                      <td>Shelf 4</td>
                      <td>25</td>
                      <td>
                        <Link to="/edit-item">
                          <Fab
                            color="secondary"
                            aria-label="edit"
                            size="small"
                            style={{ marginRight: 10 }}
                          >
                            <EditIcon />
                          </Fab>{' '}
                        </Link>
                      </td>
                    </tr>
                    <tr className="tr">
                      <td>21312329</td>
                      <td>table</td>
                      <td>Room</td>
                      <td>Shelf 4 </td>
                      <td>25</td>
                      <td>
                        <Link to="/edit-item">
                          <Fab
                            color="secondary"
                            aria-label="edit"
                            size="small"
                            style={{ marginRight: 10 }}
                          >
                            <EditIcon />
                          </Fab>{' '}
                        </Link>
                      </td>
                    </tr>
                    <tr className="te">
                      <td>21312330</td>
                      <td>table</td>
                      <td>Room</td>
                      <td>Shelf 4</td>
                      <td>25</td>
                      <td>
                        <Link to="/edit-item">
                          <Fab
                            color="secondary"
                            aria-label="edit"
                            size="small"
                            style={{ marginRight: 10 }}
                          >
                            <EditIcon />
                          </Fab>{' '}
                        </Link>
                      </td>
                    </tr>
                    <tr className="tr">
                      <td>21312331</td>
                      <td>table</td>
                      <td>Room</td>
                      <td>Shelf 4</td>
                      <td>25</td>
                      <td>
                        <Link to="/edit-item">
                          <Fab
                            color="secondary"
                            aria-label="edit"
                            size="small"
                            style={{ marginRight: 10 }}
                          >
                            <EditIcon />
                          </Fab>{' '}
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Table>
            </CardBody>
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

export default compose(withConnect)(ViewInventory);
