import React from 'react'
import { Single } from '../../components/single'
import { singleUser } from '../../data/data'

export const User = () => {
  return (
    <Single {...singleUser} />
  )
}
