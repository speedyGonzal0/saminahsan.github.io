import React from 'react'
import { Button, Text, Link, Badge } from '@nextui-org/react';
import './Contact.css'
import {AiOutlineGithub} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'

function Contact() {
  return (
    <div className='contact' id='contact'>
        <Text h1 css={{fontFamily: "Space Grotesk", textGradient: "45deg, $blue600 -20%, $pink600 80%"}}>Get In Touch</Text>
        <div className="buttonContainer">
            <Link href='mailto: samin.ahsan1497@gmail.com'>
                <Button icon={<HiOutlineMail size="1.5em"/>} auto light css={{fontFamily: "Rubik"}}>samin.ahsan1497@gmail.com</Button>
            </Link>
            
            <Link href='https://www.linkedin.com/in/samin-ahsan/' target="_blank">
                <Button icon={<BsLinkedin size="1.5em"/>} auto light css={{fontFamily: "Rubik"}}>samin-ahsan</Button>
            </Link>

            <Link href='https://github.com/speedyGonzal0' target="_blank">
                <Button icon={<AiOutlineGithub size="1.5em"/>} auto light css={{fontFamily: "Rubik"}}>speedyGonzal0</Button>
            </Link>

        
        </div>

        <div className="footer">
            <Text color="$neutral" css={{fontFamily: "Rubik"}}>
                Built by <Link css={{fontFamily: "Rubik"}} block color="text" isExternal href='https://github.com/speedyGonzal0/saminahsan.github.io.git' target="_blank"> Samin Ahsan </Link>
            </Text>
            
            <Text color="$neutral" css={{fontFamily: "Rubik", display: "flex", gap: "0.5em"}}>
                Using 
                <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="ReactJS" />
                &
                <Link href='https://nextui.org/' target="_blank" css={{fontFamily: "Rubik"}} >
                    <Badge color="primary">
                        Next UI
                    </Badge>
                </Link>
                
            </Text>
        </div>
    </div>
  )
}

export default Contact