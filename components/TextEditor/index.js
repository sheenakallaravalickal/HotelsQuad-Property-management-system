import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import './style.scss'

class TextEditor extends Component {
    state = {
        editorState: EditorState.createEmpty(),
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

    render() {
        const { editorState } = this.state;
        return (
            <div className="textEditor">
                <Editor
                    editorState={editorState}
                    wrapperClassName="demoWrapper"
                    editorClassName="demoEditor"
                    onEditorStateChange={this.onEditorStateChange}
                />
                <textarea
                    className="dnone"
                    disabled
                    value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                />
                <div>
                </div>
            </div>
        );
    }
}
export default TextEditor