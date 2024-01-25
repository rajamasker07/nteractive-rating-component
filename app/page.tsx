'use client'

import React, { useState } from "react";
import Card from "./components/card";
import ThanksComponent from "./components/thanks-component";

export default function Home() {

  const [rating, setRating] = useState(0)
  // eslint-disable-next-line no-unused-vars
  const [maxRating, _setMaxRating] = useState(5)

  const ratingHandled = (rate: number) => {
    setRating(rate)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-neutral-900">
      {
        rating === 0 ?
          <Card
            updateRating={ratingHandled}
            maxRating={maxRating}
          />
        :
          <ThanksComponent
            rating={rating}
            maxRating={maxRating}
          />
      }
    </main>
  );
}
