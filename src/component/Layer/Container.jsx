import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className={`max-w-[1600px] mx-auto px-1 md:px-0 ${className}`}>
        {children}
    </div>
  )
}

export default Container