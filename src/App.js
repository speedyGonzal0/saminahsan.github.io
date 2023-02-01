import './App.css';
import { NextUIProvider, createTheme, Navbar, Button, Text, Link } from '@nextui-org/react';
import { useState, useEffect } from 'react';
import {BsMoon} from 'react-icons/bs'
import {TbSun} from 'react-icons/tb'
import About from './Components/About/About';
import Exp from './Components/Experiences/Exp';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';


function App() {

  const lightTheme = createTheme({
    type: 'light'
  })

  const darkTheme = createTheme({
    type: 'dark'
  })

  const [isDark, setIsDark] = useState(true);

  const [collapseItems, setCollapseItems] = useState([
    {name: "About", link: "#about", status: false},
    {name: "Experience", link: "#exp", status: false},
    {name: "Projects", link: "#projects", status: false},
    {name: "Skills", link: "#skills", status: false},
    {name: "Contact", link: "#contact", status: false}
  ])

  const activeHandler = (index) => {
    if(index === 0){
      setCollapseItems([
        {name: "About", link: "#about", status: true},
        {name: "Experience", link: "#exp", status: false},
        {name: "Projects", link: "#projects", status: false},
        {name: "Skills", link: "#skills", status: false},
        {name: "Contact", link: "#contact", status: false}
      ])
    }
    else if(index === 1){
      setCollapseItems([
        {name: "About", link: "#about", status: false},
        {name: "Experience", link: "#exp", status: true},
        {name: "Projects", link: "#projects", status: false},
        {name: "Skills", link: "#skills", status: false},
        {name: "Contact", link: "#contact", status: false}
      ])
    }
    else if(index === 2){
      setCollapseItems([
        {name: "About", link: "#about", status: false},
        {name: "Experience", link: "#exp", status: false},
        {name: "Projects", link: "#projects", status: true},
        {name: "Skills", link: "#skills", status: false},
        {name: "Contact", link: "#contact", status: false}
      ])
    }
    else if(index === 3){
      setCollapseItems([
        {name: "About", link: "#about", status: false},
        {name: "Experience", link: "#exp", status: false},
        {name: "Projects", link: "#projects", status: false},
        {name: "Skills", link: "#skills", status: true},
        {name: "Contact", link: "#contact", status: false}
      ])
    }
    else if(index === 4){
      setCollapseItems([
        {name: "About", link: "#about", status: false},
        {name: "Experience", link: "#exp", status: false},
        {name: "Projects", link: "#projects", status: false},
        {name: "Skills", link: "#skills", status: false},
        {name: "Contact", link: "#contact", status: true}
      ])
    }
  }

  return (
    <NextUIProvider theme={isDark ? darkTheme : lightTheme}>
      <div className="App">
        <Navbar variant="sticky" isBordered maxWidth="fluid">
          <Navbar.Brand>
            <Navbar.Toggle aria-label="toggle navigation" showIn="sm" />
          </Navbar.Brand>
          <Navbar.Content hideIn="sm" variant="highlight" activeColor="neutral" css={{fontFamily: "Rubik" }}>
            {collapseItems.map((item, index) => (
              <Navbar.Link key={index} href={item.link}> {item.name} </Navbar.Link>
            ))}
          </Navbar.Content>
          <Navbar.Content>
            <Navbar.Item>
              <Button
                auto
                bordered
                color="$neutral"
                icon={isDark ? <TbSun size="1.5em"/> : <BsMoon size="1.25em"/>}
                onClick={() => setIsDark(!isDark)}
              />
            </Navbar.Item>
          </Navbar.Content>
          <Navbar.Collapse>
            {collapseItems.map((item, index) => (
              <Navbar.CollapseItem key={index}>
                <Link href={item.link}>
                  <Text h2
                    css={{                    
                      minWidth: "100%",
                      fontFamily: "Space Grotesk"
                    }}                  
                  >
                    {item.name}
                  </Text>
                </Link>                
              </Navbar.CollapseItem>
            ))}
          </Navbar.Collapse>
        </Navbar>
        <About/>
        <Exp/>
        <Projects/>
        <Skills/>
        <Contact/>
      </div>
    </NextUIProvider>
  );
}

export default App;
