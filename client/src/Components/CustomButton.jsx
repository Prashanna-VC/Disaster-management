import React from 'react'

const CustomButton = ({onClick,button}) => {
  return (
    <div>
      <button onClick={onClick} >{button}</button>
    </div>
  );
}

export default CustomButton