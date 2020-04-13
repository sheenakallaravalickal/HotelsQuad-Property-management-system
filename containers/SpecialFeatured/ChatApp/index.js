import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import messages from './messages';
import { Grid, Tab, Tabs, InputAdornment, TextField, Button } from '@material-ui/core'
import ScrollArea from 'react-scrollbar'
import ChatRoom from 'components/LiveChat'
import './style.scss'
// images
import img3 from 'images/team/img5.jpg';

// json 
import contacts from 'utils/json/contacts'

const searchingFor = search => chat => chat.name.toLowerCase().includes(search.toLowerCase()) || !search;

class ChatApp extends Component {
    state = {
        search: "",
        value: 0,
        contactsList: [],
    }
    handleChange = (event, newValue) => {
        this.setState({
            value: newValue
        })
    }
    componentDidMount() {
        this.setState({
            contactsList: contacts
        });
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <Grid className="chatApp">
                <Grid className="chatAppLeft">
                    <TextField
                        fullWidth
                        classes={{
                            root: 'searchContact',

                        }}
                        value={this.state.search}
                        name="search"
                        onChange={this.changeHandler}
                        placeholder="Search Chat"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment
                                    className="searchContactIcon"
                                    position="end">
                                    <i className="fa fa-search"></i>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <ScrollArea
                        speed={1}
                        className="chatScrollBar"
                        contentClassName='chatScrollBarContent'
                        horizontal={false}
                    >
                        <Tabs
                            orientation="vertical"
                            value={this.state.value}
                            onChange={this.handleChange}
                            classes={{
                                indicator: 'chatIndicator',
                                root: 'chatTabWrapper',
                                flexContainer: 'chatTabContainer'
                            }}
                        >
                            {this.state.contactsList.filter(searchingFor(this.state.search)).map((item, i) => (
                                <Tab
                                    disableRipple
                                    classes={{
                                        root: 'chatTabItem',
                                    }}
                                    icon={
                                        <span className="chatThumbImg">
                                            <img src={item.image !== null ? item.image : img3} />
                                        </span>
                                    }
                                    key={i}
                                    label={item.name} />
                            ))}
                        </Tabs>
                    </ScrollArea>
                </Grid>
                <Grid className="chatAppRight">
                    {contacts.map((item, i) => (
                        <Fragment key={i}>
                            {this.state.value === i && <Fragment>
                                <Grid className="chatAppHead">
                                    <h3>{item.name}</h3>
                                </Grid>
                                <ChatRoom />
                            </Fragment>}
                        </Fragment>
                    ))}
                </Grid>
            </Grid>
        )
    }
}

ChatApp.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
    };
}

const withConnect = connect(
    null,
    mapDispatchToProps,
);

export default compose(withConnect)(ChatApp);
