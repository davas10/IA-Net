
import Card from '../components/tinder/Card'
import Header from '../components/tinder/Header'


const style = {
  wrapper: `h-screen w-screen flex flex-col bg-[#222229]`,
  cardsContainer: `flex flex-col items-center justify-center flex-1 pt-12`,
}


const Tinder = () => {

  return ( 
    <div className="relative p-12 dark:bg-main-dark-bg min-h-screen flex flex-row">
   
    <div className="flex-1 ma mx-auto sm:pr-5">
      <Header />

      <div className={style.cardsContainer}>
        <Card /> 
      </div>
      
    </div>
  </div>
    )
};

export default Tinder;