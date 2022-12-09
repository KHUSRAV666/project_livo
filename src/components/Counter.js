export default function Counter() {
  return (
    <div className="flex py-10 shadow-2xl shadow-[#f0f1f2] mb-[96px]">
        <div className="flex justify-center items-center border-r-2 basis-1/3 h-28">
            <div className="bg-red-100 relative w-11 h-11 rounded-full mr-11">
                <img className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src="/icons/user.png" alt="" />
            </div>
            <div>
                <div className="font-bold text-2xl">90+</div>
                <div>Users</div>
            </div>
        </div>
        <div className="flex justify-center items-center border-r-2 basis-1/3 h-28">
            <div className="bg-red-100 relative w-11 h-11 rounded-full mr-11">
                <img className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src="/icons/location.png" alt="" />
            </div>
            <div>
                <div className="font-bold text-2xl">30+</div>
                <div>Locations</div>
            </div>
        </div>
        <div className="flex justify-center items-center basis-1/3 h-28">
            <div className="bg-red-100 relative w-11 h-11 rounded-full mr-11">
                <img className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src="/icons/server.png" alt="" />
            </div>
            <div>
                <div className="font-bold text-2xl">50+</div>
                <div>Servers</div>
            </div>
        </div>
    </div>
  )
}
