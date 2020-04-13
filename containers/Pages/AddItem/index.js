import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import Card from 'components/Card/Loadable';
import { compose } from 'redux';
import 'react-dropzone-uploader/dist/styles.css';
import {
  makeStyles,
  Grid,
  MenuItem,
  TextField,
  Button,
} from '@material-ui/core';
import 'sass/elements/buttons.scss';

const categories = [
  {
    value: 'room',
    label: 'Room',
  },
];

const useStyles = makeStyles(theme => ({
  menu: {
    width: 200,
  },
}));

const AddItem = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    category: 'room',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  return (
    <Fragment>
      <Helmet>
        <title>Add Item</title>
      </Helmet>
      <Card>
        <form noValidate>
          <Grid container spacing={3}>
            <Grid item xl={4} md={3} sm={12} xs={12}>
              <TextField
                required
                label="ID"
                name="id"
                className="inputField"
                fullWidth
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xl={6} md={6} sm={12} xs={12}>
              <TextField
                required
                label="Name"
                name="name"
                className="inputField"
                fullWidth
                variant="outlined"
              />
            </Grid>
          

          
            <Grid item xl={6} md={6} sm={12} xs={12}>
              <TextField
                select
                label="Category"
                name="category"
                className="inputField"
                fullWidth
                value={values.category}
                onChange={handleChange('category')}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu,
                  },
                }}
                helperText="Please select the category"
                variant="outlined"
              >
                {categories.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            
           
            <Grid item xl={6} md={6} sm={12} xs={12}>
              <TextField
                required
                label="Location"
                name="location"
                className="inputField"
                fullWidth
                variant="outlined"
              />
            </Grid>
            

            
            <Grid item xl={6} md={6} sm={12} xs={12}>
              <TextField
                required
                label="Quantity"
                name="quantity"
                className="inputField"
                fullWidth
                variant="outlined"
              />
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
export default compose(AddItem);
