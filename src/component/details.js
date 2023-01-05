import React from 'react'
import { useParams } from 'react-router-dom'

const Details = ({movies}) => {
  const {idmovie} = useParams()
  const foundmovie = movies.find(el=> el.id == idmovie)
  console.log(foundmovie)
  return (
    <div>
      <h3>{foundmovie.title}</h3>
      <p>{foundmovie.description}</p>
    </div>
  )
}

export default Details
