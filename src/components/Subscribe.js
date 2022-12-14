import Button from "./Button";

export default function Subscribe() {
  return (
    <>
      <div className="absolute w-full -translate-y-[50%]">
        <div className="relative max-sm:block max-sm:text-center bg-[#fff] w-full h-[233px] flex justify-between items-center px-[70px] max-sm0:px-[30px] py-[50px] max-sm0:py-[20px] rounded-[10px] before:block before:z-[-9] before:absolute before:w-[88%]  before:h-[107%] before:top-4 before:bg-[#0D1025] before:opacity-[0.06] before:blur-[57px] before:rounded-[10px]">
            <div className="max-sm:mb-2">
                <div className="font-medium lg:text-5xl md:text-3xl sm:text-xl max-sm:text-3xl max-sm0:text-2xl leading-[45px] text-[#0b132a] mb-[20px]">Subscribe Now for <p>Get Special Features!</p></div>
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
