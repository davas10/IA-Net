import React,{ useState } from 'react';
import { Home, CreatePost } from './AIimages';
import {HeaderAIimages } from '../components/AIimages';


const AIimageGeneration = () => {
  const [PageActiveAIimages, SetPageActiveAIimages] = useState("home");
  
  return ( 


    <div className="relative p-12 dark:bg-main-dark-bg min-h-screen flex flex-row">
  

    <div className="flex-1 ma mx-auto sm:pr-5">
    <HeaderAIimages  PageActiveAIimages={ PageActiveAIimages} SetPageActiveAIimages={ SetPageActiveAIimages} />
    
      {(() => {        
        switch (PageActiveAIimages) {
        case "home" :
          return <Home  />
        case "create-post":
          return <CreatePost PageActiveAIimages={ PageActiveAIimages} SetPageActiveAIimages={ SetPageActiveAIimages}/>
        default:
          return <Home />
      }
    })()}


    </div>
  </div>



    )
};

export default AIimageGeneration;
