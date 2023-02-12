import React from 'react';
import { useStateContext } from '../context/index';
import { FiSun,FiMoon } from 'react-icons/fi';

const Toggle = () => {
  const { setMode } = useStateContext();  


  return (
    <label className='label1'>
            <input className='input1' 
            type="checkbox" defaultChecked={localStorage.getItem('themeMode') === 'Dark' ? true : false} 
            value= {localStorage.getItem('themeMode') === 'Dark' ? 'Light'  : 'Dark' }  
            onChange={setMode}  />
            <span className='span1'>
              <span className='span2'>{<FiSun />}</span>
              <span className='span3'>{<FiMoon />}</span>
            </span>
            
        </label>
  );
};

export default Toggle;




