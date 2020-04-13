import React from 'react';
import { Tooltip, Line, LineChart, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Legend } from 'recharts';
import { Grid } from '@material-ui/core'
const line = [
    { name: 'Jan', conversion: 4000 },
    { name: 'Feb', conversion: 3000 },
    { name: 'Mar', conversion: 2780 },
    { name: 'Apr', conversion: 1890 },
    { name: 'May', conversion: 2390 },
    { name: 'Jun', conversion: 4000 },
    { name: 'Jul', conversion: 3000 },
    { name: 'Aug', conversion: 2780 },
    { name: 'Sep', conversion: 4000 },
    { name: 'Oct', conversion: 3000 },
    { name: 'Nov', conversion: 2780 },
    { name: 'Dec', conversion: 1890 },
];

const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
        return (
            <div className="custom-tooltip">
                <h4 className="label">$ {payload[0].value}</h4>
                <p>{label}</p>
            </div>
        );
    }
    return null;
};

const LineRechart = () => {
    return (
        <Grid className="lineRechart">
            <ResponsiveContainer>
                <LineChart
                    data={line}
                >
                    {/* verticalFill={['#555555', '#444444']} */}
                    <CartesianGrid vertical horizontal={false} fillOpacity={1} stroke="#f9f9f9" strokeDasharray="0" />
                    <XAxis axisLine={false} tickMargin={10} tickLine={false} stroke="#708093" dataKey="name" />
                    <YAxis axisLine={false} tickMargin={10} tickLine={false} stroke="#708093" />
                    <Tooltip content={<CustomTooltip />} />
                    <Line type="monotone"
                        dataKey="conversion"
                        stroke="#0EB7FE"
                        strokeWidth={4}
                        strokeDasharray="1"
                        dot={{ strokeWidth: 0, strokeWidth: 0, r: 0 }}
                        activeDot={{ stroke: "#ffffff", strokeWidth: 4, r: 7 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </Grid>
    );
}

export default LineRechart
