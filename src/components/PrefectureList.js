import React, { useEffect, useState } from 'react'
import Checkbox from './Checkbox'


function PrefectureList(props) {
  const [datas, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://opendata.resas-portal.go.jp/api/v1/prefectures`,
        { headers: { "X-API-KEY": process.env.REACT_APP_API_KEY } }
      );
      const d = await res.json();
      console.log("useEffect dayo!!");
      console.log(d.result);
      setData(d.result);
    }
    fetchData();
  },[]);

  return (
    <div>
      {datas.map(data => (
        <Checkbox
          name={data.prefName}
          key={data.prefCode}
          code={data.prefCode}
          onChange={props.onChange}
        />
      ))}
    </div>
  )
}
export default PrefectureList