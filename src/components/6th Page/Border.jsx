import React from 'react'

export const Border = () => {
  return (
    <div className='flex py-6 gap-[2px]'>
        {...Array(100).fill().map((_, i) => (
            <div className='w-[3px] h-[3px] bg-[#fff] rounded-full'>
            </div>
        ))}
    </div>
  )
}
