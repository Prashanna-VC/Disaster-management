import React from 'react'

const CustomInput = ({label,type,value,onChange}) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange}></input>
    </div>
  );
}

export default CustomInput