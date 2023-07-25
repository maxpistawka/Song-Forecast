import React from 'react';

type Props = {
    children: React.ReactNode
}

const HText = ({children}: Props) => {
    return (
      <h1 className = "  text-black  font-montserrat text-2xl"> 
      {children}
      </h1>
    )
  }
  
  export default HText