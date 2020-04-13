import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import './style.scss'

// images 
import logo from 'images/avatar.svg'
class PopupChat extends Component {
    componentDidMount() {
        addResponseMessage("Welcome to HotelsQuad!");
    }

    handleNewUserMessage = (newMessage) => {
        addResponseMessage(response);
    }

    render() {
        return (
            <Widget
                handleNewUserMessage={this.handleNewUserMessage}
                profileAvatar={logo}
                title="Hi, how can I help you?"
                subtitle=""
            />
        )
    }
}
export default PopupChat;
