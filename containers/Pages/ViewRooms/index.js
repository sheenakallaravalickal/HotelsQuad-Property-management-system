import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { Grid, TextField, Slider, withStyles } from '@material-ui/core'
import Card from 'components/Card/Loadable'
import '../../../components/Forms/InputComponent/style.scss'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Badge, CardBody, Table } from 'reactstrap';
import {Link} from "react-router-dom";
// import SimpleTable from '../../../components/Tables/MaterialTable/components/simpleTable'
// import '../../../components/Tables/MaterialTable/style.scss'
import OutlinedTextFields from '../../../components/Forms/InputComponent/components/outline'



import './style.scss'
import messages from './messages';


const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus,&:hover,&$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);
const ViewRooms = () => {
  return (
    <Fragment>
      <Helmet>
        <title>View Rooms</title>
      </Helmet>
      <Grid container spacing={3}>
        <Grid item xl={4} md={4} sm={12} xs={12}>
          <Link to="/add-rooms">
            <Fab color="primary" size="small" aria-label="add" style={{marginRight: 20}} >
              <AddIcon />
            </Fab> 
          </Link> <b>Add New</b>
        </Grid>
        <Grid item xl={4} md={4} sm={12} xs={12} className="sliderMain">
          <p>Sort By Bed Capacity </p> 
          <PrettoSlider
            valueLabelDisplay="auto"
            defaultValue={20}
          />
        </Grid> 
        <Grid item xl={4} md={4} sm={12} xs={12}>
          <TextField
            label="Search"
            type="search"
            className='inputField'
            fullWidth
            variant="outlined"
          />
        </Grid >
        
        {/* //<div className={classes.root}> */}
        
      

        <Grid item xs={12}>
          <Card>
            <CardBody item xl={12} md={12} sm={12} xs={12}>
        
              <Grid className="tableResponsive">
                <Table>
                  <table className="content">
              
	      <thead>
                      <tr>
                        <th>Room Number</th>
                        <th>Room Type</th>
                        <th>Ac/Non Ac</th>
                        <th>Bed Capacity</th>
                        <th>Phone</th>
                        <th>Rent</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr className="tr">
                        <td>101</td>
                        <td>Single</td>
                        <td>Ac</td>
                        <td>5</td>
                        <td>412-206-6478</td>
                        <td>350</td>
                        <td>
                          <Badge color="success">Active</Badge>
                        </td>
                        <td>  
                          <Link to="/edit-rooms"><Fab color="secondary" aria-label="edit" size="small" style={{ marginRight: 10 }}><EditIcon /></Fab> </Link>
                          <Fab color="secondary" aria-label="delete" size="small"><DeleteIcon /></Fab> 
                        </td>
                        
                      </tr>

                      <tr className="te">
                        <td>102</td>
                        <td>Double</td>
                        <td>Ac</td>
                        <td>5</td>
                        <td>412-206-6478</td>
                        <td>350</td>
                        <td>
                          <Badge color="secondary">Inactive</Badge>
                        </td>
                        <td>  
                          <Link to="/edit-rooms"><Fab color="secondary" aria-label="edit" size="small" style={{ marginRight: 10 }}><EditIcon /></Fab> </Link>
                          <Fab color="secondary" aria-label="delete" size="small"><DeleteIcon /></Fab> 
                        </td>
                        
                      </tr>

                      <tr className="tr">
                        <td>103</td>
                        <td>Quad</td>
                        <td>Ac</td>
                        <td>5</td>
                        <td>979 - 488 - 2394</td>
                        <td>350</td>
                        <td>
                          <Badge color="warning">Pending</Badge>
                        </td>
                        <td>  
                          <Link to="/edit-rooms"><Fab color="secondary" aria-label="edit" size="small" style={{ marginRight: 10 }}><EditIcon /></Fab> </Link>
                          <Fab color="secondary" aria-label="delete" size="small"><DeleteIcon /></Fab> 
                        </td>
                        
                      </tr>

                      <tr className="te">
                        <td>104</td>
                        <td>King</td>
                        <td>Ac</td>
                        <td>5</td>
                        <td>412-206-6478</td>
                        <td>350</td>
                        <td>
                          <Badge color="success">Active</Badge>
                        </td>
                        <td>  
                          <Link to="/edit-rooms"><Fab color="secondary" aria-label="edit" size="small" style={{ marginRight: 10 }}><EditIcon /></Fab> </Link>
                          <Fab color="secondary" aria-label="delete" size="small"><DeleteIcon /></Fab> 
                        </td>
                        
                      </tr>

                      <tr className="tr">
                        <td> 105</td>
                        <td>Queen</td>
                        <td>Ac</td>
                        <td>5</td>
                        <td>979 - 488 - 2394</td>
                        <td>350</td>
                        <td>
                          <Badge color="success">Active</Badge>
                        </td>
                        <td>  
                          <Link to="/edit-rooms"><Fab color="secondary" aria-label="edit" size="small" style={{ marginRight: 10 }}><EditIcon /></Fab> </Link>
                          <Fab color="secondary" aria-label="delete" size="small"><DeleteIcon /></Fab> 
                        </td>
                        
                      </tr>

                      <tr className="te">
                        <td>106</td>
                        <td>Single</td>
                        <td>Non Ac</td>
                        <td>5</td>
                        <td>979 - 488 - 2394</td>
                        <td>350</td>
                        <td>
                          <Badge color="success">Active</Badge>
                        </td>
                        <td>  
                          <Link to="/edit-rooms"><Fab color="secondary" aria-label="edit" size="small" style={{ marginRight: 10 }}><EditIcon /></Fab> </Link>
                          <Fab color="secondary" aria-label="delete" size="small"><DeleteIcon /></Fab> 
                        </td>
                        
                      </tr>

                      <tr className="tr">
                        <td>107</td>
                        <td>Double</td>
                        <td>Non Ac</td>
                        <td>5</td>
                        <td>412-206-6478</td>
                        <td>350</td>
                        <td>
                          <Badge color="danger">Banned</Badge>
                        </td>
                        <td>  
                          <Link to="/edit-rooms"><Fab color="secondary" aria-label="edit" size="small" style={{ marginRight: 10 }}><EditIcon /></Fab> </Link>
                          <Fab color="secondary" aria-label="delete" size="small"><DeleteIcon /></Fab> 
                        </td>
                        
                      </tr>

                      <tr className="te">
                        <td>108</td>
                        <td>Quad</td>
                        <td>Non Ac</td>
                        <td>5</td>
                        <td>979 - 488 - 2394</td>
                        <td>350</td>
                        <td>
                          <Badge color="secondary">Inactive</Badge>
                        </td>
                        <td>  
                          <Link to="/edit-rooms"><Fab color="secondary" aria-label="edit" size="small" style={{ marginRight: 10 }}><EditIcon /></Fab> </Link>
                          <Fab color="secondary" aria-label="delete" size="small"><DeleteIcon /></Fab> 
                        </td>
                       
                      </tr>

                      <tr className="tr">
                        <td>109</td>
                        <td>King</td>
                        <td>Non Ac</td>
                        <td>5</td>
                        <td>979 - 488 - 2394</td>
                        <td>350</td>
                        <td>
                          <Badge color="warning">Pending</Badge>
                        </td>
                        <td>  
                          <Link to="/edit-rooms"><Fab color="secondary" aria-label="edit" size="small" style={{ marginRight: 10 }}><EditIcon /></Fab> </Link>
                          <Fab color="secondary" aria-label="delete" size="small"><DeleteIcon /></Fab> 
                        </td>
                        
                      </tr>

                      <tr className="te">
                        <td>110</td>
                        <td>Queen</td>
                        <td>Non Ac</td>
                        <td>5</td>
                        <td>412-206-6478</td>
                        <td>350</td>
                        <td>
                          <Badge color="success">Active</Badge>
                        </td>
                        <td>  
                          <Link to="/edit-rooms"><Fab color="secondary" aria-label="edit" size="small" style={{ marginRight: 10 }}><EditIcon /></Fab> </Link>
                          <Fab color="secondary" aria-label="delete" size="small"><DeleteIcon /></Fab> 
                        </td>
                       
                      </tr>

                    </tbody>

                  </table>
                </Table>
              </Grid>
            </CardBody> 
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

export default compose(withConnect)(ViewRooms);
