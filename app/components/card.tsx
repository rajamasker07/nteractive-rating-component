import Image from 'next/image'
import React from 'react'
import starIcon from '../../public/assets/icon-star.svg'
import RatingList from './rating-lists'

export default function Card() {
  return (
    <div className={
      `flex
      flex-col
      w-[300px]
      h-fit
      rounded-2xl
      bg-gray-800
      p-6
      gap-6
      `
    }  
    >
      <div className='
        flex items-center justify-center size-10 bg-neutral-700 rounded-full *:size-3'
      >
        <Image src={starIcon} alt={'star-icon'}/>
      </div>
      <hgroup>
        <h1 className='font-bold text-2xl text-white'>How did we do? </h1>
        <p className='text-sm font-thin text-neutral-50 text-wrap mt-3'>
          Please let us know how we did with your support request.
          All feedback is appreciated to help us improfe our offering
        </p>
      </hgroup>
      <RatingList/>

      <button type='button'
        className='
          rounded-full w-full h-8 content-center justify-center
          bg-orange-500 hover:bg-gray-400 font-bold uppercase text-white
          hover:text-orange-600'
      >
        SUBMIT
      </button>
    </div>
  )
}
