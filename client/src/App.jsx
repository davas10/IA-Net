import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, SidebarSmall} from './components';
import {Dashboard, CrowdFundingPage, Swap, Tinder, AIimageGeneration, Lotery} from './pages';

import {Calendar, ColorPicker, Customers, Ecommerce, Editor, Employees, Kanban, Orders  } from './pages/pruebas';

import { Area, Pyramid, Line, Stacked, ColorMapping, Bar, Pie, Financial } from './pages/pruebas/Charts';


import './App.css';


import { useStateContext } from './context/index';


const App = () => {

  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();



  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      {/* <BrowserRouter> */}

        <div className="flex relative dark:bg-main-dark-bg">
        


          {/* BARRA LATERAL */}
          {activeMenu ? (
            <div className="w-64 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-20 sidebar dark:bg-secondary-dark-bg bg-white">
              <SidebarSmall />
            </div>
          )}
           {/* BARRA LATERAL */}

    
           <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-slate-200 min-h-screen md:ml-64 w-full  '
                : 'bg-slate-200 dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >

            {/* CABECERA */}
            <div className="fixed md:static bg-white dark:bg-secondary-dark-bg navbar w-full ">
              <Navbar />
            </div>
            {/* CABECERA */}


            {/* ROUTING */}
            <div>
              {themeSettings && (<ThemeSettings />)}

              <Routes>
                {/* dashboard  */}
                <Route path="/" element={(<Dashboard />)} />
                <Route path="/dashboard" element={(<Dashboard />)} />

                 {/* david  */}
                 <Route path="/crowdFunding" element={<CrowdFundingPage />} />
                 <Route path="/tinder" element={<Tinder />} />
                 <Route path="/AIImage" element={<AIimageGeneration />} />
                
                 {/* <Route path="/swap" element={<Swap />} />
                
                <Route path="/lotery" element={<Lotery />} />
                 */}
                

                {/* prueba  */}
                {/* <Route path="/ecommerce" element={(<Ecommerce />)} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />     
                <Route path="/color-picker" element={<ColorPicker />} /> */}

                {/* prueba2  */}
                {/* <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />  */}

              </Routes>
            </div>
             {/* ROUTING */}

            
            {/* PIE DE PÁGINA */}
            <Footer />
            {/* PIE DE PÁGINA */}
          </div>
    
    
           </div>
      {/* </BrowserRouter> */}
    </div>
    
    
  
  )
}

export default App