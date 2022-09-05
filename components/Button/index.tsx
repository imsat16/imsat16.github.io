import Link from 'next/link'
import React, { ReactNode } from 'react'
import style from './Button.module.css'
type Style = {
    children? : ReactNode | ReactNode[]
    type?: 'button'|'reset'|'submit'
    className? : string
    href? : string
    variants? : 'primary' | 'secondary'
    size? : 'sm' | 'md' | 'lg'
    onClick?:any
    value?:any
    radius? : 'rounded-sm' | 'rounded-md' | 'rounded-lg' | 'rounded-xl' | 'rounded-2xl' | 'rounded-3xl' | 'rounded-full'
}

const Button = (sty : Style) => {
  return (
    <button 
    className={`
      flex justify-start
      ${sty.variants ? style[sty.variants]:style.text} 
      ${sty.size ? style[sty.size]:style.sm}
      ${sty.radius ? sty.radius : ''}
      ${sty.className}
    `}
    type={`${sty.type ? sty.type : 'button'}`}
    onClick={sty.onClick}
    value={sty.value}
    >
        {sty.children}
    </button>
  )
}
const ButtonLink = (sty : Style) => {
  return (
    <Link 
    href={`${sty.href}`}
    className={`
      flex justify-start
      ${sty.variants ? style[sty.variants]:style.text} 
      ${sty.size ? style[sty.size]:style.sm}
      ${sty.radius ? sty.radius : ''}
      ${sty.className}
    `}
    >
      <div className="cursor-pointer">
        {sty.children}
      </div>
    </Link>
  )
}

export {Button, ButtonLink}