import React, { useState } from 'react';
import { navlinks } from '../../data/dummy';
import { Link, useNavigate } from 'react-router-dom';


//Creamos una variable Icon que recibe ciertos parametros para su configuración
const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick, title }) => (
  <div className={`w-[48px] h-[48px] hover:bg-slate-200 rounded-[10px] ${isActive && isActive === name && 'bg-[#197cc8]'} flex justify-center title=1 items-center ${!disabled && 'cursor-pointer'} ${styles}`} title={title} onClick={handleClick}>
    {!isActive ? (
      <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
    ) : (
      <img src={imgUrl} alt="fund_logo" className={`w-1/2 h-1/2 ${isActive !== name && 'grayscale'}`} />
    )}
    
  </div>
)

const Sidebar = ({ PageActiveCrowdFunding, SetPageActiveCrowdFunding }) => {
  const navigate = useNavigate();
  
  return (
    <div className="flex justify-between  items-center flex-col sticky h-[84vh] pt-12">
      {/* <Link to="/">
        <Icon styles="w-[52px] h-[52px] bg-[#2626be]" imgUrl={logo} />
      </Link> */}

      <div className="flex-1 flex flex-col justify-between items-center dark:bg-secondary-dark-bg bg-white rounded-[20px] w-[76px] py-4 mt-12">
        <div className="flex flex-col justify-center items-center gap-3">
          {navlinks.map((link) => (
            <Icon 
              key={link.name}
              {...link}
              isActive={PageActiveCrowdFunding}
              title = {link.title}
              handleClick={() => {              
                  SetPageActiveCrowdFunding(link.name);
                  navigate('/crowdFunding');
              }}
            />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Sidebar