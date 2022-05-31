import React, {useState, useCallback } from "react";
import PrefectureList from './PrefectureList';
import Graph from './Graph';

function Prefecture(props) {

  const [datas,setData] = useState([]);

  const handleCheckboxClick = useCallback(async (code, name, checked) => {
    if(checked){
        const res = await fetch(
            `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${code}`,
            { headers: { "X-API-KEY": process.env.REACT_APP_API_KEY } }
        );
        const d = await res.json();
        setData((prevDatas) => {
          if(!d) return [...prevDatas];
          return [
            ...prevDatas,
            {name: name, data: d.result.data[0].data },
          ];
        });
    }else{
      setData((prevDatas) => {
        return prevDatas.filter((item) => item.name !== name);
      });
    }
  },[]);

  return (
    <>
      <PrefectureList onChange={handleCheckboxClick}/>
      <Graph datas={datas}/>
    </>
  )
}

export default Prefecture
