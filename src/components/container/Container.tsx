import React from 'react'

interface Container{
    children: React.ReactNode;
}

function Container({children}: Container) {
  return (
    <div className="md:container md:m-auto px-4">
      {children}
    </div>
  )
}

export default Container
