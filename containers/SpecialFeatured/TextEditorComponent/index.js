import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import Card from 'components/Card/Loadable'
import { Grid } from '@material-ui/core'
import messages from './messages';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import './style.scss'


const content = { "entityMap": {}, "blocks": [{ "key": "637gr", "text": "Initialized from content state.", "type": "unstyled", "depth": 0, "inlineStyleRanges": [], "entityRanges": [], "data": {} }] }
const contentState = convertFromRaw(content);
const TextEditorComponent = () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty())
    const [uncontrolEditor, setUncontrolEditor] = useState(contentState)

    function onEditorStateChange(editorState) {
        setEditorState(editorState)
    };

    function onUncontrolEditorChnage(uncontrolEditor) {
        setUncontrolEditor(uncontrolEditor)
    }

    return (
        <Fragment>
            <Helmet>
                <title>Text Editor</title>
            </Helmet>
            <Grid container spacing={3}>
                <Grid item xl={6} xs={12}>
                    <Card
                        title="Controlled editor"
                        className="textEditor">
                        <Editor
                            editorState={editorState}
                            wrapperClassName="demoWrapper"
                            editorClassName="demoEditor"
                            onEditorStateChange={onEditorStateChange}
                        />
                        <textarea
                            className="viweText"
                            disabled
                            value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                        />
                    </Card>
                </Grid>
                <Grid item xl={6} xs={12}>
                    <Card
                        title="Uncontrolled editor"
                        className="textEditor"
                    >
                        <Editor
                            wrapperClassName="demoWrapper"
                            editorClassName="demoEditor"
                            onContentStateChange={onUncontrolEditorChnage}
                        />
                        <textarea
                            className="viweText"
                            disabled
                            value={JSON.stringify(contentState, null, 4)}
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

export default compose(withConnect)(TextEditorComponent);
