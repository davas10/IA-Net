import React from 'react'

const FormField = ({ labelName, placeholder, inputType, isTextArea, value, handleChange }) => {
  return (
    <label className="flex-1 w-full flex flex-col">
      {labelName && (
        <span className="font-epilogue font-medium text-[14px] leading-[22px]  dark:text-white text-[#808191] mb-[10px]">{labelName}</span>
      )}
      {isTextArea ? (
        <textarea 
          required
          value={value}
          onChange={handleChange}
          rows={10}
          placeholder={placeholder}
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] dark:border-white border-[#3a3a43] bg-transparent font-epilogue dark:text-white text-black text-[14px] dark:placeholder:text-[#8e929a] placeholder:text-[#8b8c8f]  rounded-[10px] sm:min-w-[300px]"
        />
      ) : (
        <input 
          required
          value={value}
          onChange={handleChange}
          type={inputType}
          step="0.1"
          placeholder={placeholder}
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] dark:border-white border-[#3a3a43] bg-transparent font-epilogue dark:text-white text-black text-[14px] dark:placeholder:text-[#8e929a] placeholder:text-[#8b8c8f] rounded-[10px] sm:min-w-[300px]"
        />
      )}
    </label>
  )
}

export default FormField