import Button from "./Button";

export default function Subscribe() {
  return (
    <>
      <div className="absolute -translate-y-[50%]">
      {/* <div className="relative z-10 w-[1140px] -translate-y-[50%] flex justify-between items-center px-[70px] py-[50px] bg-white rounded-[10px] before:block before:z-[-9] before:absolute before:w-[80%] before:h-[120%] before:top-0 before:left-[10%] before:bg-[#0D1025] before:opacity-[0.06] before:blur-[57px] before:rounded-[10px]"> */}
        <div className="relative bg-[#fff] w-[1140px] h-[233px] flex justify-between items-center px-[70px] py-[50px] rounded-[10px] before:block before:z-[-9] before:absolute before:w-[88%]  before:h-[107%] before:top-4 before:bg-[#0D1025] before:opacity-[0.06] before:blur-[57px] before:rounded-[10px]">
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
