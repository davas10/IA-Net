import React, { useState } from 'react';
import { useStateContext } from '../context';
import { Crowdfunding_Sidebar, Crowdfunding_Navbar } from '../components/crowdfunding';
import { CampaignDetails, CreateCampaign, Home, Profile } from '../pages/crowdfunding';



const CrowdFundingPage = () => {
  const [PageActiveCrowdFunding, SetPageActiveCrowdFunding] = useState("home");

  return (
    <div className="relative p-12 dark:bg-main-dark-bg min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Crowdfunding_Sidebar PageActiveCrowdFunding={ PageActiveCrowdFunding} SetPageActiveCrowdFunding={ SetPageActiveCrowdFunding} />
      </div>

      <div className="flex-1 ma mx-auto sm:pr-5">
        <Crowdfunding_Navbar PageActiveCrowdFunding={ PageActiveCrowdFunding} SetPageActiveCrowdFunding={ SetPageActiveCrowdFunding}  />


        {(() => {        
          switch (PageActiveCrowdFunding) {
          case "home" :
            return <Home SetPageActiveCrowdFunding={ SetPageActiveCrowdFunding} />
          case "campaign":
            return <CreateCampaign />
          case "profile":
            return <Profile />
          case "CampaignDetails":
            return <CampaignDetails  SetPageActiveCrowdFunding={ SetPageActiveCrowdFunding}  />
          default:
            return <Home />
        }
      })()}


      </div>
    </div>
  )
}

export default CrowdFundingPage