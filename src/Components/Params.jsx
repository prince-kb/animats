import React from 'react'
import { useParams } from 'react-router-dom'
const Params = () => {
    let {id} = useParams();
  return (
    <div>
      PARAMS = {id};
    </div>
  )
}

export default Params
