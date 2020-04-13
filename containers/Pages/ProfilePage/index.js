import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import makeSelectProfilePage from './selectors';
import reducer from './reducer';
import messages from './messages';

import { Grid, Button, Tab, Tabs } from '@material-ui/core'
import Card from 'components/Card/Loadable'
import EditProfile from 'containers/Pages/EditProfile/Loadable'
import ResetPassword from 'containers/Pages/ResetPassword/Loadable'
import { Link } from 'react-router-dom'
import './style.scss'

// images
import profile from 'images/team/img1.jpg'

const profiles = [
    { label: 'First Name', value: 'ABCD' },
    { label: 'Last Name', value: 'XYZ' },
    { label: 'Email', value: 'abc@gmail.com' },
    { label: 'Phone Number', value: '+9146820457' },
    { label: 'Address', value: 'India' },
    { label: 'Zip Code', value: '145852' },
    { label: 'status', value: 'Admin' },
    { label: 'Active Status', value: 'Active' },
    { label: 'Date of Birth', value: '30/12/1998' },
    { label: 'Zip Code', value: '145852' },
    { label: 'status', value: 'Admin' },
    { label: 'Active Status', value: 'Active' },
]

const ProfilePage = () => {
    const [value, setValue] = React.useState('my_profile');
    function handleChange(event, newValue) {
        setValue(newValue);
    }
    return (
        <Fragment>
            <Helmet>
                <title>ProfilePage</title>
                <meta name="description" content="Description of ProfilePage" />
            </Helmet>
            <Grid container spacing={3}>
                <Grid item xl={3} lg={4} xs={12}>
                    <Grid className="profileInfoWrap">
                        <Grid className="profileInfoImg">
                            <img src={profile} alt="" />
                        </Grid>
                        <Grid className="profileInfoContent">
                            <h4>Admin</h4>
                            <p>abc@gmail.com</p>
                            <ul>
                                <li><Button className="bg-success" component={Link} to="/chat">chat</Button></li>
                                <li><Button>Follow</Button></li>
                            </ul>
                        </Grid>
                    </Grid>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        orientation="vertical"
                        classes={{
                            root: 'profileTabMenu',
                            indicator: 'noIndicator',
                            flexContainer: 'containerClass',
                            scroller: 'noScroll',
                        }}>
                        <Tab
                            icon={<i className="fa fa-user" />}
                            label="My Profile"
                            value="my_profile"
                        />
                        <Tab
                            icon={<i className="fa fa-user" />}
                            label="Edit Profile"
                            value="edit_rofile" />
                        <Tab
                            icon={<i className="fa fa-lock" />}
                            label="Reset Password"
                            value="reset_password" />
                        <Button component={Link} to="/"><i className="fa fa-sign-out" /> Logout </Button>
                    </Tabs>
                </Grid>
                <Grid item xl={9} lg={8} xs={12}>
                    {value === 'my_profile' && <Card
                        title="My Profile"
                        className="userProfile"
                    >
                        <Grid container spacing={3}>
                            {profiles.map((profile, i) => (
                                <Grid key={i} item sm={6} xs={12}>
                                    <span>{profile.label}</span>
                                    <h4>{profile.value}</h4>
                                </Grid>
                            ))}
                        </Grid>
                    </Card>}
                    {value === 'edit_rofile' && <EditProfile />}
                    {value === 'reset_password' && <ResetPassword />}
                </Grid>
            </Grid>
        </Fragment>
    );
}

const mapStateToProps = createStructuredSelector({
    profilePage: makeSelectProfilePage(),
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

export default compose(withConnect)(ProfilePage);
