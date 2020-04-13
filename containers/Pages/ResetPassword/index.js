import React, { Component } from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Card from 'components/Card/Loadable'
import { Grid, TextField, Button } from '@material-ui/core'
import './style.scss'
class ResetPassword extends Component {
    state = {
        old_password: '',
        new_password: '',
        confirm_password: '',
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <Card
                title="Reset Password"
                className="editProfile"
            >
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <label htmlFor="old_password">Old Password</label>
                        <TextField
                            type="password"
                            name="old_password"
                            variant="outlined"
                            className="textField"
                            fullWidth
                            value={this.state.old_password}
                            onChange={this.changeHandler}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <label htmlFor="new_password">New password</label>
                        <TextField
                            type="password"
                            name="new_password"
                            variant="outlined"
                            className="textField"
                            fullWidth
                            value={this.state.new_password}
                            onChange={this.changeHandler}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <label htmlFor="confirm_password">Confirm Password</label>
                        <TextField
                            type="password"
                            name="confirm_password"
                            variant="outlined"
                            className="textField"
                            fullWidth
                            value={this.state.confirm_password}
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

export default ResetPassword;
