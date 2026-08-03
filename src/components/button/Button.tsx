import React, { type ComponentProps } from 'react'

type button = ComponentProps<"button">

function Button({children, ...rest}:button) {
  return (
    <button {...rest} className='bg-blue-500 hover:bg-blue-600 text-white active:bg-blue-800 rounded px-4 py-2 transition-colors duration-300'>
      {children}
    </button>
  )
}

export default Button
