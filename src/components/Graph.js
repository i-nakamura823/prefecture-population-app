import React from 'react'
import { LineChart, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Line, CartesianGrid, PieChart, Pie } from "recharts";
import "../style/Graph.css"

function Graph(props) {
  if(props.name!=""){
    console.log(props.name);
    console.log(props.datas);
    return (
      <div className='graph-container'>
        <h2 className='graph-title'>{props.name}の人口推移</h2>
        {/* <ResponsiveContainer width="100%" height="100%"> */}
          <LineChart 
            width={500} 
            height={300}
            margin={10}
          >
            <XAxis dataKey="year"/>
            <CartesianGrid strokeDasharray="2 2"/>
            <Tooltip />
            <Line data={props.datas} dataKey="value" cx="50%" cy="50%" fill="#82ca9d"/>
          </LineChart>
        {/* </ResponsiveContainer> */}
      </div>
    )
  }else{
    console.log("no data!");
    return(
      <h2 className='graph-title'>人口推移</h2>
    )
  }  
}

export default Graph