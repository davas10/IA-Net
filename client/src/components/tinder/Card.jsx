import react, { useContext } from 'react'
import { SiTinder } from 'react-icons/si'
import CardHeader from './CardHeader'
import CardFooter from './CardFooter'
import TinderCardItem from './TinderCardItem'
import { useStateContext } from '../../context';

const style = {
  wrapper: `xl:h-[50rem]  xl:w-[50rem] lg:h-[50rem]  lg:w-[35rem] md:h-[50rem]  md:w-[30rem] sm:h-[50rem] sm:w-[25rem] h-[30rem] w-[16rem] flex flex-col rounded-lg overflow-hidden`,
  cardMain: `w-full flex-1 relative flex flex-col justify-center items-center bg-gray-500`,
  noMoreWrapper: `flex flex-col justify-center items-center absolute`,
  tinderLogo: `text-5xl text-red-500 mb-4`,
  noMoreText: `text-xl text-white`,
  swipesContainer: `w-full h-full`,
}

const Card = () => {
  const { cardsData } = useStateContext();

  return (
    <div className={style.wrapper}>
      <CardHeader /> 
      <div className={style.cardMain}>
        <div className={style.noMoreWrapper}>
          <SiTinder className={style.tinderLogo} />
          <div className={style.noMoreText}>
            No More Profiles in your Location...
          </div>
        </div>
        <div className={style.swipesContainer}>
           {cardsData.map((card, index) => (
            <TinderCardItem card={card} key={index} />
          ))} 
        </div>
      </div>
      <CardFooter />
    </div>
  )
}

export default Card

