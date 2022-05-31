import React from 'react'
import { LineChart, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Line, CartesianGrid} from "recharts";
import "../style/Graph.css"

function Graph({datas}) {
  console.log(datas);
  return(
    <div>
      <h2>人口の推移</h2>
      <div className='graph'>
        <ResponsiveContainer width="90%" height="90%">
          <LineChart
            margin={{
              top: 10,
              right: 30,
              left: 30,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="2 2"/>
            <XAxis 
              dataKey="year"
              name="年"
              allowDuplicatedCategory={false}
            />
            <YAxis 
              name="人口"
            />
            <Tooltip />
            <Legend />
            {datas.map((data) => {
              return(
                <Line 
                  key={data.name}
                  dataKey="value"
                  data={data.data}
                  name={data.name}
                />
              )
            })}
          </LineChart>
        </ResponsiveContainer>
      </div>
      <h3>表示中</h3>
      <div className='prefname'>
        {datas.map((data) => {
          return(
            <p key={data.name} className="pname">{data.name}</p>
          )
        })}
      </div>
    </div>
  ); 
}

export default Graph