
function Rules() {
    const rules = ["Schedule a free consultation or apply as a digital accessibility expert",
                    "Schedule a free consultation or apply as a digital accessibility expert",
                    "Schedule a free consultation or apply as a digital accessibility expert",
                    "Schedule a free consultation or apply as a digital accessibility expert",
                    "Schedule a free consultation or apply as a digital accessibility expert",
                    "Schedule a free consultation or apply as a digital accessibility expert",
                    "Schedule a free consultation or apply as a digital accessibility expert"
    ]

    return (
        
        <div className="bg-[#0DDF72] min-h-[100vh]">
            <h1 className="text-[88px]/[89px] tracking-tighter text-[rgb(29,57,43)] mont-bold ml-[156px] py-[75px] w-[50vw] font-bold">Rules to be
                followed</h1>
            <div className="flex mont-bold tracking-tighter pt-6 pb-24 items-end justify-between mx-[156px]">
                <div className="">
                    {rules.map((rule, index) => <li className=" text-[#005C2B] font-bold text-[24px]" key={index}>{rule}</li>)}
                </div>
                <div className="relative text-center bg-[#005C2B] text-white ml-[78px] text-[35px] w-[280px] h-[90px] rounded-[32px] ">
                    <div className="absolute w-full h-full -right-2 -bottom-2 rounded-[32px] bg-white"></div>
                    <button className="relative w-full rounded-[32px] h-full z-10 bg-[#005C2B]">Register Now</button>
                </div>
            </div>
        </div>
    )
}

export default Rules