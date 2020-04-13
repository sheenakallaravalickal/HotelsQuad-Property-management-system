import React, { Component } from 'react'
import send from 'images/icons/send.png'
class InputMessage extends Component {
    handleSendMessage = (event) => {
        event.preventDefault();
        if (this.messageInput.value.length > 0) {
            this.props.sendMessageLoading(
                this.ownerInput.value,
                this.ownerAvatarInput.value,
                this.messageInput.value
            );
            this.messageInput.value = '';
        }
    }
    handleTyping = (event) => {
        if (this.messageInput.value.length > 0) {
            this.props.typing(this.ownerInput.value);
        }
        else {
            this.props.resetTyping(this.ownerInput.value);
        }
    }
    render() {
        var loadingClass = this.props.isLoading ? 'chatAppConvButtonLoading' : '';
        return (
            <form
                className="chatInputBox"
                onSubmit={this.handleSendMessage}>
                <input
                    type="hidden"
                    ref={owner => (this.ownerInput = owner)}
                    value={this.props.owner}
                />
                <input
                    type="hidden"
                    ref={ownerAvatar => (this.ownerAvatarInput = ownerAvatar)}
                    value={this.props.ownerAvatar}
                />
                <input
                    type="text"
                    ref={message => (this.messageInput = message)}
                    className="chatAppConvInput"
                    placeholder="Text message"
                    onKeyDown={this.handleTyping}
                    onKeyUp={this.handleTyping}
                    tabIndex="0"
                />
                <button
                    className="chatAppConvButton"
                    type="submit"
                    onClick={this.handleSendMessage}>
                    <img src={send} alt="" />
                </button>
            </form>
        );
    }
}
export default InputMessage