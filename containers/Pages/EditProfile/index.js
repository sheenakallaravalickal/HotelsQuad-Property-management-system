import React, { Component } from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Card from 'components/Card/Loadable'
import { Grid, TextField, OutlinedInput, FormControl, Select, Button } from '@material-ui/core'
import './style.scss'
class EditProfile extends Component {
    state = {
      first_name: 'Jone',
      last_name: 'Doe',
      email: 'Jone@gmail.com',
      phone: '+1575454598',
      address: 'USA',
      zip_code: '1564454',
      status: 'Admin',
      date_of_birth: '30/12/1997'
    }
    changeHandler = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
    render() {
      return (
        <Card
          title="Edit Profile"
          className="editProfile"
        >
          <Grid container spacing={3}>
            <Grid item sm={6} xs={12}>
              <label htmlFor="first_name">First name</label>
              <TextField
                name="first_name"
                variant="outlined"
                className="textField"
                fullWidth
                value={this.state.first_name}
                onChange={this.changeHandler}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <label htmlFor="last_name">Last name</label>
              <TextField
                name="last_name"
                variant="outlined"
                className="textField"
                fullWidth
                value={this.state.last_name}
                onChange={this.changeHandler}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <label htmlFor="email">Email</label>
              <TextField
                type="email"
                name="email"
                variant="outlined"
                className="textField"
                fullWidth
                value={this.state.email}
                onChange={this.changeHandler}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <label htmlFor="phone">Phone</label>
              <TextField
                name="phone"
                variant="outlined"
                className="textField"
                fullWidth
                value={this.state.phone}
                onChange={this.changeHandler}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <label htmlFor="first_name">Address</label>
              <TextField
                name="address"
                variant="outlined"
                className="textField"
                fullWidth
                value={this.state.address}
                onChange={this.changeHandler}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <label htmlFor="first_name">Zip Code</label>
              <TextField
                name="zip_code"
                variant="outlined"
                className="textField"
                fullWidth
                value={this.state.zip_code}
                onChange={this.changeHandler}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <label htmlFor="first_name">Zip Code</label>
              <FormControl fullWidth className="textField" variant="outlined">
                <Select
                  native
                  name="zip_code"
                  variant="outlined"
                  value={this.state.zip_code}
                  onChange={this.changeHandler}
                  input={
                    <OutlinedInput name="age" id="outlined-age-native-simple" />
                  }
                >
                  <option value={10}>user</option>
                  <option value={20}>Admin</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={6} xs={12}>
              <label htmlFor="date">Date Of Birth</label>
              <TextField
                name="date_of_birth"
                variant="outlined"
                className="textField"
                fullWidth
                value={this.state.date_of_birth}
                onChange={this.changeHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <Button className="btn bg-default">Update</Button>
            </Grid>
          </Grid>
        </Card>
      )
    }
}

export default EditProfile;
