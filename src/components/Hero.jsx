import { SpacemanCanvas } from ".";
import Position from "./Position";

const Hero = ({ scrollContainer }) => {
  return (
    <section className="parallax overflow-hidden">
  <div className='parallax__content absolute top-0 sm:top-[2%] lg:top-[4%] w-full mx-auto lg:pl-[20vh] lg:pr-[20vh] xl:pl-60 xl:pr-60 2xl:px-32 3xl:px-48 flex flex-col lg:flex-row items-start z-10'>
    <div className="flex-1 lg:mb-0 pl-4"> {/* Add padding to the left of the name */}
      <h1 className='font-medium text-white text-[30px] xs:text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] 2xl:text-[100px] leading-[60px] 2xl:leading-[80px]'>
        M.Yaseen Raja
      </h1>
      <div className="lg:mt-5">
        <Position />
      </div>
    </div>
    <div className="flex-1 flex justify-start lg:justify-end mt-20 sm:mt-32 md:mt-32 lg:mt-40">
      <div className='font-bold text-[20px] sm:text-[30px] md:text-[36px] 2xl:text-[46px] sm:leading-[40px] md:leading-[50px] 2xl:leading-[60px] streaky-glow max-w-sm 2xl:max-w-lg text-white text-left'>
        I love To Make New Apps And Games!
      </div>
    </div>
  </div>

      <img className="parallax__BGSky" src="./parallax/BGSky.svg" alt="" />
      <img className="parallax__Mountains mt-5" src="./parallax/Mountains.svg" alt="" />
      <img className="parallax__backlefttreegroup" src="./parallax/backlefttreegroup.svg" alt="" />
      <img className="parallax__frontlefttreegroup " src="./parallax/frontlefttreegroup.svg" alt="" />
      <img className="parallax__grass mt-5" src="./parallax/grass.svg" alt="" />
      <img className="parallax__lake" src="./parallax/lake.svg" alt="" />
      <img className="parallax__Clouds" src="./parallax/clouds.svg" alt="" />
      <img className="parallax__Stars" src="./parallax/Stars.svg" alt="" />
      
      <SpacemanCanvas scrollContainer={scrollContainer} />
    </section>

  );
};

export default Hero;
