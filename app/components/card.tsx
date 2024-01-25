'use client';

import Image from 'next/image'
import React, { useState } from 'react'
import starIcon from '../../public/assets/icon-star.svg'
import RatingList from './rating-lists'

type cardProps = {
  // eslint-disable-next-line no-unused-vars
  updateRating: (rate: number) => void,
  maxRating: number,
}

export default function Card({
  updateRating,
  maxRating
}: cardProps) {

  const [rating, setRating] = useState(0);

  const ratingChanged = (rate: number) => {
    setRating(rate);
  }

  const postRating = () => {
    updateRating(rating)
  }

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
      <RatingList
        maxRating={maxRating}
        ratingChangeHandle={ratingChanged}
      />

      <button type='button' onClick={postRating}
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
