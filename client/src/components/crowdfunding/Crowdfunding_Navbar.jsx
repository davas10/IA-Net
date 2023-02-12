import React, { useState }  from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { useStateContext } from '../../context';
import { Crowdfunding_CustomButton } from '../../components/crowdfunding';
import { logo, menu, search, thirdweb } from '../../assets';
import { navlinks } from '../../data/dummy';

const Navbar = ({ PageActiveCrowdFunding,  SetPageActiveCrowdFunding }) => {
   const navigate = useNavigate();
   const { connect, address } = useStateContext();
   const {  activeMenu } = useStateContext();
   const [toggleDrawer, setToggleDrawer] = useState(false);

  return (
    <div className="flex md:flex-row flex-col-reverse rounded-[20px] dark:bg-secondary-dark-bg bg-white justify-between mb-[35px] gap-6 mt-10">


      {/*  */}
      <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pr-2 h-[52px] bg-slate-200 dark:bg-[#1c1c24] rounded-[100px] ml-8 mt-2 mb-2">
         <input type="text" placeholder="Search for campaigns" className="flex w-full font-epilogue font-normal text-[14px] ml-4 placeholder:text-black dark:placeholder:text-white  text-black dark:text-white bg-transparent outline-none" /> 
        
        <div className="w-[72px] h-full rounded-[20px] bg-[#197cc8] flex justify-center items-center cursor-pointer">
          <img src={search} alt="search" className="w-[13px] h-[13px] object-contain"/>
        </div>
      </div>


      {/*  */}
      {activeMenu ? (
           <div className="sm:flex hidden flex-row justify-end gap-4 p-2">
           <Crowdfunding_CustomButton 
             btnType="button"
             title={address ? 'Create a campaign' : 'Connect wallet'}
             styles={address ? 'bg-[#197cc8]' : 'bg-[#8c6dfd]'}
             handleClick={() => {
               if(address)  {  SetPageActiveCrowdFunding("campaign"); navigate('/crowdFunding')}
               else connect()
             }}
             
           />
   
         </div> 
          ) : (
            <div>

            </div>
          )}


       {/* Small screen navigation */}
       <div className="sm:hidden flex justify-between items-center relative">
        {/* <div className="w-[40px] h-[40px] rounded-[10px] bg-[#2c2f32] flex justify-center items-center cursor-pointer">
            <img src={logo} alt="user" className="w-[60%] h-[60%] object-contain" />
          </div> */}

          <img 
            src={menu}
            alt="menu"
            className="w-[34px] h-[34px] object-contain cursor-pointer"
            onClick={() => setToggleDrawer((prev) => !prev)}
          />

          <div className={`absolute top-[60px] right-0 left-0 bg-[#1c1c24] z-10 shadow-secondary py-4 ${!toggleDrawer ? '-translate-y-[100vh]' : 'translate-y-0'} transition-all duration-700`}>
            <ul className="mb-4">
              {navlinks.map((link) => (
                <li
                  key={link.name}
                  className={`flex p-4 ${PageActiveCrowdFunding === link.name && 'bg-[#3a3a43]'}`}
                  onClick={() => {
                    SetPageActiveCrowdFunding(link.name);
                    setToggleDrawer(false);
                    navigate('/crowdFunding');
                  }}
                >
                  <img 
                    src={link.imgUrl}
                    alt={link.name}
                    className={`w-[24px] h-[24px] object-contain ${PageActiveCrowdFunding === link.name ? 'grayscale-0' : 'grayscale'}`}
                  />
                  <p className={`ml-[20px] font-epilogue font-semibold text-[14px] ${PageActiveCrowdFunding === link.name ? 'text-[#1dc071]' : 'text-[#808191]'}`}>
                    {link.name}
                  </p>
                </li>
              ))}
            </ul>

       
          </div>
        </div>






    

    </div>
  )
}

export default Navbar