import { useState } from 'react'
import './About.css'
import { Button, Text, Link } from '@nextui-org/react';
import { useEffect } from 'react';

function About() {


  return (
    <div className='about' id = "about">
        <Text h1 size="$8xl" css={{fontFamily: "Space Grotesk", "@mdMax": {fontSize: "$5xl"}, "@smMax": {fontSize: "$3xl"}}}>
            Hi! I'm Samin Ahsan
        </Text>
        <Text h1 size="$6xl" css={{fontFamily: "Space Grotesk", "@mdMax": { fontSize: "$4xl"}, "@smMax": {fontSize: "$2xl"},  textGradient: "45deg, $blue600 -20%, $pink600 80%"}}>
            Software Engineer
        </Text>
        <Text size="$2xl" css={{fontFamily: "Rubik", "@xsMax": { fontSize: "$xl"}, "@smMax": {fontSize: "$lg"}}}>
            Based in Dhaka, Bangladesh. I aim to deliver quality code.
        </Text>
        
        <Link href='#contact' css={{fontFamily: "Rubik"}}>
            <Button bordered color="gradient" auto>
                Get in touch
            </Button>  
        </Link>            
              
    </div>
  )
}

export default About