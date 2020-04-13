import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import Card from 'components/Card/Loadable'
import { Grid } from '@material-ui/core'
import Dropzone from 'react-dropzone-uploader'
import messages from './messages';
import 'react-dropzone-uploader/dist/styles.css'
import './style.scss'

const FormUpload = () => {
    // specify upload params and url for your files
    const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }

    // called every time a file's `status` changes
    const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }

    // receives array of files that are done uploading when submit button is clicked
    const handleSubmit = (files, allFiles) => {
        console.log(files.map(f => f.meta))
        allFiles.forEach(f => f.remove())
    }
    return (
        <Fragment>
            <Helmet>
                <title>FormUpload</title>
                <meta name="description" content="Description of FormUpload" />
            </Helmet>
            <Grid container spacing={3}>
                <Grid item lg={6} xs={12}>
                    <Card
                        title="Single Dropzone"
                        className="fileUpload">
                        <Dropzone
                            getUploadParams={getUploadParams}
                            onChangeStatus={handleChangeStatus}
                            onSubmit={handleSubmit}
                            accept="image/*,audio/*,video/*"
                            className="dropzonWrap"
                            maxFiles={1}
                        />
                    </Card>
                </Grid>
                <Grid item lg={6} xs={12}>
                    <Card
                        title="Symple Dropzone"
                        className="fileUpload">
                        <Dropzone
                            getUploadParams={getUploadParams}
                            onChangeStatus={handleChangeStatus}
                            onSubmit={handleSubmit}
                            accept="image/*,audio/*,video/*"
                            className="dropzonWrap"
                        />
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

export default compose(withConnect)(FormUpload);
