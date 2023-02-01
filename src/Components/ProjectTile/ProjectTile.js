import React from 'react'
import "./ProjectTile.css"
import { Button, Text, Link, Collapse } from '@nextui-org/react';
import {AiOutlineGithub} from 'react-icons/ai'
// import overseer from '../../Images/overseerSS.png'


function ProjectTile( {title, desc, tech, link, img} ) {
  return (
    <div className='pTile'>
        <div className="pTileLeft">
            <Text h2 css={{ fontFamily: "Space Grotesk"}}> {title} </Text>
            <Text color = "$neutral" css={{fontFamily: "Rubik"}}> {desc} </Text> <br/>
            <Text b css={{fontFamily: "Rubik"}}> {tech} </Text> <br/> 

            <Link href={link} target="_blank">
                <Button icon={ <AiOutlineGithub size="2.5em"/>} light auto/>
            </Link>
            
        </div>
        <div className="pTileRight">
            <img className='pTileImg' src={img} alt="" />
            {/* hello */}
        </div>
        
        
    </div>
  )
}

export default ProjectTile