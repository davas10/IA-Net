import React from 'react'

const CustomButton = ({ btnType, title, handleClick, styles }) => {
  return (
    <button
      type={btnType}
      className={`font-epilogue font-semibold text-[18px] leading-[26px] text-white min-h-[40px] px-4 rounded-[20px] ${styles}`}
      onClick={handleClick}
    >
       {title.length > 10  ? title.substring(0,5) + '..............' + title.substring(title.length-4,title.length) : title  } 
     
    </button>
  )
}

export default CustomButton