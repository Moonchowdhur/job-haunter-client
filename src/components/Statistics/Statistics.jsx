import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,ResponsiveContainer} from 'recharts';
const Statistics = () => {
 
  const assignment=[
    {
        id:1,
        name: "New Year New Mission",
        number:58
    },
    {
        id:2,
        name: "Responsive Website",
        number:60
    },
    {
        id:3,
        name: "Responsive Landing page",
        number:58
    },
    {
        id:4,
        name: "Basic Java Script",
        number:59
    },
    {
        id:5,
        name: "Geometry Genius",
        number:60
    },
    {
        id:6,
        name: " AI Universe",
        number:60
    },
    {
        id:7,
        name: " Devtool & Debug",
        number:60
    }
  ]

    return (
        <div className='mt-20 w-[80%] h-[400px] mx-auto'>
        <ResponsiveContainer width="100%" height="100%">
         <AreaChart
          width={1000}
          height={400}
          data={assignment}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="number" stroke="#8884d8" fill="#8884d8" />
        
        </AreaChart>
        </ResponsiveContainer>
        </div>
    );
};

export default Statistics;