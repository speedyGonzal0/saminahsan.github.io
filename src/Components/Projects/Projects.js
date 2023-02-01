import React from 'react'
import './Projects.css'
import { Button, Text, Link, Collapse } from '@nextui-org/react';
import ProjectTile from '../ProjectTile/ProjectTile';
import overseer from '../../Images/overseerSS.png'
import gamevault from '../../Images/gamevaultSS.png'
import vaxtrak from '../../Images/vaxtrakSS.png'


function Projects() {
  return (
    <div className='projects' id='projects'>
        <Text h1 css={{ fontFamily: "Space Grotesk", textGradient: "45deg, $blue600 -20%, $pink600 50%"}}> Featured Projects </Text>
        <ProjectTile title="Overseer"
         desc="An order management project for large-scale production businesses. Finalist of Therap Javafest 2022."
         tech="MySQL · Spring Boot · React.js · NextUI · CSS"
         link="https://github.com/speedyGonzal0/Overseer.git"
         img={overseer}
         />

        <ProjectTile title="GameVault"
         desc="A website for renting games and sharing opinions on them."
         tech="MySQL · Spring Boot · React.js · NextUI · CSS"
         link="https://github.com/speedyGonzal0/CSE470-GameVault.git"
         img={gamevault}
         />

        <ProjectTile title="VaxTrak"
         desc="A COVID-19 vaccine registration, management and real-time case tracking website."
         tech="MySQL · Express.js · React.js · Node.js · CSS"
         link="https://github.com/suppaGonzal0/VaxTrak.git"
         img={vaxtrak}
         />

        <Link css={{fontFamily: "Rubik"}} block isExternal color="primary" href="https://github.com/speedyGonzal0?tab=repositories" target="_blank">
          More projects available at my GitHub
      </Link>
    </div>
  )
}

export default Projects