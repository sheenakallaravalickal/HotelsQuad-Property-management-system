import React, { useState } from 'react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import {
    Grid,
    Menu,
    Button,
    Hidden,
} from '@material-ui/core';
import ScrollArea from 'react-scrollbar';

import './style.scss';

// images
import avatar from 'images/avatar.png';
import mail from 'images/icons/mail.svg';
import notification from 'images/icons/notification.svg';
import fullScreen from 'images/icons/full-screen.svg';
import makeSelectHeader from './selectors';

const notfications = [
    {
        title: 'omnis iste error sit',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit',
    },
    {
        title: 'will be distracted',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit',
    },
    {
        title: 'established fact that',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit',
    },
    {
        title: 'reader will be',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit',
    },
    {
        title: 'voluptas sit aspernatur aut',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit',
    },
    {
        title: 'will be distracted',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit',
    },
    {
        title: 'established fact that',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit',
    },
    {
        title: 'reader will be',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit',
    },
    {
        title: 'voluptas sit aspernatur aut',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit',
    },
    {
        title: 'will be distracted',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit',
    },
    {
        title: 'established fact that',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit',
    },
    {
        title: 'reader will be',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit',
    },
];

const Header = props => {
    const [openMessage, setOpenMessage] = useState(null);
    const [openNotification, setOpenNotification] = useState(null);
    const handleClick = event => {
        setOpenMessage(event.currentTarget);
    };

    const handleClose = () => {
        setOpenMessage(null);
    };
    const handleClickNotification = event => {
        setOpenNotification(event.currentTarget);
    };

    const handleCloseNotification = () => {
        setOpenNotification(null);
    };

    const [profile, setProfile] = React.useState(null);

    const profileOpen = event => {
        setProfile(event.currentTarget);
    };

    const profileClose = () => {
        setProfile(null);
    };

    return (
        <header className="headerArea">
            <Grid container spacing={4} alignItems="center">
                <Hidden mdUp>
                    <Grid item xs={2}>
                        <ul className="headerLeft">
                            <li onClick={props.colupsMenuHandler} className="menuTrigger"><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-bars fa-w-14 fa-fw"><path fill="currentColor" d="M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z"></path></svg></li>
                        </ul>
                    </Grid>
                </Hidden>
                <Grid item md={12} xs={10}>
                    <ul className="headerRight">
                        <li onClick={handleClickNotification} className="notificationWrap">
                            <span className="wrapper">
                                <img src={notification} alt="" />
                                <span className="push" />
                            </span>
                        </li>
                        <li onClick={handleClick} className="messageWrap">
                            <span className="wrapper">
                                <img src={mail} alt="" />
                                <span className="value">{notfications.length}</span>
                            </span>
                        </li>
                        <li onClick={props.fullScreenHandler} className="fullScreenWrap">
                            <img src={fullScreen} alt="" />
                        </li>
                        <div className="profileWrap">
                            <span className="profileImg">
                                <img src={avatar} alt="" />
                            </span>
                            <span onClick={profileOpen} className="name">
                                <span className="text">Admin</span>
                                <i className="fa fa-angle-down" />
                            </span>
                            <Menu
                                anchorEl={profile}
                                keepMounted
                                open={Boolean(profile)}
                                onClose={profileClose}
                                elevation={1}
                                getContentAnchorEl={null}
                                className="profileWrapper"
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                                classes={{
                                    paper: 'profilePaper',
                                    list: 'profileList',
                                }}
                            >
                                <li>
                                    <Button component={Link} to="/profile">
                                        Profile
                  </Button>
                                </li>
                                <li>
                                    <Button component={Link} to="/">
                                        Logout
                  </Button>
                                </li>
                            </Menu>
                        </div>
                    </ul>
                    <Menu
                        anchorEl={openMessage}
                        keepMounted
                        open={Boolean(openMessage)}
                        onClose={handleClose}
                        elevation={1}
                        getContentAnchorEl={null}
                        className="notificationWrapper"
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        classes={{
                            paper: 'notificationPaper',
                            list: 'notificationList',
                        }}
                    >
                        <li className="notificationList">
                            <h5>
                                Messages
                <span>clear all</span>
                            </h5>
                            <ScrollArea
                                speed={1}
                                className="scrollbarArea"
                                contentClassName="scrollbarContent"
                                horizontal={false}
                            >
                                <ul className="notificationItems">
                                    {notfications.map((item, i) => (
                                        <li key={i}>
                                            <Button component={Link} to="/">
                                                <i className="icon">
                                                    <svg
                                                        aria-hidden="true"
                                                        focusable="false"
                                                        data-prefix="fal"
                                                        data-icon="envelope"
                                                        role="img"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 512 512"
                                                        className="svg-inline--fa fa-envelope fa-w-16 fa-fw"
                                                    >
                                                        <path
                                                            fill="currentColor"
                                                            d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z"
                                                        />
                                                    </svg>
                                                </i>
                                                {item.title}
                                                <span>{item.text}</span>
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            </ScrollArea>
                            <Button className="seeAll" component={Link} to="/">
                                see all
              </Button>
                        </li>
                    </Menu>

                    <Menu
                        anchorEl={openNotification}
                        keepMounted
                        open={Boolean(openNotification)}
                        onClose={handleCloseNotification}
                        elevation={1}
                        getContentAnchorEl={null}
                        className="notificationWrapper"
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        classes={{
                            paper: 'notificationPaper',
                            list: 'notificationList',
                        }}
                    >
                        <li className="notificationList">
                            <h5>
                                Notification
                <span>clear all</span>
                            </h5>
                            <ScrollArea
                                speed={1}
                                className="scrollbarArea"
                                contentClassName="scrollbarContent"
                                horizontal={false}
                            >
                                <ul className="notificationItems">
                                    {notfications.map((item, i) => (
                                        <li key={i}>
                                            <Button component={Link} to="/">
                                                <i className="icon">
                                                    <svg
                                                        aria-hidden="true"
                                                        focusable="false"
                                                        data-prefix="fal"
                                                        data-icon="bell"
                                                        role="img"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 448 512"
                                                        className="svg-inline--fa fa-bell fa-w-14 fa-fw"
                                                    >
                                                        <path
                                                            fill="currentColor"
                                                            d="M224 480c-17.66 0-32-14.38-32-32.03h-32c0 35.31 28.72 64.03 64 64.03s64-28.72 64-64.03h-32c0 17.65-14.34 32.03-32 32.03zm209.38-145.19c-27.96-26.62-49.34-54.48-49.34-148.91 0-79.59-63.39-144.5-144.04-152.35V16c0-8.84-7.16-16-16-16s-16 7.16-16 16v17.56C127.35 41.41 63.96 106.31 63.96 185.9c0 94.42-21.39 122.29-49.35 148.91-13.97 13.3-18.38 33.41-11.25 51.23C10.64 404.24 28.16 416 48 416h352c19.84 0 37.36-11.77 44.64-29.97 7.13-17.82 2.71-37.92-11.26-51.22zM400 384H48c-14.23 0-21.34-16.47-11.32-26.01 34.86-33.19 59.28-70.34 59.28-172.08C95.96 118.53 153.23 64 224 64c70.76 0 128.04 54.52 128.04 121.9 0 101.35 24.21 138.7 59.28 172.08C421.38 367.57 414.17 384 400 384z"
                                                        />
                                                    </svg>
                                                </i>
                                                {item.title}
                                                <span>{item.text}</span>
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            </ScrollArea>
                            <Button className="seeAll" component={Link} to="/">
                                see all
              </Button>
                        </li>
                    </Menu>
                </Grid>
            </Grid>
        </header>
    );
};

const mapStateToProps = createStructuredSelector({
    header: makeSelectHeader(),
});

function mapDispatchToProps(dispatch) {
    return {};
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default compose(withConnect)(injectIntl(Header));
