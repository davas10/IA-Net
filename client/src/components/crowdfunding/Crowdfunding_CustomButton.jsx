import React from 'react'

const CustomButton = ({ btnType, title, handleClick, styles }) => {
  return (
    <button
      type={btnType}
      className={`font-epilogue font-semibold text-[13px] leading-[26px] text-white min-h-[40px] px-4 rounded-[20px] ${styles}`}
      onClick={handleClick}
    >
       {title } 
     
    </button>
  )
}

export default CustomButton