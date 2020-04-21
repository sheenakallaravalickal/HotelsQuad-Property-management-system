import React, { Fragment, useState } from 'react';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import {
  makeStyles,
  Grid,
  MenuItem,
  FormControlLabel,
  TextField,
  Radio,
} from '@material-ui/core';
import Card from 'components/Card/Loadable';
import firebase from './firebase';

const useStyles = makeStyles(() => ({
  menu: {
    width: 200,
  },
}));

const rooms = [
  {
    value: 'single',
    label: 'Single',
  },
  {
    value: 'double',
    label: 'Double',
  },
  {
    value: 'quad',
    label: 'Quad',
  },
  {
    value: 'king',
    label: 'King',
  },
  {
    value: 'queen',
    label: 'Queen',
  },
];

const AddBooking = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState('');

  const [selectedValue, setSelectedValue] = React.useState('');
  const [statusValue, setStatusValue] = React.useState('');

  function radioChangeHandler(event) {
    setSelectedValue(event.target.value);
  }

  function radioChange2Handler(event) {
    setStatusValue(event.target.value);
  }

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  const [selectedDate, handleDateChange] = useState(new Date());
  const [selectedDate2, handleDate2Change] = useState(new Date());
  const [selectedTime, handleTimeChange] = useState(new Date());
  const [selectedTime2, handleTime2Change] = useState(new Date());

  const [bkId, setBkId] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhn] = useState('');
  const [guestno, setGuest] = useState('');

  function onSubmit(e) {
    e.preventDefault();

    firebase
      .firestore()
      .collection('AddBooking')
      .add({
        bkId,
        fname,
        lname,
        email,
        phone,
        guestno,
        selectedValue,
        values,
        statusValue,
      })

      .then(() => {
        setBkId('');
        setFname('');
        setLname('');
        setEmail('');
        setPhn('');
        setGuest('');
        setSelectedValue('');
        setValues('');
        setStatusValue('');
      });
  }

  return (
    <Fragment>
      <Helmet>
        <title>Add Booking</title>
      </Helmet>
      <Card>
        <form onSubmit={onSubmit}>
          <Grid container spacing={3}>
            <Grid item xl={4} md={3} sm={6} xs={12}>
              <TextField
                required
                label="Booking ID"
                //defaultValue="Your ID"
                className="inputField"
                fullWidth
                variant="outlined"
                name="bookingId"
                value={bkId}
                onChange={e => setBkId(e.currentTarget.value)}
              />
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xl={6} md={6} sm={12} xs={12}>
              <TextField
                required
                label="First Name"
                className="inputField"
                fullWidth
                variant="outlined"
                name="firstName"
                value={fname}
                onChange={e => setFname(e.currentTarget.value)}
              />
            </Grid>
            <Grid item xl={6} md={6} sm={12} xs={12}>
              <TextField
                required
                label="Last Name"
                className="inputField"
                fullWidth
                variant="outlined"
                name="lastName"
                value={lname}
                onChange={e => setLname(e.currentTarget.value)}
              />
            </Grid>

            <Grid item xs={12}>
              Gender:
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedValue === 'female'}
                      onChange={radioChangeHandler}
                      value="female"
                      name="radio-button-demo"
                      classes={{
                        root: 'radioButton defaultRadioButton',
                        checked: 'radioCheckd',
                      }}
                    />
                  }
                  label="Female"
                  labelPlacement="end"
                />
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedValue === 'male'}
                      onChange={radioChangeHandler}
                      value="male"
                      name="radio-button-demo"
                      classes={{
                        root: 'radioButton defaultRadioButton',
                        checked: 'radioCheckd',
                      }}
                    />
                  }
                  label="Male"
                  labelPlacement="end"
                />
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedValue === 'others'}
                      onChange={radioChangeHandler}
                      value="others"
                      name="radio-button-demo"
                      classes={{
                        root: 'radioButton defaultRadioButton',
                        checked: 'radioCheckd',
                      }}
                    />
                  }
                  label="Others"
                  labelPlacement="end"
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              Status:
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={statusValue === 'arrived'}
                      onChange={radioChange2Handler}
                      value="arrived"
                      name="radio-button-demo"
                      classes={{
                        root: 'radioButton defaultRadioButton',
                        checked: 'radioCheckd',
                      }}
                    />
                  }
                  label="arrived"
                  labelPlacement="end"
                />
                <FormControlLabel
                  control={
                    <Radio
                      checked={statusValue === 'pending'}
                      onChange={radioChange2Handler}
                      value="pending"
                      name="radio-button-demo"
                      classes={{
                        root: 'radioButton defaultRadioButton',
                        checked: 'radioCheckd',
                      }}
                    />
                  }
                  label="pending"
                  labelPlacement="end"
                />
              </Grid>
            </Grid>
            <Grid item xl={6} md={6} sm={12} xs={12}>
              <TextField
                label="Email"
                className="inputField"
                type="email"
                name="email"
                autoComplete="email"
                fullWidth
                variant="outlined"
                value={email}
                onChange={e => setEmail(e.currentTarget.value)}
              />
            </Grid>
            <Grid item xl={6} md={6} sm={12} xs={12}>
              <TextField
                required
                label="Phone Number"
                //defaultValue="Your ID"
                className="inputField"
                fullWidth
                variant="outlined"
                name="phoneNo"
                value={phone}
                onChange={e => setPhn(e.currentTarget.value)}
              />
            </Grid>
            <Grid item xl={6} md={6} sm={12} xs={12}>
              <TextField
                select
                label="Room Type"
                className="inputField"
                fullWidth
                value={values.room}
                onChange={handleChange('room')}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu,
                  },
                }}
                helperText="select your room"
                variant="outlined"
              >
                {rooms.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xl={6} md={6} sm={12} xs={12}>
              <TextField
                label="Number Of Guests"
                value={values.guest}
                onChange={handleChange('guest')}
                type="number"
                fullWidth
                className="inputField"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                value={guestno}
                onChange={e => setGuest(e.currentTarget.value)}
              />
            </Grid>

            <MuiPickersUtilsProvider utils={MomentUtils}>
              <Grid item xl={6} md={6} sm={12} xs={12}>
                <KeyboardDatePicker
                  label="Arrival Date"
                  fullWidth
                  value={selectedDate}
                  placeholder="10/10/2018"
                  variant="inline"
                  inputVariant="outlined"
                  onChange={date => handleDateChange(date)}
                  minDate={new Date()}
                  format="DD-MM-YYYY"
                  InputAdornmentProps={{ position: 'end' }}
                  className="datePicker"
                />
              </Grid>
            </MuiPickersUtilsProvider>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <Grid item md={6} xs={12}>
                <KeyboardTimePicker
                  label="Arrival Time"
                  placeholder="08:00 AM"
                  mask="__:__ _M"
                  //type="time"
                  fullWidth
                  name="arrivalTime"
                  value={selectedTime}
                  variant="inline"
                  inputVariant="outlined"
                  InputAdornmentProps={{ position: 'end' }}
                  onChange={date => handleTimeChange(date)}
                  className="timepicker"
                />
              </Grid>
            </MuiPickersUtilsProvider>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <Grid item xl={6} md={6} sm={12} xs={12}>
                <KeyboardDatePicker
                  label="Departure Date"
                  fullWidth
                  value={selectedDate2}
                  variant="inline"
                  inputVariant="outlined"
                  placeholder="10/10/2018"
                  onChange={date => handleDate2Change(date)}
                  minDate={new Date()}
                  format="DD-MM-YYYY"
                  InputAdornmentProps={{ position: 'end' }}
                  className="datePicker"
                  autoOk={true}
                />
              </Grid>
            </MuiPickersUtilsProvider>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <Grid item md={6} xs={12}>
                <KeyboardTimePicker
                  label="Departure Time"
                  placeholder="08:00 AM"
                  mask="__:__ _M"
                  fullWidth
                  name="departureTime"
                  value={selectedTime2}
                  variant="inline"
                  inputVariant="outlined"
                  InputAdornmentProps={{ position: 'end' }}
                  onChange={date => handleTime2Change(date)}
                  className="timepicker"
                />
              </Grid>
            </MuiPickersUtilsProvider>
                
            <Grid align="center">
              <input className="btn btn-submit bg-success" type="submit" />
            </Grid>
            <Grid align="center" >
              <input className="btn btn-reset bg-default" type="reset" justify-content="center"/>
            </Grid>
          </Grid>
        </form>
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
export default compose(withConnect)(AddBooking);
