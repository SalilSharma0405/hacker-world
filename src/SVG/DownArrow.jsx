import React from 'react'

export default function DownArrow({onClick =  ()=> null}) {
  return (
    <svg onClick={onClick} style={{cursor: 'pointer'}} width="20px" height="20px" viewBox="0 -19.04 75.804 75.804" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(-798.203 -587.815)">
    <path data-name="Path 59" d="M798.2,589.314a1.5,1.5,0,0,1,2.561-1.06l33.56,33.556a2.528,2.528,0,0,0,3.564,0l33.558-33.556a1.5,1.5,0,1,1,2.121,2.121l-33.558,33.557a5.53,5.53,0,0,1-7.807,0l-33.56-33.557A1.5,1.5,0,0,1,798.2,589.314Z" fill="#0c2c67"/>
  </g>
</svg>
  )
}
