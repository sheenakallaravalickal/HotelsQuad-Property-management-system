import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Grid, Button } from '@material-ui/core'
class Events extends Component {
    render() {
        const currentMonthView = this.props.selectedMonth;
        const currentSelectedDay = this.props.selectedDay;
        const monthEvents = this.props.selectedMonthEvents;
        const removeEvent = this.props.removeEvent;

        const monthEventsRendered = monthEvents.map((event, i) => {
            return (
                <Grid
                    key={i}
                    className="eventContainer"
                >
                    <ReactCSSTransitionGroup
                        component="div"
                        className="animatedTime"
                        transitionName="time"
                        transitionAppear={true}
                        transitionAppearTimeout={500}
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}
                    >
                        <span className="eventTime eventAttribute">
                            {event.date.format("HH:mm")}
                        </span>
                    </ReactCSSTransitionGroup>
                    <ReactCSSTransitionGroup
                        component="div"
                        className="animatedTitle"
                        transitionName="title"
                        transitionAppear={true}
                        transitionAppearTimeout={500}
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}
                    >
                        <span className="eventTitle eventAttribute">{event.title}</span>
                    </ReactCSSTransitionGroup>
                    <ReactCSSTransitionGroup
                        component="div"
                        className="animatedDelete"
                        transitionName="title"
                        transitionAppear={true}
                        transitionAppearTimeout={500}
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}
                    >
                        <i onClick={() => removeEvent(i)} className="fa fa-trash"></i>
                    </ReactCSSTransitionGroup>
                </Grid>
            );
        });

        const dayEventsRendered = [];

        for (var i = 0; i < monthEventsRendered.length; i++) {
            if (monthEvents[i].date.isSame(currentSelectedDay, "day")) {
                dayEventsRendered.push(monthEventsRendered[i]);
            }
        }

        return (
            <Grid className="dayEvents">
                {dayEventsRendered}
            </Grid>
        );
    }
}
export default Events