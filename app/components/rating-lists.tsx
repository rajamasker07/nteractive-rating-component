'use client'

import React, { useState } from 'react'
import CustomChecklist from './custom-checklist';

type listProps = {
  // eslint-disable-next-line no-unused-vars
  ratingChangeHandle: (item: number) => void,
  maxRating: number,
}

export default function RatingList({
  ratingChangeHandle,
  maxRating
}: listProps) {

  const [checkedState, setCheckedState] = useState(new Array(maxRating).fill(false));

  const handleOnChange = (position: number) => {
    const updateCheckedState = checkedState.map((_item, index) => {
      if(position === index) {
        sendratingToCard(index + 1);
        return true
      } else {
        return false
      }
    })
    setCheckedState(updateCheckedState);
  }

  const sendratingToCard = (rate: number) => {
    ratingChangeHandle(rate);
  }

  return (
    <div className='inline-flex gap-1 w-full h-fit justify-between'>
      {
        checkedState.map((item, index) => (
          <CustomChecklist 
            key={index} 
            isChecked={item} 
            onCheckboxChange={handleOnChange} 
            txtNumber={index + 1} 
            itemNumber={index}
          />
        ))
      }
    </div>
  )
}
