import React, { useState, useEffect, Fragment } from 'react';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Fullscreen from 'react-full-screen';
import { Grid, Button } from '@material-ui/core';
import Header from 'components/Header/Loadable';
import SidebarNav from 'components/SidebarNav/Loadable';
import SidebarSetting from 'components/SidebarSetting/Loadable';
import TopHeader from 'components/TopHeader/Loadable';
import Footer from 'components/Footer/Loadable';
import PopupChat from 'components/PopupChat/Loadable';

import './style.scss';

const PrivateRoute = props => {
    const [colupsMenu, setColupsMenu] = useState(false);
    const [sidebarSetting, setSidebarSetting] = useState(false);
    const [screen, setScreen] = useState(false);
    const [state, setState] = useState({
        collapsable_menu: false,
        top_menu: false,
        squared_card: false,
        block_shadow: false,
    });

    const [showLoading, setShowLoading] = useState(true);
    const timer1 = setTimeout(() => setShowLoading(false), 3000);
    useEffect(
        () => () => {
            clearTimeout(timer1)
        },
        [showLoading],
    );

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };
    const colupsMenuHandler = () => {
        setColupsMenu(!colupsMenu);
    };
    const fullScreenHandler = () => {
        setScreen(!screen);
    };
    return (
        <Fragment>
            {showLoading ? (
                <Grid className="preloaderWrap">
                    <Grid className="spinner">
                        <Grid className="double-bounce1" />
                        <Grid className="double-bounce2" />
                    </Grid>
                </Grid>
            ) : (
                    ''
                )}

            <Fullscreen enabled={screen}>
                {state.top_menu ? (
                    <Fragment>
                        <TopHeader fullScreenHandler={fullScreenHandler} />
                        <Grid
                            className={state.squared_card ? 'squareBoxCard p-50' : 'p-50'}
                        >
                            <Grid className={state.block_shadow ? 'withoutShadowCard' : ''}>
                                <h2 className="breadcumbTitle">{props.title}</h2>
                                <Route
                                    {...props}
                                    exact
                                    render={props => <Component {...props} />}
                                />
                            </Grid>
                        </Grid>
                        <ul className="settingBtns">
                            <li>
                                <Button
                                    onClick={() => setSidebarSetting(true)}
                                    className="settingsWrap"
                                >
                                    <i className="icofont-ui-settings" />
                                </Button>
                            </li>
                        </ul>
                        {sidebarSetting && (
                            <Grid
                                onClick={() => setSidebarSetting(false)}
                                className="backDrop"
                            />
                        )}
                        )}
          <SidebarSetting
                            open={sidebarSetting}
                            setSidebarSetting={setSidebarSetting}
                            top_menu={state.top_menu}
                            squared_card={state.squared_card}
                            block_shadow={state.block_shadow}
                            collapsable_menu={state.collapsable_menu}
                            handleChange={handleChange}
                        />
                    </Fragment>
                ) : (
                        <Fragment>
                            <Grid className={colupsMenu ? 'mainContainer mainContainerColups' : 'mainContainer' && state.collapsable_menu ? 'mainContainer mainContainerColups' : 'mainContainer'}>
                                <SidebarNav
                                    colupsMenuHandler={colupsMenuHandler}
                                    colupsMenu={colupsMenu}
                                    setSidebarSetting={setSidebarSetting}
                                />
                                <Grid
                                    className={`mainContentRouter ${
                                        state.squared_card ? 'squareBoxCard' : ''
                                        }`}>
                                    <Grid className={state.block_shadow ? 'withoutShadowCard' : ''}>
                                        <Header
                                            colupsMenuHandler={colupsMenuHandler}
                                            fullScreenHandler={fullScreenHandler}
                                        />
                                        <Grid className="mainCotentInner">
                                            <h2 className="breadcumbTitle">{props.title}</h2>
                                            <Route
                                                {...props}
                                                exact
                                                render={props => <Component {...props} />}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <ul className="settingBtns">
                                    <li>
                                        <Button
                                            onClick={() => setSidebarSetting(true)}
                                            className="settingsWrap"
                                        >
                                            <i className="icofont-ui-settings" />
                                        </Button>
                                    </li>
                                </ul>

                                {sidebarSetting && (
                                    <Grid
                                        onClick={() => setSidebarSetting(false)}
                                        className="backDrop"
                                    />
                                )}

                                <SidebarSetting
                                    open={sidebarSetting}
                                    setSidebarSetting={setSidebarSetting}
                                    top_menu={state.top_menu}
                                    squared_card={state.squared_card}
                                    block_shadow={state.block_shadow}
                                    collapsable_menu={state.collapsable_menu}
                                    handleChange={handleChange}
                                />
                            </Grid>
                        </Fragment>
                    )}
                <Footer className={state.top_menu ? 'footerStyleTwo' : ''} />
                <PopupChat />
            </Fullscreen>
        </Fragment>
    );
};

function mapDispatchToProps(dispatch) {
    return {};
}

const mapStateToProps = createStructuredSelector({});

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default compose(withConnect)(PrivateRoute);
