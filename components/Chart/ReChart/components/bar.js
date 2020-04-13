import React, { Component } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import { Grid } from '@material-ui/core'

import '../style.scss';

const data = [
    {
        name: 'Jan', Lost: 500, Organic: 240, Paid: 240,
    },
    {
        name: 'Feb', Lost: 300, Organic: 139, Paid: 221,
    },
    {
        name: 'Mar', Lost: 200, Organic: 980, Paid: 229,
    },
    {
        name: 'Apr', Lost: 278, Organic: 390, Paid: 200,
    },
    {
        name: 'May', Lost: 189, Organic: 260, Paid: 218,
    },
    {
        name: 'Jun', Lost: 239, Organic: 150, Paid: 150,
    },
    {
        name: 'Jul', Lost: 349, Organic: 300, Paid: 310,
    },
    {
        name: 'Aug', Lost: 349, Organic: 250, Paid: 35,
    },
    {
        name: 'Sep', Lost: 349, Organic: 150, Paid: 150,
    },
    {
        name: 'Oct', Lost: 349, Organic: 330, Paid: 190,
    },
    {
        name: 'Nov', Lost: 349, Organic: 130, Paid: 200,
    },
    {
        name: 'Dec', Lost: 349, Organic: 230, Paid: 290,
    },
];

class BarRechart extends Component {

    render() {
        return (
            <Grid className="responsiveRechart">
                <ResponsiveContainer>
                    <BarChart
                        data={data}
                    >
                        <CartesianGrid vertical={false} stroke="#f1f1f1" strokeDasharray="5" />
                        <XAxis axisLine={false} tickLine={false} tickMargin={10} dataKey="name" tick={{ fill: '#878AA0', fontSize: '14px' }} />
                        <YAxis axisLine={false} tickLine={false} tickMargin={10} tick={{ fill: '#878AA0', fontSize: '14px' }} />
                        <Tooltip cursor={{fill: '#f9f9f9'}}/>
                        <Legend align="right" verticalAlign="top" margin={{ bottom: 0 }} />
                        <Bar dataKey="Organic" stackId="a" barSize={5} fill="#BD20D3" />
                        <Bar dataKey="Paid" stackId="a" barSize={5} fill="#F1682C" />
                        <Bar dataKey="Lost" stackId="a" barSize={5} fill="#0EB7FE" />
                    </BarChart>
                </ResponsiveContainer>
            </Grid>
        );
    }
}

export default BarRechart
