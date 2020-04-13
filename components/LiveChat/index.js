import React, { Fragment, Component } from 'react'
import ChatBox from './components/chatBox'
import { Grid } from '@material-ui/core'
import './style.scss'

// images
import img1 from 'images/team/img1.jpg';
import img2 from 'images/team/img2.jpg';

function detectURL(message) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return message.replace(urlRegex, function (urlMatch) {
        return '<a href="' + urlMatch + '">' + urlMatch + '</a>';
    })
}


class ChatRoom extends React.Component {
    state = {
        messages: [
            {
                id: 1,
                sender: 'Jone Doe',
                senderAvatar: img1,
                message: 'Hello'
            },
            {
                id: 2,
                sender: 'Hasib',
                senderAvatar: img2,
                message: 'Hey!'
            },
            {
                id: 3,
                sender: 'Hasib',
                senderAvatar: img2,
                message: 'How are you?'
            },
            {
                id: 4,
                sender: 'Jone Doe',
                senderAvatar: img1,
                message: 'Great! It\'s been a while...'
            },
            {
                id: 5,
                sender: 'Hasib',
                senderAvatar: img2,
                message: 'Indeed.... We\'re gonna have to fix that.'
            },
            {
                id: 6,
                sender: 'Jone Doe',
                senderAvatar: img1,
                message: 'Hello'
            },
            {
                id: 7,
                sender: 'Hasib',
                senderAvatar: img2,
                message: 'Hey!'
            },
            {
                id: 8,
                sender: 'Hasib',
                senderAvatar: img2,
                message: 'How are you?'
            },
            {
                id: 9,
                sender: 'Jone Doe',
                senderAvatar: img1,
                message: 'Great! It\'s been a while...'
            },
            {
                id: 10,
                sender: 'Hasib',
                senderAvatar: img2,
                message: 'Indeed.... We\'re gonna have to fix that.'
            },
        ],
        isTyping: [],
    };

    sendMessage = (sender, senderAvatar, message) => {
        setTimeout(() => {
            let messageFormat = detectURL(message);
            let newMessageItem = {
                id: this.state.messages.length + 1,
                sender: sender,
                senderAvatar: senderAvatar,
                message: messageFormat
            };
            this.setState({ messages: [...this.state.messages, newMessageItem] });
            this.resetTyping(sender);
        }, 400);
    }
    typing = (writer) => {
        if (!this.state.isTyping[writer]) {
            let stateTyping = this.state.isTyping;
            stateTyping[writer] = true;
            this.setState({ isTyping: stateTyping });
        }
    }
    resetTyping = (writer) => {
        let stateTyping = this.state.isTyping;
        stateTyping[writer] = false;
        this.setState({ isTyping: stateTyping });
    }

    render() {
        let users = {};
        let chatBoxes = [];
        let messages = this.state.messages;
        let isTyping = this.state.isTyping;
        let sendMessage = this.sendMessage;
        let typing = this.typing;
        let resetTyping = this.resetTyping;

        users[0] = { name: 'Jone Doe', avatar: img1 };
        // users[1] = { name: 'Hasib', avatar: 'https://i.pravatar.cc/150?img=56' };
        Object.keys(users).map(function (key) {
            const user = users[key];
            chatBoxes.push(
                <ChatBox
                    key={key}
                    owner={user.name}
                    ownerAvatar={user.avatar}
                    sendMessage={sendMessage}
                    typing={typing}
                    resetTyping={resetTyping}
                    messages={messages}
                    isTyping={isTyping}
                />
            );
        });
        return (
            <Fragment>
                {chatBoxes}
            </Fragment>
        )
    }
}
export default ChatRoom