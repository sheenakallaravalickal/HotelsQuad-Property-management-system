import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
class MessageItem extends Component {
    render() {
        let messagePosition = ((this.props.owner == this.props.sender) ? 'chatAppConvMessageItemRight' : 'chatAppConvMessageItemLeft');
        return (
            <Grid
                className={`chatAppConvMessageItem ${messagePosition}`}>
                <img
                    src={this.props.senderAvatar}
                    alt={this.props.sender}
                    className="chatAppConvMessageAvatar" />
                <div
                    className="chatAppConvMessageValue"
                    dangerouslySetInnerHTML={{ __html: this.props.message }}
                />
            </Grid>
        );
    }
}
export default MessageItem