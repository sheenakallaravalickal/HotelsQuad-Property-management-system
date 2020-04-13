import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import EventList from 'components/EventList/Loadable'
import { Grid, Tabs, Tab } from '@material-ui/core'
import Calendar from 'containers/Eventcalendar/Loadable'
import messages from './messages';

const EventCalendarComponent = () => {
    const [value, setValue] = useState(0)

    const tabChangeHandler = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Fragment>
            <Helmet>
                <title>Event Calendar</title>
            </Helmet>
            <Grid container spacing={3}>
                <Grid item xl={2} lg={3} xs={12}>
                    <Grid className="eventSidebar">
                        <Tabs
                            value={value}
                            orientation="vertical"
                            classes={{
                                indicator: 'eventIndigator',
                                flexContainer: 'eventTabContainer',
                                root: 'eventTabsWrap'
                            }}
                            onChange={tabChangeHandler}
                        >
                            <Tab
                                disableRipple
                                disableFocusRipple
                                disableTouchRipple
                                label='Event Calendar'
                                className="eventCalendar"
                            />
                            <Tab
                                disableRipple
                                disableFocusRipple
                                disableTouchRipple
                                label='All Events List'
                                className="allEventList"
                            />
                            <Tab
                                disableRipple
                                disableFocusRipple
                                disableTouchRipple
                                label='Monthly Event List'
                                className="monthlyEventList"
                            />
                        </Tabs>
                    </Grid>
                    <ul className="calendarList">
                        <li className="business">
                            Deciphering Lingo For Small Business Owners
                            <span>Business</span>
                        </li>
                        <li className="corporate">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            <span>Corporate</span>
                        </li>
                        <li className="tour">
                            Nostrum totam qui eius accusantium! Dicta ipsum
                            <span>Tour</span>
                        </li>
                        <li className="others">
                            Tempora quisquam veritatis temporibus delectus. Totam?
                            <span>Client</span>
                        </li>
                    </ul>

                </Grid>
                <Grid item xl={10} lg={9} xs={12}>
                    {value === 0 && <Calendar event />}
                    {value === 1 && <EventList />}
                    {value === 2 && <EventList />}
                </Grid>
            </Grid>
        </Fragment>
    );
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

export default compose(withConnect)(EventCalendarComponent);
