import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import makeSelectLogin from './selectors';
import { Grid, TextField, Button, InputAdornment, } from '@material-ui/core'
import { Link, withRouter } from 'react-router-dom'
import Joi from 'joi-browser'
import { ToastContainer, toast } from 'react-toastify';
import './style.scss'


// images 
import logo from 'images/logo.png'
import loginImg from 'images/login-bg.png'
class Signup extends Component {
    state = {
        email: '',
        password: '',
        name: '',
        confirm_password: '',
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
        }),
        password: Joi.string().required().error(errors => {
            errors.forEach(err => {
                switch (err.type) {
                    default: err.message = "Password CAN NOT BE EMPTY";
                        break;
                }
            });
            return errors;
        }),
        name: Joi.string().required().error(errors => {
            errors.forEach(err => {
                switch (err.type) {
                    default: err.message = "Name CAN NOT BE EMPTY";
                        break;
                }
            });
            return errors;
        }),
        confirm_password: Joi.string().required().error(errors => {
            errors.forEach(err => {
                switch (err.type) {
                    default: err.message = " CAN NOT BE EMPTY";
                        break;
                }
            });
            return errors;
        }),
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
            password: this.state.password,
            email: this.state.email,
            name: this.state.name,
            confirm_password: this.state.confirm_password
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
                    <title>signup</title>
                    <meta name="description" content="Description of Login" />
                </Helmet>
                <Grid className="accountArea">
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <form className="accountWrapper" onSubmit={this.submitHandler}>

                                <Grid className="accountInfo">
                                    <div className="accountInfoHeader">
                                        {/* <Link to="/dashboard">  */}
                                        <img src={logo} alt="" />
                                        {/* </Link> */}
                                    </div>
                                    <div className="image">
                                        <img src={loginImg} alt="" />
                                    </div>
                                </Grid>

                                <Grid className="accountForm">
                                    <div className="fromTitle">
                                        <h2>Signup</h2>
                                        <p>Sign into your pages account</p>
                                    </div>
                                    <TextField
                                        label="Full Name"
                                        placeholder="Your name here.."
                                        fullWidth
                                        variant="outlined"
                                        name="name"
                                        onChange={this.changeHandler}
                                        value={this.state.name}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        error={this.state.error.name && true}
                                        helperText={this.state.error.name && this.state.error.name}
                                        className="formInput"
                                    />
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
                                    <TextField
                                        label="Password"
                                        placeholder="Your password here.."
                                        fullWidth
                                        type={this.state.showpass ? 'text' : 'password'}
                                        variant="outlined"
                                        name="password"
                                        onChange={this.changeHandler}
                                        value={this.state.password}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        error={this.state.error.password && true}
                                        helperText={this.state.error.password && this.state.error.password}
                                        className="formInput"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment
                                                    onClick={this.showpasshandler}
                                                    className="showPassword"
                                                    position="end">
                                                    <i className={this.state.showpass ? 'fa fa-eye' : 'fa fa-eye-slash'} />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                    <TextField
                                        label="Confirm Password"
                                        placeholder="Your password here.."
                                        fullWidth
                                        type={this.state.showpass ? 'text' : 'password'}
                                        variant="outlined"
                                        name="confirm_password"
                                        onChange={this.changeHandler}
                                        value={this.state.confirm_password}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        error={this.state.error.confirm_password && true}
                                        helperText={this.state.error.confirm_password && this.state.error.confirm_password}
                                        className="formInput"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment
                                                    onClick={this.showpasshandler}
                                                    className="showPassword"
                                                    position="end">
                                                    <i className={this.state.showpass ? 'fa fa-eye' : 'fa fa-eye-slash'} />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                    <Button type="submit" className="btn bg-default accountBtn">Signup</Button>

                                    <h4 className="or"><span>OR</span></h4>
                                    <ul className="socialLoginBtn">
                                        <li><Button className="facebook"><i className="fa fa-facebook" /></Button></li>
                                        <li><Button className="twitter"><i className="fa fa-twitter" /></Button></li>
                                        <li><Button className="linkedin"><i className="fa fa-linkedin" /></Button></li>
                                    </ul>
                                    <p className="subText">Already have an account? <Link to="/">Return to Sign In</Link></p>
                                </Grid>
                            </form>
                        </Grid>
                    </Grid>
                </Grid>
            </Fragment>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    login: makeSelectLogin(),
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

export default compose(withConnect)(Signup);
