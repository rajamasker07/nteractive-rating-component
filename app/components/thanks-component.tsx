import Image from "next/image";
import thanksPic from '../../public/assets/illustration-thank-you.svg'

interface thanksProps {
  rating: number,
  maxRating: number
}

export default function ThanksComponent({rating, maxRating}: thanksProps) {
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
      items-center
      text-white
      `
    }>
      <Image
        src={thanksPic}
        alt="thanks-pic"
        className="w-full h-fit"
      />
      <span className="rounded-full text-xs text-orange-500 bg-gray-700 w-fit h-fit p-3">
        You selected {rating} out of {maxRating}
      </span>
      <hgroup className="text-center">
        <h1 className="text-xl font-bold">
          Thak You!
        </h1>
        <p className="text-xs mt-3 text-neutral-300">
          We appreciate you taking the time to give a rating.
          if you ever need more support, don&quote;t hasitate to get in touch
        </p>  
      </hgroup>
    </div>
  )
}
