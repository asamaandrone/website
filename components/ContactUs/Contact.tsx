import React from 'react'
import { ContactForm } from './ContactForm'
import { TextGenerateEffect } from '../ui/text-generate-effect'

export default function Contact() {
  return (
    <section id="contactus" className="min-h-screen w-full pt-8 space-y-4">
      <h2 className='pb-4'><TextGenerateEffect words={"Contact us"} /></h2>
      <ContactForm />
    </section>
  )
}
