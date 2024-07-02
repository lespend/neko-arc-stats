import { useQuery, useQueryClient } from '@tanstack/react-query';
import { AreaChart, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area } from 'recharts';
import { getOnlineChart } from '../api';


export interface OnlineChartProps {
    height: number;
}

const OnlineChart = ({height}: OnlineChartProps) => {
    const { data } = useQuery({ queryKey: ['online-chart'], queryFn: getOnlineChart })
    
    return (
        <ResponsiveContainer width="100%" height={height}>
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 40, right: 30, left: -10, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke='#0c0a09' />
                <YAxis stroke='#0c0a09' />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="online" stroke="#F97316" strokeWidth={7} activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default OnlineChart;