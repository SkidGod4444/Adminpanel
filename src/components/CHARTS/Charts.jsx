import "./charts.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Charts({title, data, dataKey, grid}) {

      
  return (
    <div className="charts">
    <h3 className="chartstitle">{title}</h3>
    <ResponsiveContainer width="100%" aspect={4 / 1}>
    <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
        }}
    >
        {grid && <CartesianGrid strokeDasharray="3 3" />}
        <XAxis dataKey="name" stroke="#5550bd" />
        <Line type="monotone" dataKey={dataKey} stroke="#82ca9d" />
        <Tooltip />
    </LineChart>
    </ResponsiveContainer>
    </div>
  )
}
