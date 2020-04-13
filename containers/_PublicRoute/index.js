import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import cookie from 'js-cookie';

import { makeSelectLocale } from '../LanguageProvider/selectors';
import { changeLocale } from '../LanguageProvider/actions';

import './style.scss';
import { Grid } from '@material-ui/core';

export class PublicRoute extends React.Component {
  onChangeLocale = locale => {
    cookie.set('ammei_lang', locale);
    this.props.changeLocale(locale);
  };

  render() {
    return (
      <Grid className="PublicRoute">
        <Route
          {...this.props}
          exact
          render={props => <Component {...props} />}
        />
      </Grid>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeLocale: locale => dispatch(changeLocale(locale)),
  };
}

const mapStateToProps = createStructuredSelector({
  locale: makeSelectLocale(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(PublicRoute);
