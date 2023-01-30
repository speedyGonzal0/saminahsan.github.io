import React, { useState } from 'react'
import './About.css'
import { Button, Text, Link } from '@nextui-org/react';
import { useEffect } from 'react';

function About() {

    // const titles = ["Web Developer", "Software Engineer"]
    // const [titleIdx, setTitleIdx] = useState(0)

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setTitleIdx(( titleIdx + 1) % titles.length)
    //       }, 3000)
      
    //     return (() => clearInterval(interval))
    //   })

  return (
    <div className='about' id = "about">
        <Text h1 size="$8xl" css={{fontFamily: "Space Grotesk", "@xsMax": {fontSize: "$5xl"}}}>
            Hi! I'm Samin Ahsan
        </Text>
        <Text h1 size="$6xl" css={{fontFamily: "Space Grotesk", "@xsMax": { fontSize: "$3xl"} , textGradient: "45deg, $blue600 -20%, $pink600 50%"}}>
            Web Developer / Software Engineer
        </Text>
        <Text size="$2xl" css={{fontFamily: "Rubik", "@xsMax": { fontSize: "$xl"}}}>
            Based in Dhaka, Bangladesh. I aim to deliver beautiful, reliable and scalable web applications.
        </Text>
        <Button bordered color="gradient" auto>
            <Link href='#contact'>
                <Text b css={{fontFamily: "Rubik"}}>Get in touch</Text>
            </Link>
            
        </Button>        
    </div>
  )
}

export default About