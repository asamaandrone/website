import Sectors from './Sectors'
import { TextGenerateEffect } from '../ui/text-generate-effect'

function Applications() {
  return (
    <section className='min-h-screen pt-8 my-4 space-y-4'>
      <h2 className='pb-4'><TextGenerateEffect words={"Applications"} /></h2>
      <p>Discover the diverse range of industries that can benefit from our VTOL drone technology.</p>
      <Sectors />
    </section >
  )
}

export default Applications
