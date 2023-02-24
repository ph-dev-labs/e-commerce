import React, { useState } from 'react'
import "./Home.scss"
import { useGetAllItemsQuery } from "../../Services/Services"

const Home = () => {

    const { data, isLoading, error } = useGetAllItemsQuery();
    console.log(data)

  return (
    <div className='home'>

    </div>
  )
}

export default Home 