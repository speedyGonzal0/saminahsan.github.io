import React from 'react'
import './Exp.css'
import { Button, Text, Link, Collapse } from '@nextui-org/react';


function Exp() {
  return (
    <div className='Exp' id='exp'>
        <Text h1 css={{ fontFamily: "Space Grotesk", textGradient: "45deg, $blue600 -20%, $pink600 50%"}}> Experience</Text>
        <Collapse.Group splitted>
          <Collapse css={{ fontFamily: "Space Grotesk" }} title="UX Engineer Intern" subtitle="Penguin.com.bd | Internship | Mar 2021 - May 2021">
            <Text css={{ fontFamily: "Rubik"}}>
            - Designed consumer-facing app UX. <br/>
            - Created usable and efficient UI mockups in Figma.<br/>
            - Developed UI components using React.<br/><br/>

            <Text b css={{ fontFamily: "Rubik"}}>Skills: Web Development · Git · Node.js · JavaScript · Figma · React.js</Text>
            
            </Text>
          </Collapse>
          <Collapse css={{ fontFamily: "Space Grotesk" }} title="Student Tutor" subtitle="BRAC University | Part-time | Feb 2022 - Dec 2022">
            <Text css={{ fontFamily: "Rubik"}}>
            - Checked assignment scripts. <br/>
            - Provided consultation to around 100 students every semester.<br/>
            - Maintained grade sheets.<br/>
            - Assisted the faculty in course management.<br/><br/>

            <Text b css={{ fontFamily: "Rubik"}}>Skills: Web Development · Git · Node.js · JavaScript · Figma · React.js</Text>
            </Text>
          </Collapse>
          <Collapse css={{ fontFamily: "Space Grotesk" }} title="Graphic Designer" subtitle="Part-time | 2016 - 2020">
            <Text css={{ fontFamily: "Rubik"}}>
            - Freelance rebranding contract for ATC, a construction company.<br/>
            - Editor of Scintilla Science Club of St. Joseph Higher Secondary School.<br/>
            - Experience in t-shirt, layout, banner and poster design.<br/> <br/>

            <Text b css={{ fontFamily: "Rubik"}}>Skills: Adove Illustrator · Adobe Photoshop · Figma</Text>
            </Text>
          </Collapse>
        </Collapse.Group>
    </div>
  )
}

export default Exp