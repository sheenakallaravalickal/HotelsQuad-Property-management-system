import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import Card from 'components/Card/Loadable';
import { compose } from 'redux';
import Dropzone from 'react-dropzone-uploader';
import 'react-dropzone-uploader/dist/styles.css';
import '../../../components/Forms/FormUpload/style.scss';

import {
  makeStyles,
  Grid,
  Checkbox,
  FormGroup,
  FormControlLabel,
  MenuItem,
  TextField,
  Button,
  } from '@material-ui/core';

import 'sass/elements/buttons.scss';

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
const ac = [
  {
    value: 'ac',
    label: 'AC',
  },
  {
    value: 'nonAc',
    label: 'Non AC',
  },
];
const cancellations = [
  {
    value: 'free',
    label: 'Free Cancellation',
  },
  {
    value: 'small',
    label: '5% before 24 hours',
  },
  {
    value: 'nil',
    label: 'No Cancellation Allowed',
  },
];

const useStyles = makeStyles(theme => ({
  menu: {
    width: 200,
  },
}));

const OutlinedTextFields = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    bed: '',
    room: 'double',
    Ac: 'ac',
    cancellation: 'small',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const getUploadParams = ({ meta }) => {
    return { url: 'https://httpbin.org/post' };
  };

  //   // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
  };

  //   // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta));
    allFiles.forEach(f => f.remove());
  };
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
  });

  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChanger = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };
  return (
    <Fragment>
      <Helmet>
        <title>Add Rooms</title>
      </Helmet>
      <Card>
        <form noValidate>
          <Grid container spacing={3}>
            <Grid item xl={4} md={3} sm={12} xs={12}>
              <TextField
                required
                label="Room Number"
                name="roomNo"
                className="inputField"
                fullWidth
                variant="outlined"
              />
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xl={6} md={6} sm={12} xs={12}>
              <TextField
                select
                label="Room Type"
                name="roomType"
                className="inputField"
                fullWidth
                value={values.room}
                onChange={handleChange('room')}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu,
                  },
                }}
                helperText="Please select the room type"
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
                select
                label="AC/NON-AC"
                name="acNonac"
                className="inputField"
                fullWidth
                value={values.Ac}
                onChange={handleChange('Ac')}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu,
                  },
                }}
                variant="outlined"
              >
                {ac.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xl={6} md={6} sm={12} xs={12}>
              <TextField
                required
                label="Bed Capacity"
                name="bedCapacity"
                value={values.bed}
                onChange={handleChange('bed')}
                type="number"
                fullWidth
                className="inputField"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
            </Grid>

            <Grid item xl={6} md={6} sm={12} xs={12}>
              <TextField
                select
                label="Cancellation Charges"
                name="cancellationCharges"
                className="inputField"
                fullWidth
                value={values.cancellation}
                onChange={handleChange('cancellation')}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu,
                  },
                }}
                variant="outlined"
              >
                {cancellations.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xl={6} md={6} sm={12} xs={12}>
              <TextField
                required
                fullWidth
                label="Rent Per Night"
                name="rentPerNight"
                className="inputField"
                variant="outlined"
                helperText="In Indian Currency"
              />
            </Grid>

            <Grid item xl={6} md={6} sm={12} xs={12}>
              <TextField
                required
                label="Phone Number"
                name="phoneNo"
                className="inputField"
                fullWidth
                variant="outlined"
              />
            </Grid>

            <Grid item xl={6} md={6} sm={12} xs={12}>
              <TextField
                label="Room Details"
                name="roomDetails"
                multiline
                fullWidth
                rows="4"
                className="inputField"
                variant="outlined"
              />
            </Grid>
            <Grid container spacing={3}>
              <Grid item lg={12} xs={12}>
                Upload Room Photos
                <Dropzone
                  getUploadParams={getUploadParams}
                  onChangeStatus={handleChangeStatus}
                  onSubmit={handleSubmit}
                  accept="image/*,audio/*,video/*"
                  className="dropzonWrap"
                />
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item lg={12} xs={12}>
                Amenities Included:
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Checkbox
                        classes={{
                          root: 'checkboxWrap checkDefault',
                          checked: 'checked',
                        }}
                        value="bed"
                      />
                    }
                    label="Bed"
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        classes={{
                          root: 'checkboxWrap checkDefault',
                          checked: 'checked',
                        }}
                        value="pillow"
                      />
                    }
                    label="Pillow"
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        classes={{
                          root: 'checkboxWrap checkDefault',
                          checked: 'checked',
                        }}
                        value="chair"
                      />
                    }
                    label="Chair"
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        classes={{
                          root: 'checkboxWrap checkDefault',
                          checked: 'checked',
                        }}
                        value="table"
                      />
                    }
                    label="Table"
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        classes={{
                          root: 'checkboxWrap checkDefault',
                          checked: 'checked',
                        }}
                        value="ac"
                      />
                    }
                    label="AC"
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        classes={{
                          root: 'checkboxWrap checkDefault',
                          checked: 'checked',
                        }}
                        value="wifi"
                      />
                    }
                    label="Wi-fi"
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        classes={{
                          root: 'checkboxWrap checkDefault',
                          checked: 'checked',
                        }}
                        value="swimmingPool"
                      />
                    }
                    label="Swimming Pool"
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        classes={{
                          root: 'checkboxWrap checkDefault',
                          checked: 'checked',
                        }}
                        value="locker"
                      />
                    }
                    label="Locker"
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        classes={{
                          root: 'checkboxWrap checkDefault',
                          checked: 'checked',
                        }}
                        value="tv"
                      />
                    }
                    label="TV"
                  />
                </FormGroup>
              </Grid>
            </Grid>

            <ul className="buttonList">
              <li>
                <input
                  className="btn btn-submit bg-success btn-radius "
                  type="submit"
                />
              </li>
              <li>
                <Button
                  className="btn bg-default btn-radius"
                  type="reset"
                  value="Reset"
                >
                  Reset
                </Button>
              </li>
            </ul>
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
export default compose(OutlinedTextFields);
