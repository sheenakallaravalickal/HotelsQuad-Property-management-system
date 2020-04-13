import React, { Component, Fragment } from 'react'
import moment from 'moment'
import Week from './components/week'
import DayNames from './components/dayname'
import Events from './components/events'
import { Grid, Button, Tabs, Tab } from '@material-ui/core'
import './style.scss'



class Calendar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedMonth: moment(),
            selectedDay: moment().startOf("day"),
            selectedMonthEvents: [],
            showEvents: false,
            selectOtherMonth: false,
        };

        this.initialiseEvents();
    }

    previous = () => {
        const currentMonthView = this.state.selectedMonth;

        this.setState({
            selectedMonth: currentMonthView.subtract(1, "month")
        });
    }

    next = () => {
        const currentMonthView = this.state.selectedMonth;
        this.setState({
            selectedMonth: currentMonthView.add(1, "month"),
            selectOtherMonth: true
        });
    }

    select = (day) => {
        this.setState({
            selectedMonth: day.date,
            selectedDay: day.date.clone(),
            showEvents: true
        });
    }

    goToCurrentMonthView = () => {
        const currentMonthView = this.state.selectedMonth;
        this.setState({
            selectedMonth: moment()
        });
    }

    showCalendar = () => {
        this.setState({
            selectedMonth: this.state.selectedMonth,
            selectedDay: this.state.selectedDay,
            showEvents: false
        });
    }

    renderMonthLabel = () => {
        const currentMonthView = this.state.selectedMonth;
        return (
            <span className="monthLabel">
                {currentMonthView.format("MMMM YYYY")}
            </span>
        );
    }

    renderDayLabel = () => {
        const currentSelectedDay = this.state.selectedDay;
        return (
            <span className="monthLabel">
                {currentSelectedDay.format("DD MMMM YYYY")}
            </span>
        );
    }

    renderTodayLabel = () => {
        const currentSelectedDay = this.state.selectedDay;
        return (
            <span className="todayLabel"
                onClick={this.goToCurrentMonthView}>
                Today
            </span>
        );
    }

    renderWeeks = () => {
        const currentMonthView = this.state.selectedMonth;
        const currentSelectedDay = this.state.selectedDay;
        const monthEvents = this.state.selectedMonthEvents;

        let weeks = [];
        let done = false;
        let previousCurrentNextView = currentMonthView
            .clone()
            .startOf("month")
            .subtract(1, "d")
            .day("Monday");
        let count = 0;
        let monthIndex = previousCurrentNextView.month();

        while (!done) {
            weeks.push(
                <Week
                    previousCurrentNextView={previousCurrentNextView.clone()}
                    currentMonthView={currentMonthView}
                    monthEvents={monthEvents}
                    selected={currentSelectedDay}
                    select={day => this.select(day)}
                    selectedMonthEvents={this.state.selectedMonthEvents}
                />
            );
            previousCurrentNextView.add(1, "w");
            done = count++ > 2 && monthIndex !== previousCurrentNextView.month();
            monthIndex = previousCurrentNextView.month();
        }
        return weeks;
    }

    handleAdd = () => {
        const monthEvents = this.state.selectedMonthEvents;
        const currentSelectedDate = this.state.selectedDay;

        let newEvents = [];

        var eventTitle = prompt("Please enter a name for your event: ");

        switch (eventTitle) {
            case "":
                alert("Event name cannot be empty.");
                break;
            case null:
                alert("Changed your mind? You can add one later!");
                break;
            default:
                var newEvent = {
                    title: eventTitle,
                    date: currentSelectedDate,
                    dynamic: true
                };

                newEvents.push(newEvent);

                for (var i = 0; i < newEvents.length; i++) {
                    monthEvents.push(newEvents[i]);
                }

                this.setState({
                    selectedMonthEvents: monthEvents
                });
                break;
        }
    }

    addEvent = () => {
        const currentSelectedDate = this.state.selectedDay;
        let isAfterDay = moment().startOf("day").subtract(1, "d");

        if (currentSelectedDate.isAfter(isAfterDay)) {
            this.handleAdd();
        } else {
            if (confirm("Are you sure you want to add an event in the past?")) {
                this.handleAdd();
            } else {
            } // end confirm past
        } //end is in the past
    }

    removeEvent = (i) => {
        const monthEvents = this.state.selectedMonthEvents.slice();
        const currentSelectedDate = this.state.selectedDay;

        if (confirm("Are you sure you want to remove this event?")) {
            let index = i;

            if (index != -1) {
                monthEvents.splice(index, 1);
            } else {
                alert("No events to remove on this day!");
            }

            this.setState({
                selectedMonthEvents: monthEvents
            });
        }
    }

    initialiseEvents = () => {
        const monthEvents = this.state.selectedMonthEvents;

        let allEvents = [];

        let event1 = {
            title: "Spain Tour",
            date: moment().startOf("day").add(15, "h"),
            className: 'tour',
            dynamic: false
        };

        let event2 = {
            title: "Corporate Meeting",
            date: moment().startOf("day").subtract(1, "d").add(24, "h"),
            className: 'corporate',
            dynamic: false
        };

        let event3 = {
            title: "Business Meeting",
            date: moment().startOf("day").subtract(5, "d").add(18, "h"),
            className: 'business',
            dynamic: false
        };

        let event4 = {
            title: "Others Meeting",
            date: moment().startOf("day").subtract(8, "d").add(20, "h"),
            className: 'others',
            dynamic: false
        };

        let event5 = {
            title: "Client Meeting",
            date: moment().startOf("day").subtract(13, "d").add(25, "h"),
            className: 'client',
            dynamic: false
        };

        allEvents.push(event1);
        allEvents.push(event2);
        allEvents.push(event3);
        allEvents.push(event4);
        allEvents.push(event5);

        for (var i = 0; i < allEvents.length; i++) {
            monthEvents.push(allEvents[i]);
        }

        this.setState({
            selectedMonthEvents: monthEvents
        });
    }

    render() {
        const showEvents = this.state.showEvents;
        return (<Fragment>
            {showEvents ? <Grid className={this.props.className ? `mainCalendar ${this.props.className}` : 'mainCalendar'}>
                <Grid className="calendarHeader">
                    <Grid className="titleHeader">
                        {this.renderDayLabel()}
                    </Grid>
                    <Grid className="buttonContainer">
                        <Button
                            className="arrowBtn"
                            onClick={this.showCalendar}>
                            <i className="fa fa-angle-left" />
                        </Button>
                        <Button
                            className="eventBtn"
                            onClick={this.addEvent}>
                            <i className="fa fa-plus-square" />
                        </Button>
                    </Grid>
                </Grid>
                {this.props.event && <Events
                    selectedMonth={this.state.selectedMonth}
                    selectedDay={this.state.selectedDay}
                    selectedMonthEvents={this.state.selectedMonthEvents}
                    removeEvent={i => this.removeEvent(i)}
                />}

            </Grid > : <Grid className={this.props.className ? `mainCalendar ${this.props.className}` : 'mainCalendar'}>
                    <Grid className="calendarHeader">
                        <Grid className="titleHeader">
                            <Button
                                className="arrowBtn"
                                onClick={this.previous}>
                                <i className="fa fa-angle-left" />
                            </Button>
                            <Grid className="headerText">
                                {this.state.selectOtherMonth ? this.renderTodayLabel() : ''}
                                {this.renderMonthLabel()}
                            </Grid>
                            <Button
                                className="arrowBtn"
                                onClick={this.next}>
                                <i className="fa fa-angle-right" />
                            </Button>
                        </Grid>
                        <DayNames />
                    </Grid>
                    <Grid className="daysContainer">
                        {this.renderWeeks()}
                    </Grid>
                </Grid>
            }
        </Fragment>
        )
    }
}
export default Calendar