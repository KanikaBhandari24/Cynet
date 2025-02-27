import React from 'react'

const Landing = () => {
  return (
    <div className='mont-md py-20 px-36 h-screen bg-[#1D392B] font-[YAFdJvl8raw 1]'>
        <div className='flex justify-between'>
            <div className='w-10 h-10 bg-[#0DDF72] rounded-full'></div>
            <div className="text-[#DAFCE0] text-2xl font-bold left-1.5 max-w-0.5 pr-120 mt-2">CYNET 2025</div>  
            <div className="text-[#DAFCE0]">
                <h2 className="text-8xl max-w-2xl leading-25 tracking-tighter">Welcome to the greatest <span className='font-bold'>College Fest</span></h2>
                <p className="text-xl mt-13 max-w-1/2 text-white">CyNet IT Fest 2025 Innovating a Greener Future with Sustainable Tech</p>
                <button className="mt-25 rounded-full bg-[#0DDF72] text-[#1D392B] font-bold text-4xl py-4 px-13 shadow-[#2f5741] shadow-md border-b-8 border-r-4">Events</button>
      </div>

        </div>
    </div>
  )
}

export default Landing