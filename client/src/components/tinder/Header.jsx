import React, { useState }  from 'react'
import { useStateContext } from '../../context';
import { Crowdfunding_CustomButton } from '../../components/crowdfunding';
import { SiTinder } from 'react-icons/si';

const Header = ({ PageActiveCrowdFunding,  SetPageActiveCrowdFunding }) => {
   const { connect, address, activeMenu} = useStateContext();


   const style = {
    tinderText: `sm:flex text-5xl font-semibold cursor-pointer dark:text-white text-red-500 pt-1`,
  }

  return (
    <div className="flex flex-row rounded-[20px] dark:bg-secondary-dark-bg bg-white justify-between mb-[35px] gap-6 mt-10">
    

      <div className="pt-2">  <SiTinder size={40} color="#FF0000"/></div>
       <h1 className={style.tinderText}>tinder</h1>

      {/* CONNECT WALLET */}
      {activeMenu && !address ? (
           <div className="sm:flex hidden flex-row justify-end gap-4 p-2">
           <Crowdfunding_CustomButton 
             btnType="button"
             title={address ? '' : 'Connect wallet'}
             styles={address ? 'bg-[#197cc8]' : 'bg-[#8c6dfd]'}
             handleClick={() => {
               if(address)  { }
               else connect()
             }}
             
           />
   
         </div> 
          ) : (
            <div>

            </div>
          )}


   






    </div>
  )
}

export default Header