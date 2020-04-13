import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import messages from './messages';
import { Grid } from '@material-ui/core'
import Card from 'components/Card/Loadable'
import OutlinedTextFields from './components/outline'
import './style.scss'

const InputComponent = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Form</title>
                <meta name="description" content="Description of InputComponent" />
            </Helmet>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card title="Outline Input">
                        <OutlinedTextFields />
                    </Card>
                </Grid>
            </Grid>
        </Fragment>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
    };
}

const withConnect = connect(
    null,
    mapDispatchToProps,
);

export default compose(withConnect)(InputComponent);
