import React, { Fragment, useState } from 'react';
import {
  Badge,
  CardBody,
  Table,
} from 'reactstrap';

import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import {
  Grid,
  TextField,
} from '@material-ui/core';
import Card from 'components/Card/Loadable';

import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import firebase from '../AddBooking/firebase.js'
import './style.scss'

const ViewBooking = () => {
  const [AddBooking,setaddbooking] = React.useState([])
  

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      db.collection("AddBooking")
        .onSnapshot(function(data){
          console.log(data)
          setaddbooking(data.docs.map(doc=>({...doc.data(),id: doc.id})));
        });
    };
    fetchData();
  },[]);



  return (
    <Fragment>
      <Helmet>
        <title>View Booking</title>
      </Helmet>

      				{/* HTML TABLE USING SCSS */}
     
      <Card>
      
        <CardBody item xl={12} md={12} sm={12} xs={12}>
          <Grid>

            <Grid item xl={6} md={6} sm={12} xs={12}>
              <Link to="/add-booking">
                <Fab
                  color="primary"
                  aria-label="add"
                  size="small"
                  style={{ marginRight: 20 }}
                  align="left"
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
                align="right"
              />
            </Grid>

          </Grid>

          <Grid className="tableResponsive">
        
            <Table>
              <table className="content">
              
	            <thead>
                  <tr>
                    <th>Booking Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email-ID</th>
                    <th>Phone No</th>
                    <th>Gender</th>
                    <th>Action</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {AddBooking.map(addbk =>(

                    <tr className="tr">
                      <td>{addbk.bkId}</td>
                      <td>{addbk.fname}</td>
                      <td>{addbk.lname}</td>
                      <td>{addbk.email}</td>
                      <td>{addbk.phone}</td>
                      <td>{addbk.selectedValue}</td>
                      <td>  
                        <Link to="/edit-booking"><Fab color="secondary" aria-label="edit" size="small" style={{ marginRight: 10 }}><EditIcon /></Fab> </Link>
                        <Fab color="secondary" aria-label="delete" size="small"><DeleteIcon /></Fab> 
                      </td>
                      <td>
                        <Badge color="success">{addbk.statusValue}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </Table>
        
          </Grid>
        </CardBody>
          
      </Card>
      
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