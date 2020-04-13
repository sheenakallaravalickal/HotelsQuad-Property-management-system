import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import makeSelectResetPassword from './selectors';
import reducer from './reducer';
import messages from './messages';
import { Grid, TextField, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Joi from 'joi-browser'

import './style.scss'

// images 
import logo from 'images/logo-white.png'
import loginImg from 'images/login-bg.png'

class ForgotPassword extends Component {
    state = {
        email: '',
        remember: false,
        showpass: false,
        error: {}
    }

    schema = {
        email: Joi.string().email({ minDomainAtoms: 2 }).required().error(errors => {
            errors.forEach(err => {
                switch (err.type) {
                    case "string.email":
                        err.message = "Email Mast be a Valid email";
                        break;
                    default: err.message = "EMAIL CAN NOT BE EMPTY";
                        break;
                }
            });
            return errors;
        })
    }
    changeHandler = event => {
        const error = { ...this.state.error };
        const errorMassage = this.validationProperty(event);
        if (errorMassage) {
            error[event.target.name] = errorMassage;
        } else {
            delete error[event.target.name];
        }
        this.setState({
            [event.target.name]: event.target.value,
            error
        })
    };

    validationProperty = event => {
        const Obj = { [event.target.name]: event.target.value };
        const schema = { [event.target.name]: this.schema[event.target.name] }
        const { error } = Joi.validate(Obj, schema);
        return error ? error.details[0].message : null
    };

    validate = () => {
        const options = { abortEarly: false }
        const form = {
            email: this.state.email,
        }
        const { error } = Joi.validate(form, this.schema, options)
        if (!error) return null;

        const errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message
        return errors;
    };

    checkHandler = () => {
        this.setState({
            remember: !this.state.remember
        })
    }
    showpasshandler = () => {
        this.setState({
            showpass: !this.state.showpass
        })
    }
    submitHandler = (e) => {
        e.preventDefault()
        const error = this.validate()
        if (!error) {
            toast.success('Success fully signup')
            this.props.history.push('/dashboard')
        } else {
            this.setState({
                error: error || {}
            })
        }
    }
    render() {
        return (
            <Fragment>
                <Helmet>
                    <title>Reset password</title>
                    <meta name="description" content="Description of Login" />
                </Helmet>
                <Grid className="signupArea">
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <form className="accountWrapper" onSubmit={this.submitHandler}>
                                <Grid className="accountInfo">
                                    <div className="accountInfoHeader">
                                        <Link to="/dashboard"> <img src={logo} alt="" /></Link>
                                    </div>
                                    <div className="image">
                                        <img src={loginImg} alt="" />
                                    </div>
                                </Grid>
                                <Grid className="accountForm">
                                    <div className="fromTitle">
                                        <h2>Reset Password</h2>
                                        <p>Sign into your pages account</p>
                                    </div>
                                    <TextField
                                        label="Email"
                                        placeholder="Your email here.."
                                        fullWidth
                                        variant="outlined"
                                        name="email"
                                        onChange={this.changeHandler}
                                        value={this.state.email}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        error={this.state.error.email && true}
                                        helperText={this.state.error.email && this.state.error.email}
                                        className="formInput"
                                    />
                                    <Button type="submit" className="btn bg-default accountBtn">Resend Password</Button>
                                    <p className="subText mt-16">Don't have an acount? <Link to="/signup"> Create free account</Link></p>
                                </Grid>
                            </form>
                        </Grid>
                    </Grid>
                </Grid>
            </Fragment>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    resetPassword: makeSelectResetPassword(),
});

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
    };
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default compose(withConnect)(ForgotPassword);
