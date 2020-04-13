import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import MessageItem from './messageItem'
class MessageList extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <Grid className="chatAppConvTimeline">
                {this.props.messages.slice(0).reverse().map(
                    messageItem => (
                        <MessageItem
                            key={messageItem.id}
                            owner={this.props.owner}
                            sender={messageItem.sender}
                            senderAvatar={messageItem.senderAvatar}
                            message={messageItem.message}
                        />
                    )
                )}
            </Grid>
        );
    }
}
export default MessageList