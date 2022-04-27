import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const IndiDetails = (props) => {
  const location=  useLocation()
  const from = location.state.from
  useEffect(()=>{
    
    
  },[])

  return (
    <div className='Individual Details'>
      <h3>Time:{from.Time}</h3>
      <h3>Domain:{from.Domain}</h3>
      <h3>Description:{from.Description}</h3>
      <h3>Date:{from.Date}</h3>
      <h3>Task:{from.Task}</h3>

    </div>
    
  )
}

export default IndiDetails