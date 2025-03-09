import React from 'react'

export const Image = ({ src }) => {
  return (
    <div className='bg-zinc-700'>
        <img src={src} alt='image' />
    </div>
  )
}
