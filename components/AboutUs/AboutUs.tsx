import React from 'react'
import Timeline from './Timeline'
import { Team } from './Team'
import { TextGenerateEffect } from '../ui/text-generate-effect'


function AboutUs() {
  return (
    <section className='min-h-screen pt-8 my-4 space-y-4'>
      <h2 className='pb-4'><TextGenerateEffect words={"About us"} /></h2>
      <h3>Meet the team</h3>
      <Team />
      <h3 className='pt-4'>Our history</h3>
      <Timeline />
    </section >
  )
}

export default AboutUs
