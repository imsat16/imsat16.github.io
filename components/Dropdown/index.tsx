import React,{ReactNode,useState} from 'react'
import style from './Dropdown.module.css'
type Style = {
    children : ReactNode | ReactNode[]
    className? : string
    title:any
    icons?:any
    icons2?:any
    variants? : 'primary' | 'secondary'
    size? : 'sm' | 'md' | 'lg'
    radius? : 'rounded-sm' | 'rounded-md' | 'rounded-lg' | 'rounded-xl' | 'rounded-2xl' | 'rounded-3xl' | 'rounded-full'
}

const Dropdown = (sty : Style) => {

    const [open, setOpen] = useState(false)

  return (
    <div className='relative z-10 '>
        <button 
            className={`
                ${sty.variants ? style[sty.variants]:style.text} 
                ${sty.size ? style[sty.size]:style.sm}
                ${sty.radius ? sty.radius : ''}
            `}
            onClick={()=>setOpen(!open)}
        >
            <p className="flex gap-2 items-center">
            {sty.title}
            {/* {sty.icons} */}
            {!open ? sty.icons : sty.icons2}
            </p>
        </button>
        <div className={`
            ${sty.variants ? style[sty.variants]:style.text} 
            flex-col transition-all rounded-b-lg ${open?'flex ':'hidden'} ${sty.className}`}>
            {sty.children}
        </div>
    </div>
  )
}

export default Dropdown