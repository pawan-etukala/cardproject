import React from 'react'

const Card = ({title,handle,image}) => {  
  return (
   <div>
    {/* <img src={image} alt="imagess"/> */}
    {/* <p>The title is {title}</p>
    <p>The handle is {handle}</p> */}

    <div class="card" >
  <img src={image} class="card-img-top" alt="imagess"/>
   <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{handle}</p>
   </div>
   </div>
  </div>
    
  )
}

export default Card;
