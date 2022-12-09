export default function Features() {
  return (
    <>
      <div className="flex justify-between mb-[126px]">
        <div className="w-151">
            <img src="/icons/person.png" alt="" />
        </div>
        <div className="mt-16">
            <div className="mt-7 font-medium text-4xl leading-14 mb-5">
                <h1>We Provide Many <p>Features You Can Use</p></h1>
            </div>
            <div className="text-base leading-7">
                <p>You can explore the features that we provide with fun and <p>have their own functions each feature.</p></p>
            </div>
            <div>
                <ul>
                    <li className="flex mt-5">
                        <img className="mr-3" src="/icons/tick.png" alt="" />
                        <p>Powerfull online protection.</p>
                    </li>
                    <li className="flex mt-4">
                        <img className="mr-3" src="/icons/tick.png" alt="" />
                        <p>Internet without borders.</p>
                    </li>
                    <li className="flex mt-4">
                        <img className="mr-3" src="/icons/tick.png" alt="" />
                        <p>Supercharged VPN</p>
                    </li>
                    <li className="flex mt-4">
                        <img className="mr-3" src="/icons/tick.png" alt="" />
                        <p>No specific time limits.</p>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </>
  )
}
