import Button from "./Button";

export default function Hero() {
  return (
    <>
      <div className="flex sm:flex-row max-sm:flex-col-reverse md:mb-[103px] sm:mb-[80px] max-sm:mb-8">
        <div className="lg0:mr-10 md:mr-5 sm:basis-1/2">
            <div className="lg:mt-7 lg0:mt-5 md:mt-0 font-medium lg:text-5xl md:text-3xl sm:text-xl max-sm:text-3xl max-sm0:text-2xl max-sm:mb-2 leading-normal md:mb-5 sm:mb-2">
                <h1>Want anything to be <p>easy with <b>LaslesVPN.</b></p></h1>
            </div>
            <div className="text-base leading-7 lg0:mb-[50px] md:mb-[25px] sm:mb-[15px] max-sm:text-xl max-sm:mb-2 ">
                <p>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
            </div>
            <div className="relative">
                <Button text="Get Started"/>
            </div>
        </div>
        <div className="relative max-w-[611px] max-sm:h-[320px] max-sm0:h-[230px] max-sm:mb-[20px] sm:basis-1/2">
            <img className="absolute z-0 w-[100%] h-[100%]" src="/icons/hero.png" alt="" />
        </div>
      </div>
    </>
  )
}
