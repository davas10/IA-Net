import React, { useState }  from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useStateContext } from '../../context';
import { Crowdfunding_CustomButton } from '../../components/crowdfunding';
import { logo } from '../../assets/AIimages';

const HeaderAIimages = ({ PageActiveAIimages,  SetPageActiveAIimages }) => {
  const navigate = useNavigate();


  return (
    <div className="flex flex-row rounded-[20px] dark:bg-secondary-dark-bg bg-white justify-between mb-[35px] gap-6 mt-10">
    
   
      <div className="pt-2 pl-4">
      <button
      type={"button"}    
      onClick={() => {
        SetPageActiveAIimages("home"); navigate('/AIImage')      
      }}
    >
        <img src={logo} alt="logo" className="w-28 object-contain" />
     
    </button>

      </div>

        <div className="sm:flex hidden flex-row justify-end gap-4 p-2">
           <Crowdfunding_CustomButton 
             btnType="button"
             title={'Create-post'}
             styles={'bg-[#197cc8]'}
             handleClick={() => {
              SetPageActiveAIimages("create-post"); navigate('/AIImage')    
             }}
             
           />
   
         </div> 
    

    </div>
  )
}

export default HeaderAIimages