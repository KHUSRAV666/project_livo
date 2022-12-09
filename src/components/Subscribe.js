import Button from "./Button";

export default function Subscribe() {
  return (
    <>
      <div className="relative">
        <div className="absolute w-[1140px] -translate-y-[50%] flex justify-between items-center px-[70px] py-[50px] bg-white rounded-[10px]">
            <div>
                <div className="font-medium text-[35px] leading-[45px] text-[#0b132a] mb-[20px]">Subscribe Now for <p>Get Special Features!</p></div>
                <div className="text-[#4f5665]">Let's subscribe with us and find the fun.</div>
            </div>
            <div>
                <Button text="Subscribe Now"/>
            </div>
        </div>
      </div>
    </>
  )
}
