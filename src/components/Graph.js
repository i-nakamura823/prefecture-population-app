import React from 'react'
import { LineChart, XAxis, YAxis } from "recharts";

function Graph(props) {
  console.log(props.name);
  //console.log(props.datas[0].data);
  return (
  <div>
    <p>graph</p>
    <LineChart
      width={600}
      height={280}
      //data={props.datas}
      margin={{ top: 20, right: 60, bottom: 0, left: 0 }}
    >
      <XAxis datakey="year"/>
      <YAxis datakey="value"/>
    </LineChart>
  </div>
  )
}

export default Graph