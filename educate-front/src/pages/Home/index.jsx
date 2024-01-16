import React from 'react'
import Courses from '../../components/Courses'
import Features from '../../components/Features'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <Courses/>
    <Features/>
    </>
  )
}

export default Home