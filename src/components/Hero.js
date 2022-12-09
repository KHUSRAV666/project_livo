import Button from "./Button";

export default function Hero() {
  return (
    <>
      <div className="flex flex-row mb-[103px]">
        <div className="basis-1/2 mr-10">
            <div className="mt-7 font-medium text-5xl leading-normal mb-5">
                <h1>Want anything to be <p>easy with <b>LaslesVPN.</b></p></h1>
            </div>
            <div className="text-base leading-7 mb-[50px]">
                <p>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
            </div>
            <div>
                <Button text="Get Started"/>
            </div>
        </div>
        <div className="w-[611px] h-[382px] basis-1/2">
            <img className="absolute" src="/icons/hero.png" alt="" />
        </div>
      </div>
    </>
  )
}
