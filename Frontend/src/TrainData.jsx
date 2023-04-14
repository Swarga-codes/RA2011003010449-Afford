import React from 'react'

function TrainData({data}) {

  return (
    <div className='TrainData'>
    <p>{data.trainNumber}</p>
    <h3>{data.trainName}</h3>
    <p>Seats:</p>
    <p>Sleeper: {data.seatsAvailable.sleeper}</p>
    <p>AC: {data.seatsAvailable.AC}</p>
    <br/>
    </div>
  )
}

export default TrainData