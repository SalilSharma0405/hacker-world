import React from 'react'

export default function Cross({ onClick =  ()=> null }) {
  return (
    <svg onClick={onClick} style={{cursor: 'pointer'}}  fill="#000000" height="15px" width="15px" viewBox="0 0 490 490" xmlSpace="preserve">
<polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 
	489.292,457.678 277.331,245.004 489.292,32.337 "/>
</svg>
  )
}
