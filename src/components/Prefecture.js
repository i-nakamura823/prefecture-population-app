import React, { useEffect, useState, useCallback } from "react";
import PrefectureList from './PrefectureList';
import Graph from './Graph';

function Prefecture(props) {

  const [datas,setData] = useState([]);
  const [PrefectureName, setPrefectureName] = useState("");

  const handleCheckboxClick = useCallback(async (code, name, checked) => {
    if(checked){
        const res = await fetch(
            `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${code}`,
            { headers: { "X-API-KEY": process.env.REACT_APP_API_KEY } }
        );
        const d = await res.json();
        console.log("useEffect population dayo!!");
        console.log(d.result.data[0].data);
        setData(d.result.data[0].data);
        setPrefectureName(name);
    }
  },[]);

  return (
    <>
      <PrefectureList onChange={handleCheckboxClick}/>
      <Graph datas={datas} name={PrefectureName}/>
    </>
  )
}

export default Prefecture
