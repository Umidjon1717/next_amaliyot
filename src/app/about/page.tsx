import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'
import next from '../../../public/next.svg'

export const metadata:Metadata={
    title:"Next about",
    description:"About next app"
}

const About = () => {
  return (
    <div>
        <Image alt='img' src={next} width={300} height={300}/>
        <Image alt='img' src={"https://images.squarespace-cdn.com/content/v1/61c4da8eb1b30a201b9669f2/e2e0e62f-0064-4f86-b9d8-5a55cb7110ca/Korembi-January-2024.jpg"} width={300} height={300}/>
    </div>
  )
}

export default About