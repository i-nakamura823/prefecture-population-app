import React, {useState, useEffect} from 'react'
import '../style/Checkbox.css'

function Checkbox(props) {

  // const [checked, setChecked] = useState(false);
  // const [datas,setData] = useState([]);
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch(
  //       `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${props.code}`,
  //       { headers: { "X-API-KEY": process.env.REACT_APP_API_KEY } }
  //     );
  //     const d = await res.json();
  //     console.log("useEffect dayo!!");
  //     console.log(d.result.data);
  //     setData(d.result.data);
  //   }
  //   if(checked){
  //     console.log("change checked!!!!");
  //     fetchData();
  //   }
  // },[checked]);

  // const handleCheckboxClick = () => {
  //   setChecked(!checked);
  // }

  return (
    <div className='checkbox'>
      <label className='label'>
        <input
          type="checkbox"
          code={props.code}
          onChange={(e) => props.onChange(props.code, props.name, e.target.checked)}
        />
        {props.name} 
      </label>
    </div>
  )
}

export default Checkbox