import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';
const Statistics = () => {
 
  const assignment=[
    {
        id:1,
        name: "assignment1",
        number:58
    },
    {
        id:2,
        name: " assignment2",
        number:60
    },
    {
        id:3,
        name: " assignment3",
        number:58
    },
    {
        id:4,
        name: "assignment4",
        number:59
    },
    {
        id:5,
        name: "assignment5",
        number:60
    },
    {
        id:6,
        name: "assignment6",
        number:60
    },
    {
        id:7,
        name: "assignment7",
        number:60
    }
  ]

    return (
        <div className='mt-20 mx-auto'>
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
        </div>
    );
};

export default Statistics;