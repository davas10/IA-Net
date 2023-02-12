import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import { BiWallet } from "react-icons/bi";
import { useStateContext } from "../../context";
import {
  CountBox,
  Crowdfunding_CustomButton,
  Loader,
} from "../../components/crowdfunding";
import { calculateBarPercentage, daysLeft } from "../../utils";
import { thirdweb } from "../../assets";

const CampaignDetails = ({ SetPageActiveCrowdFunding }) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { donate, getDonations, contract, address, connect } = useStateContext();

  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState("");
  const [donators, setDonators] = useState([]);

  const remainingDays = daysLeft(state.deadline);

  const fetchDonators = async () => {
    const data = await getDonations(state.pId);

    setDonators(data);
  };

  useEffect(() => {
    if (contract) fetchDonators();
  }, [contract, address]);

  const handleDonate = async () => {
    setIsLoading(true);

    await donate(state.pId, amount);

    navigate("/crowdFunding");
    SetPageActiveCrowdFunding("home");
    setIsLoading(false);
  };

  return (
    <div className="dark:bg-secondary-dark-bg bg-white rounded-[20px]">



      <div className="flex flex-col 2xl:flex-row rounded-[20px] mb-[35px] gap-6 mt-10">
        <div className="dark:bg-secondary-dark-bg bg-white rounded-[20px]">
          {isLoading && <Loader />}
        </div>

        <div className="p-1 2xl:p-12 2xl:w-2/5">
          <img
            src={state.image}
            alt="campaign"
            className="w-full h-[410px] object-cover rounded-xl"
          />
          <div className="relative w-full   h-[10px] bg-[#3a3a43] mt-2">
            <div
              className="absolute h-full bg-[#4acd8d]"
              style={{
                width: `${calculateBarPercentage(
                  state.target,
                  state.amountCollected
                )}%`,
                maxWidth: "100%",
              }}
            ></div>
          </div>
        </div>

        <div className="p-1 2xl:p-4 2xl:w-2/5 ">
          <div className="flex-1 ">
            <h4 className="font-epilogue font-semibold text-[18px] mt-8 dark:text-white text-black uppercase">
              Fund
            </h4>

            <div className="mt-[20px] flex flex-col p-4 bg-slate-200 rounded-[10px] border-1 border-black">
              <p className="font-epilogue fount-medium text-[20px] leading-[30px] text-center text-black">
                Fund the campaign
              </p>
              <div className="mt-[30px]">
                <input
                  type="number"
                  placeholder="Insert amount"
                  step="0.01"
                  className="w-full py-[10px] sm:px-[20px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-black text-[18px] leading-[30px] placeholder:text-[#4b5264] rounded-[10px]"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />

                <div className="my-[20px] p-4 bg-[#13131a] rounded-[10px]">
                  <h4 className="font-epilogue font-semibold text-[14px] leading-[22px] text-white">
                    Back it because you believe in it.
                  </h4>
                  <p className="mt-[20px] font-epilogue font-normal leading-[22px] text-[#c3c4cb]">
                    Support the project for no reward, just because it speaks to
                    you.
                  </p>
                </div>

                {address && amount > 0 ? (
                  <Crowdfunding_CustomButton
                    btnType="button"
                    title="Fund Campaign"
                    styles="w-full bg-[#65b58e]"
                    handleClick={handleDonate}
                  />
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className=" 2xl:p-12 2xl:w-1/5">
          <div className="flex 2xl:flex-col gap-[20px] place-content-center">
            <CountBox title="Days Left" value={remainingDays} />
            <CountBox
              title={`Raised of ${state.target}`}
              value={state.amountCollected}
            />
            <CountBox title="Total Backers" value={donators.length} />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col 2xl:flex-row">
        <div className="flex-[2] flex flex-col gap-[40px] 2xl:border-r-4 2xl:w-2/5 2xl:px-8">
          <div>
            <h4 className="font-epilogue font-semibold text-[18px] dark:text-white text-black uppercase bg-[#65b58e] rounded-[20px]">
            <span className="ml-6"> Creator  </span>
            </h4>

            <div className="mt-[20px] flex flex-row items-center flex-wrap gap-[14px]">
              <span className="font-semibold dark:text-white text-black pt-2">
                {" "}
                <BiWallet size={30} />{" "}
              </span>
              <div>
                <h4 className="font-epilogue font-semibold text-[16px] dark:text-white text-[#5a5a60] break-all">
                  {state.owner}
                </h4>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-epilogue font-semibold text-[18px] dark:text-white text-black uppercase bg-[#65b58e] rounded-[20px]">
            <span className="ml-6"> Story  </span> 
            </h4>

            <div className="mt-[20px]">
              <p className="font-epilogue font-normal text-[16px] dark:text-white text-[#5a5a60] leading-[26px] text-justify">
                {state.description}
              </p>
            </div>
          </div>
          </div>
          <div className="flex-[2] flex flex-col gap-[40px] 2xl:w-3/5 2xl:px-8 2xl:pt-1 pt-10">
     
            <h4 className="font-epilogue font-semibold text-[18px] dark:text-white text-black uppercase bg-[#65b58e] rounded-[20px]">
            <span className="ml-6"> Donators  </span> 
            </h4>
            
            <div className="mt-[10px] flex flex-col gap-4">
                {donators.length > 0 ? donators.map((item, index) => (
                  <div key={`${item.donator}-${index}`} className="flex justify-between items-center gap-4">
                    <p className="font-epilogue font-normal text-[16px] dark:text-white text-[#5a5a60] leading-[26px]">{index + 1}. {item.donator.substring(0,5) + '..............' + item.donator.substring(item.donator.length-4,item.donator.length)}</p>
                    <p className="font-epilogue font-normal text-[16px] dark:text-white text-[#5a5a60] leading-[26px] mr-8">{item.donation} {" ETH"}</p>
                  </div>
                )) : (
                  <p className="font-epilogue font-normal text-[16px] dark:text-white text-[#5a5a60] leading-[26px] text-justify">No donators yet. Be the first one!</p>
                )}
              </div>
            </div>
       
      </div>


    </div>
  );
};

export default CampaignDetails;
