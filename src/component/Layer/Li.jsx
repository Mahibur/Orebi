import React from 'react'
import { Link } from 'react-router-dom'

const Li = ({className,menu,link,children}) => {
  return (
    <li className='group border-b border-b-solid border-b-[rgba(12,12,12,0.1)] md:border-transparent pb-2 md:pb-0'>
        <Link to={link}  className={`font-head text-md md:text-sm font-semibold text-body hover:text-head transition-all ${className}`}>{menu}</Link>
        {children}
    </li>
  )
}

export default Li