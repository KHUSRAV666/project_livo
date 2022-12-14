export default function Counter() {
  return (
    <div className="relative flex py-10 shadow-2xl shadow-[#f0f1f2] mb-[96px] rounded-[10px]">
        <div className="sm0:flex justify-center items-center  basis-1/3 h-28 max-sm:h-8 border-r-2 max-sm0:h-[75px]">
            <div className="bg-red-100 relative w-11 max-sm:w-8 h-11 max-sm:h-8 rounded-full mr-11 max-sm:mr-4 max-sm0:mx-auto">
                <img className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src="/icons/user.png" alt="" />
            </div>
            <div className="max-sm0:text-center max-sm0:mt-1">
                <div className="font-bold text-2xl max-sm:text-sm">90+</div>
                <div>Users</div>
            </div>
        </div>
        <div className="sm0:flex justify-center items-center basis-1/3 h-28 max-sm:h-8 border-r-2 max-sm0:h-[75px]">
            <div className="bg-red-100 relative w-11 max-sm:w-8 h-11 max-sm:h-8 rounded-full mr-11 max-sm:mr-4 max-sm0:mx-auto">
                <img className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src="/icons/location.png" alt="" />
            </div>
            <div className="max-sm0:text-center max-sm0:mt-1">
                <div className="font-bold text-2xl max-sm:text-sm">30+</div>
                <div>Locations</div>
            </div>
        </div>
        <div className="sm0:flex justify-center items-center basis-1/3 h-28 max-sm:h-8">
            <div className="bg-red-100 relative w-11 max-sm:w-8 h-11 max-sm:h-8 rounded-full mr-11 max-sm:mr-4 max-sm0:mx-auto">
                <img className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src="/icons/server.png" alt="" />
            </div>
            <div className="max-sm0:text-center max-sm0:mt-1">
                <div className="font-bold text-2xl max-sm:text-sm">50+</div>
                <div>Servers</div>
            </div>
        </div>
    </div>
  )
}
