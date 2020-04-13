/**
 *
 * WebsiteVisitors
 *
 */
import React, { Component, Fragment } from 'react';
import {
    PieChart, Pie, Tooltip, Cell, ResponsiveContainer,
} from 'recharts';
import { Grid } from '@material-ui/core'

import './style.scss'

const data = [
    { name: 'Direct', value: 3.1, color: '#3B53DB' },
    { name: 'Email', value: 7.2, color: '#F1682C' },
    { name: 'Referral', value: 1.1, color: '#BD20D3' },
    { name: 'Paid', value: 9.1, color: '#0EB7FE' },
];
const COLORS = ['#3B53DB', '#F1682C', '#BD20D3', '#0EB7FE'];


class WebsiteVisitors extends Component {
    render() {
        return (
            <Fragment>
                <Grid className="visitorsPieChart">
                    <Grid className="innerText">
                        <h4>36,278</h4>
                        <span>Visitors</span>
                    </Grid>
                    <ResponsiveContainer>
                        <PieChart onMouseEnter={this.onPieEnter}>
                            <Pie
                                data={data}
                                innerRadius={60}
                                outerRadius={80}
                                dataKey="value"
                            >
                                {
                                    data.map((entry, index) => <Cell key={`cell-${index}`} stroke={COLORS[index % COLORS.length]} fill={COLORS[index % COLORS.length]} />)
                                }
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </Grid>
                <ul className="wbvisitorsInfo">
                    {data.map((item, i) => {
                        return (
                            <li key={i}><span style={{ background: item.color }}></span> <p>{item.name}</p> <strong>{item.value}k</strong></li>
                        )
                    })}
                </ul>
            </Fragment>
        );
    }
}

export default WebsiteVisitors;
