import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import InputMessage from './inputMessage'
import TypingIndicator from './typingIndicator'
import MessageList from './messageList'
import ScrollArea from 'react-scrollbar'
class ChatBox extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isLoading: false
        };
        var timeout = null;
    }
    sendMessageLoading = (sender, senderAvatar, message) => {
        this.setState({ isLoading: true });
        this.props.sendMessage(sender, senderAvatar, message);
        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 400);
    }
    render() {
        return (

            <Grid className="chatAppConv">
                <ScrollArea
                    speed={1}
                    className="chatScrollBar"
                    contentClassName='chatScrollBarContent'
                    horizontal={false}
                >
                    <MessageList
                        owner={this.props.owner}
                        messages={this.props.messages}
                    />
                </ScrollArea>
                <Grid className="chatAppConvSendMessage">
                    <TypingIndicator
                        owner={this.props.owner}
                        isTyping={this.props.isTyping}
                    />
                    <InputMessage
                        isLoading={this.state.isLoading}
                        owner={this.props.owner}
                        ownerAvatar={this.props.ownerAvatar}
                        sendMessage={this.props.sendMessage}
                        sendMessageLoading={this.sendMessageLoading}
                        typing={this.props.typing}
                        resetTyping={this.props.resetTyping}
                    />
                </Grid>
            </Grid>
        );
    }
}
export default ChatBox