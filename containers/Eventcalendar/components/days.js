import React, { Component, Fragment } from 'react'
import { Grid, Button } from '@material-ui/core'

class Day extends Component {
    checkDayEvnet(day) {
        let event = "";
        this.props.selectedMonthEvents.map((item, i) => {
            if (item.date._d.getDate() == day) {
                event = <Grid
                    key={i}
                    className={`dayEventsWrap ${item.className}`}
                >
                    <span>{item.date.format("h:mm A")}</span>
                    <span>{item.title}</span>
                </Grid>;
            }
        })

        return event;
    }
    render() {
        let day = this.props.day;
        let selected = this.props.selected;
        let select = this.props.select;

        return (
            <Grid
                className={
                    "dayWrap" +
                    (day.isToday ? " today" : "") +
                    (day.isCurrentMonth ? "" : " differentMonth") +
                    (day.date.isSame(selected) ? " selected" : "") +
                    (day.hasEvents ? " hasEvents" : "")
                }
                onClick={() => select(day)}
            >
                {day.hasEvents ? <Fragment>
                    <Button disabled={day.isCurrentMonth ? false : true} className="dayNumber">{day.number}</Button>
                    {this.checkDayEvnet(day.number)}
                </Fragment> :
                    <Button disabled={day.isCurrentMonth ? false : true} className="dayNumber">{day.number}</Button>}
            </Grid>
        );
    }
}
export default Day