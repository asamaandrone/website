import React from 'react'
import Timeline from './Timeline'
import { Team } from './Team'
import { TextGenerateEffect } from '../ui/text-generate-effect'


function AboutUs() {
  return (
    <section id="aboutus" className='min-h-screen pt-8 my-4 space-y-4'>
      <h2 className='pb-4'><TextGenerateEffect words={"About us"} /></h2>
      <p className="text-sm leading-6 pb-4">We are a young team composed of ambitious individiuals with experience in multiple fields. <br /> Our story is just starting!</p>
      <Team />
      <h3 className='pt-4 uppercase'>Timeline</h3>
      <Timeline />
    </section >
  )
}

export default AboutUs
