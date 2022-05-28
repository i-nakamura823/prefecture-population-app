import React, {useState, useEffect} from 'react'

function Checkbox(props) {

  const [checked, setChecked] = useState(false);
  
  useEffect(() => {
    console.log("change checked!!!!");
  },[checked]);

  const handleCheckboxClick = () => {
    setChecked(!checked);
  }

  return (
    <div>
      <label>
        <input
          type="checkbox"
          code={props.code}
          onChange={handleCheckboxClick}
        />
        {props.name} 
      </label>
    </div>
  )
}

export default Checkbox