'use client'

import React, { useState } from 'react'
import CustomChecklist from './custom-checklist';

export default function RatingList() {

  const [checkedState, setCheckedState] = useState(new Array(5).fill(false));

  const handleOnChange = (position: number) => {
    const updateCheckedState = checkedState.map((_item, index) => {
      return position === index ? true : false;
    })

    setCheckedState(updateCheckedState);
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
