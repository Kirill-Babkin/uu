import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React from 'react'


type LocalSearchProps = {
  placeholder: string
  iconsPosition: "left" | "right"
  otherClasses?: string

}

export const LocalSearch = ({placeholder, iconsPosition, otherClasses = ""}: LocalSearchProps) => {
  return ( 
    <div className={`w-full background-light800_darkgradient flex ${iconsPosition === 'left' ? '' : "flex-row-reverse" } min-h-[56px] grow items-center gap-1 rounded-xl px-4 ${otherClasses}`}>
      <Image
        src="/assets/icons/search.svg"
        width={24}
        height={24}
        alt="search"
        className="cursor-pointer"
      />
      <Input 
        type="text"
        placeholder={placeholder}
        value=""
        className="paragraph-regular no-focus placeholder text-dark400_light700 background-light800_darkgradient border-none shadow-none outline-none"
      />
    </div>
  )
}
