import React from 'react';


import { useStateContext } from '../context/index';



const Dashboard = () => {
  const { currentColor, currentMode } = useStateContext();
  
  return (
    <div className="mt-16">
        DASHBOARD
        
    </div>
  );
};

export default Dashboard;
