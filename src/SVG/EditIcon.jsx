import React from 'react'

export default function EditIcon({onClick =  ()=> null}) {
  return (
    <svg onClick={onClick} style={{cursor: 'pointer'}} viewBox="0 0 48 48" width="20px" height="20px"><path fill="#c94f60" d="M42.583,9.067l-3.651-3.65c-0.555-0.556-1.459-0.556-2.015,0l-1.718,1.72l5.664,5.664l1.72-1.718	C43.139,10.526,43.139,9.625,42.583,9.067"/><path fill="#f0f0f0" d="M6.905,35.43L5,43l7.571-1.906l0.794-6.567L6.905,35.43z"/><path fill="#edbe00" d="M36.032,17.632l-23.46,23.461l-5.665-5.665l23.46-23.461L36.032,17.632z"/><linearGradient id="YoPixpDbHWOyk~b005eF1a" x1="35.612" x2="35.612" y1="7.494" y2="17.921" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#dedede"/><stop offset="1" stopColor="#d6d6d6"/></linearGradient><path fill="url(#YoPixpDbHWOyk~b005eF1a)" d="M30.363,11.968l4.832-4.834l5.668,5.664l-4.832,4.834L30.363,11.968z"/><path fill="#787878" d="M5.965,39.172L5,43l3.827-0.965L5.965,39.172z"/></svg>
  )
}
