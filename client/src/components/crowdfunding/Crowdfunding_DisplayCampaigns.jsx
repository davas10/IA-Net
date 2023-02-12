import React from 'react';
import { useNavigate } from 'react-router-dom';

import FundCard from './Crowdfunding_FundCard';
import { loader } from '../../assets';

const DisplayCampaigns = ({ title, isLoading, campaigns, SetPageActiveCrowdFunding }) => {
  const navigate = useNavigate();

  const handleNavigate = (campaign) => {
    navigate(`/crowdFunding?Campaign=${campaign.title}`, { state: campaign })
    //navigate(`/crowdFunding/${campaign.title}`, { state: campaign })
    // SetPageActiveCrowdFunding("CampaignDetails")
  }
  
  return (
    <div>
      <h1 className="font-epilogue font-semibold text-[18px] dark:text-white text-black text-left">{title} ({campaigns.length})</h1>

      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {isLoading && (
          <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
        )}

        {!isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            You have not created any campigns yet
          </p>
        )}

        {!isLoading && campaigns.length > 0 && campaigns.map((campaign) => <FundCard 
          key={campaign.title}
          {...campaign}
          handleClick={() => {
            SetPageActiveCrowdFunding("CampaignDetails"); handleNavigate(campaign)
          }}

        />)}
      </div>
    </div>
  )
}

export default DisplayCampaigns