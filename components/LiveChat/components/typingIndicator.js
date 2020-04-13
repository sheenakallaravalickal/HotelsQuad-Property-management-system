import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
class TypingIndicator extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        let typersDisplay = '';
        let countTypers = 0;
        for (var key in this.props.isTyping) {
            if (key != this.props.owner && this.props.isTyping[key]) {
                typersDisplay += ', ' + key;
                countTypers++;
            }
        }
        typersDisplay = typersDisplay.substr(1);
        typersDisplay += ((countTypers > 1) ? ' are ' : ' is ');
        if (countTypers > 0) {
            return (
                <Grid className="chatAppConvTyping">{typersDisplay}
                    writing
				    <span className="chatAppConvTypingDot"></span>
                </Grid>
            );
        }
        return (
            <Grid className="chatAppConvTyping"></Grid>
        );
    }
}
export default TypingIndicator