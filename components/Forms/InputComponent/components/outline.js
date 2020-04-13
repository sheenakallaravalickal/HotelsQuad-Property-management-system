import React from 'react';
import clsx from 'clsx';
import { makeStyles, Grid, MenuItem, TextField } from '@material-ui/core';

const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
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
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    return (
        <form noValidate>
            <Grid container spacing={3}>
                <Grid item xl={4} md={3} sm={6} xs={12}>
                    <TextField
                        label="Name"
                        className='inputField'
                        value={values.name}
                        onChange={handleChange('name')}
                        fullWidth
                        variant="outlined"
                    />
                </Grid>
                <Grid item xl={4} md={3} sm={6} xs={12}>
                    <TextField
                        fullWidth
                        label="Uncontrolled"
                        defaultValue="foo"
                        className='inputField'
                        variant="outlined"
                    />
                </Grid>
                <Grid item xl={4} md={3} sm={6} xs={12}>
                    <TextField
                        required
                        label="Required"
                        defaultValue="Hello World"
                        className='inputField'
                        fullWidth
                        variant="outlined"
                    />
                </Grid >
                <Grid item xl={4} md={3} sm={6} xs={12}>
                    <TextField
                        error
                        fullWidth
                        label="Error"
                        defaultValue="Hello World"
                        className='inputField'
                        variant="outlined"
                    />
                </Grid >
                <Grid item xl={4} md={3} sm={6} xs={12}>
                    <TextField
                        disabled
                        label="Disabled"
                        defaultValue="Hello World"
                        className='inputField'
                        fullWidth
                        variant="outlined"
                    />
                </Grid >
                <Grid item xl={4} md={3} sm={6} xs={12}>
                    <TextField
                        label="Email"
                        className='inputField'
                        type="email"
                        name="email"
                        autoComplete="email"
                        fullWidth
                        variant="outlined"
                    />
                </Grid >
                <Grid item xl={4} md={3} sm={6} xs={12}>
                    <TextField
                        label="Password"
                        className='inputField'
                        type="password"
                        autoComplete="current-password"
                        fullWidth
                        variant="outlined"
                    />
                </Grid >
                <Grid item xl={4} md={3} sm={6} xs={12}>
                    <TextField
                        label="Read Only"
                        defaultValue="Hello World"
                        className='inputField'
                        fullWidth
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="outlined"
                    />
                </Grid >
                <Grid item xl={4} md={3} sm={6} xs={12}>
                    <TextField
                        fullWidth
                        label="Dense"
                        className='inputField'
                        variant="outlined"
                    />
                </Grid >


                <Grid item xl={4} md={3} sm={6} xs={12}>
                    <TextField
                        fullWidth
                        label="With placeholder"
                        placeholder="Placeholder"
                        className='inputField'
                        variant="outlined"
                    />
                </Grid >
                <Grid item xl={4} md={3} sm={6} xs={12}>
                    <TextField
                        label="Multiline Placeholder"
                        placeholder="Placeholder"
                        multiline
                        className='inputField'
                        fullWidth
                        variant="outlined"
                    />
                </Grid >
                <Grid item xl={4} md={3} sm={6} xs={12}>
                    <TextField
                        label="Number"
                        value={values.age}
                        onChange={handleChange('age')}
                        type="number"
                        fullWidth
                        className='inputField'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                </Grid >
                <Grid item xl={4} md={3} sm={6} xs={12}>
                    <TextField
                        label="Search field"
                        type="search"
                        className='inputField'
                        fullWidth
                        variant="outlined"
                    />
                </Grid >
                <Grid item xl={4} md={3} sm={6} xs={12}>
                    <TextField
                        select
                        label="Select"
                        className='inputField'
                        fullWidth
                        value={values.currency}
                        onChange={handleChange('currency')}
                        SelectProps={{
                            MenuProps: {
                                className: classes.menu,
                            },
                        }}
                        helperText="Please select your currency"
                        variant="outlined"
                    >
                        {currencies.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid >
                <Grid item xl={4} md={3} sm={6} xs={12}>
                    <TextField
                        select
                        label="Native select"
                        className='inputField'
                        value={values.currency}
                        fullWidth
                        onChange={handleChange('currency')}
                        SelectProps={{
                            native: true,
                            MenuProps: {
                                className: classes.menu,
                            },
                        }}
                        helperText="Please select your currency"
                        variant="outlined"
                    >
                        {currencies.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </TextField>
                </Grid >
                <Grid item xl={4} md={3} sm={6} xs={12}>
                    <TextField
                        label="Label"
                        placeholder="Placeholder"
                        helperText="Full width!"
                        fullWidth
                        className='inputField'
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid >
                <Grid item xl={4} md={3} sm={6} xs={12}>
                    <TextField
                        id="outlined-bare"
                        fullWidth
                        className='inputField'
                        defaultValue="Bare"
                        margin="normal"
                        variant="outlined"
                        inputProps={{ 'aria-label': 'bare' }}
                    />
                </Grid >
                <Grid item xl={4} md={3} sm={6} xs={12}>
                    <TextField
                        label="Multiline"
                        multiline
                        fullWidth
                        rowsMax="4"
                        value={values.multiline}
                        onChange={handleChange('multiline')}
                        className='inputField'
                        helperText="hello"
                        variant="outlined"
                    />
                </Grid >
                <Grid item xl={4} md={3} sm={6} xs={12}>
                    <TextField
                        label="Dense multiline"
                        className='inputField'
                        fullWidth
                        variant="outlined"
                        multiline
                        rowsMax="4"
                    />
                </Grid >
                <Grid item xl={4} md={3} sm={6} xs={12}>
                    <TextField
                        label="Multiline"
                        multiline
                        fullWidth
                        rows="4"
                        defaultValue="Default Value"
                        className='inputField'
                        variant="outlined"
                    />
                </Grid >
            </Grid >
        </form >
    );
}
export default OutlinedTextFields