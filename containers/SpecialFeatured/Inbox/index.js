import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { Grid, Tab, Tabs, InputAdornment, TextField, Button, Dialog, MenuItem } from '@material-ui/core'
import TextEditor from 'components/TextEditor/Loadable'

import ScrollArea from 'react-scrollbar'
import EmojiPicker from 'emoji-picker-react';
import messages from './messages';
import './style.scss'

// images 
import setting from 'images/icons/inbox/setting.svg'
import business from 'images/icons/inbox/business.svg'
import personal from 'images/icons/inbox/personal.svg'
import search from 'images/icons/inbox/search.svg'
import emailNotFound from 'images/email-notfound.svg'
import star from 'images/icons/star.svg'
import bar from 'images/icons/bar.svg'
import share from 'images/icons/share.svg'
import emozi from 'images/icons/emozi.svg'
import link from 'images/icons/link.svg'
import icon from 'images/icons/icon.svg'
import yellow from 'images/icons/yellow.svg'
// json 
import inboxs from 'utils/json/inbox'
const searchingFor = search => message => message.name.toLowerCase().includes(search.toLowerCase()) || !search;

class Inbox extends Component {
    state = {
        value: 0,
        search: "",
        active: 63125,
        star: false,
        emoji: false,
        details: {},
        open: false,
        email: '',
        cvc: '',
        message: '',
    }
    modalOpen = () => {
        this.setState({
            open: true
        })
    }
    handleClose = () => {
        this.setState({
            open: false
        })
    }
    activeHandler = id => {
        this.setState({
            active: id
        })
    }

