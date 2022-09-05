import Link from 'next/link'
import React, { ReactNode } from 'react'
import style from './Card.module.css'

type Style = {
    children? : ReactNode | ReactNode[]
    className? : string
    display? : 'grid' | 'flex'
    orientation?: 'horizontal' | 'vertical'
    size? : 'sm' | 'md' | 'lg'
    link?: string
    radius? : 'rounded-sm' | 'rounded-md' | 'rounded-lg' | 'rounded-xl' | 'rounded-2xl' | 'rounded-3xl' | 'rounded-full'
}
const Card = (sty:Style) => {
  return (
    <div>
      {sty.link &&
      sty.link
      ?
      <Link href={sty.link}>
        <div className={`cursor-pointer p-4 grid shadow-md md:border-none grid-cols-6 content-center ${sty.className}`}>
          {sty.children}
        </div>
        </Link>
      :
        <div className={
          `
      text-[#393c44]
      ${sty.className}
      ${sty.display ? sty.display:'flex'}
      ${sty.orientation ? style[sty.orientation]:style.horizontal}
      ${sty.size ? style[sty.size]:style.sm}
    `
        }>
        {sty.children}
        </div>
      
      }
    </div>
  )
}

export default Card