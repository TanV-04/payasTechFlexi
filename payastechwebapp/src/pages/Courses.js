import React from 'react'
import Navbar from '../components/Navbar'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data'
import Footer from '../components/Footer'
import BackToTopButton from '../components/BackToTopButton'

export default function Courses () {
  return (
    <div>
      <Navbar />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      {/* <h1>this is courses</h1> */}
      <BackToTopButton />
      <Footer />
    </div>
  )
}