    handleChange = (event, newValue) => {
        this.setState({
            value: newValue
        })
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    starHandler = () => {
        this.setState({
            star: !this.state.star
        })
    }
    emojiHandler = () => {
        this.setState({
            emoji: !this.state.emoji
        })
    }
    myCallback = () => {

    }
    render() {
        return (
            <Fragment>
                <Helmet>
                    <title>Inbox</title>
                </Helmet>
                <Grid className="inboxWrapper">
                    <Grid className="inboxNavigationWrap">
                        <Grid className="composeBtn">
                            <Button onClick={this.modalOpen}>
                                <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="edit" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="svg-inline--fa fa-edit fa-w-18 fa-fw fa-2x"><path fill="currentColor" d="M417.8 315.5l20-20c3.8-3.8 10.2-1.1 10.2 4.2V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h292.3c5.3 0 8 6.5 4.2 10.2l-20 20c-1.1 1.1-2.7 1.8-4.2 1.8H48c-8.8 0-16 7.2-16 16v352c0 8.8 7.2 16 16 16h352c8.8 0 16-7.2 16-16V319.7c0-1.6.6-3.1 1.8-4.2zm145.9-191.2L251.2 436.8l-99.9 11.1c-13.4 1.5-24.7-9.8-23.2-23.2l11.1-99.9L451.7 12.3c16.4-16.4 43-16.4 59.4 0l52.6 52.6c16.4 16.4 16.4 43 0 59.4zm-93.6 48.4L403.4 106 169.8 339.5l-8.3 75.1 75.1-8.3 233.5-233.6zm71-85.2l-52.6-52.6c-3.8-3.8-10.2-4-14.1 0L426 83.3l66.7 66.7 48.4-48.4c3.9-3.8 3.9-10.2 0-14.1z" className=""></path></svg>
                                Compose
                            </Button>
                        </Grid>
                        <Tabs
                            orientation="vertical"
                            value={this.state.value}
                            onChange={this.handleChange}
                            classes={{
                                indicator: 'inboxIndicator',
                                root: 'inboxTabWrapper',
                                flexContainer: 'inboxTabContainer'
                            }}
                        >
                            {inboxs.map((item, i) => (
                                <Tab
                                    key={i}
                                    classes={{
                                        root: 'inboxTabItem',
                                    }}
                                    icon={
                                        <span className="inboxThumbImg">
                                            <img src={item.icon} alt="" />
                                        </span>
                                    }
                                    label={item.name} />
                            ))}
                            <Grid className="devaider"></Grid>
                            <Tab
                                classes={{
                                    root: 'inboxTabItem',
                                }}
                                icon={
                                    <span className="inboxThumbImg">
                                        <img src={personal} alt="" />
                                    </span>
                                }
                                label='Personal email' />
                            <Tab
                                classes={{
                                    root: 'inboxTabItem',
                                }}
                                icon={
                                    <span className="inboxThumbImg">
                                        <img src={business} alt="" />
                                    </span>
                                }
                                label='Business email' />
                            <Tab
                                classes={{
                                    root: 'inboxTabItem',
                                }}
                                icon={
                                    <span className="inboxThumbImg">
                                        <img src={setting} alt="" />
                                    </span>
                                }
                                label='Manage labels' />
                        </Tabs>
                    </Grid>

                    {inboxs.map((item, i) => (
                        <Fragment key={i}>
                            {this.state.value === i && <Fragment>
                                {item.messages.length > 0 ? <Fragment>
                                    <Grid className="inboxItemWrap">
                                        <TextField
                                            fullWidth
                                            classes={{
                                                root: 'searchMessage',

                                            }}
                                            value={this.state.search}
                                            name="search"
                                            onChange={this.changeHandler}
                                            placeholder="Type to search"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment
                                                        className="searchContactIcon"
                                                        position="end">
                                                        <img src={search} alt="" />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                        <ScrollArea
                                            speed={.5}
                                            className="inboxScrollBar"
                                            contentClassName='inboxScrollBarContent'
                                            horizontal={false}
                                        >
                                            <ul className="inboxItemMessageWrap">
                                                {item.messages.filter(searchingFor(this.state.search)).map((message, i) => (
                                                    <li
                                                        onClick={(e) => this.activeHandler(message.id)}
                                                        className={this.state.active === message.id ? 'inboxItemMessageItem active' : "inboxItemMessageItem"}
                                                        key={i}>
                                                        <Grid className="inboxMessageImg">
                                                            {
                                                                message.image === '' ?
                                                                    <span className="nameShort">
                                                                        {message.name.split(' ').map(function (message) { return message[0] }).join('')}
                                                                    </span>
                                                                    :
                                                                    <img src={message.image} alt="" />
                                                            }
                                                        </Grid>
                                                        <Grid className="inboxMessagecontent">
                                                            <h4>{message.name} <span>{message.time}</span></h4>
                                                            <h3>{message.subject}</h3>
                                                            <p>{message.message}</p>
                                                        </Grid>
                                                    </li>
                                                ))}
                                            </ul>
                                        </ScrollArea>
                                    </Grid>
                                    {item.messages.map((message, i) => (
                                        <Fragment key={i}>{this.state.active === message.id && <Grid className="inboxDetailsWrap">
                                            <h2>{message.subject}</h2>
                                            <Grid className="inboxHeader">
                                                <Grid className="inboxHeadLeft">
                                                    <Grid className="heraderLeftIcon">
                                                        <Grid className="inboxMessageImg">
                                                            {
                                                                message.image === '' ?
                                                                    <span className="nameShort">
                                                                        {message.name.split(' ').map(function (message) { return message[0] }).join('')}
                                                                    </span>
                                                                    :
                                                                    <img src={message.image} alt="" />
                                                            }
                                                        </Grid>
                                                    </Grid>
                                                    <Grid className="heraderLeftContent">
                                                        <h3>{message.name} <span>{message.email}</span></h3>
                                                        <h4>to {message.send}</h4>
                                                    </Grid>
                                                </Grid>
                                                <ul className="inboxHeadRight">
                                                    <li onClick={this.starHandler}><img src={this.state.star ? yellow : star} alt="" /></li>
                                                    <li><img src={share} alt="" /></li>
                                                    <li><img src={bar} alt="" /></li>
                                                </ul>
                                            </Grid>
                                            <Grid className="inboxDetailsContent">
                                                <p>{message.message}</p>
                                                <p>Recognition can be illustrated by two inGrididuals entering a crowded room at a party. Both walk to the far side of the room, one of them slips through the crowd easily and unnoticed as they reach the far side. The second person takes much longer to reach the far side because they are engaged in conversations along the way as they continue to meet acquaintances and friends during their path. Which type of person would you like to model your business after? </p>
                                                <p>Your business is in a continual battle for your customers’ recognition whether you know it or not. If you happen to be fortunate enough to be in a marketplace with very few competitors, that will not last for long. You need your business to be at the forefront of your client’s minds so that when they require your products or services, you are the go-to people. </p>
                                            </Grid>
                                            <Grid className="inboxDetailsInputBox">
                                                <textarea placeholder="Type to compose your reply"></textarea>
                                                <ul className="inboxDetailsInputIcon">
                                                    <li><img src={link} alt="" /></li>
                                                    <li onClick={this.emojiHandler}><img src={emozi} alt="" /></li>
                                                    <li><Button><img src={icon} alt="" /></Button></li>
                                                </ul>
                                            </Grid>
                                            {this.state.emoji ? <EmojiPicker onEmojiClick={this.myCallback} className="emojiWrapper" /> : ''}
                                        </Grid>}
                                        </Fragment>

                                    ))}
                                </Fragment>
                                    : <Grid className="emailNotFoundWrap">
                                        <img src={emailNotFound} alt="" />
                                        <h3>No email found?</h3>
                                        <p>Try to add more contacts from your personal</p>
                                        <p>account or compose email to someone</p>
                                    </Grid>}
                            </Fragment>
                            }
                        </Fragment>
                    ))}
                </Grid>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    className="modalWrapper forumModalWrap"
                >
                    <Grid className="modalTitle">
                        <h3>Compose a email</h3>
                    </Grid>
                    <Grid className="modalBody">
                        <TextField
                            label="Email"
                            className='inputField mb-30'
                            fullWidth
                            name='email'
                            variant="outlined"
                            value={this.state.email}
                            onChange={this.changeHandler}
                        />
                        <TextField
                            label="CVC"
                            className='inputField mb-30'
                            fullWidth
                            name="cvc"
                            variant="outlined"
                            value={this.state.cvc}
                            onChange={this.changeHandler}
                        />
                        <TextEditor />
                    </Grid>
                    <Grid className="modalFooter">
                        <Button onClick={this.handleClose}> Cancel </Button>
                        <Button onClick={this.handleClose}>  Agree</Button>
                    </Grid>
                </Dialog>
            </Fragment >
        )
    }
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

export default compose(withConnect)(Inbox);
