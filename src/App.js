import './App.css';
import { NextUIProvider, createTheme, Navbar, Button, Text, Link } from '@nextui-org/react';
import { useState, useEffect } from 'react';
import {BsMoon} from 'react-icons/bs'
import About from './Components/About/About';
import {AiOutlineGithub} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'
import Exp from './Components/Experiences/Exp';


function App() {

  const lightTheme = createTheme({
    type: 'light'
  })

  const darkTheme = createTheme({
    type: 'dark'
  })

  const [isDark, setIsDark] = useState(true);

  const collapseItems = [
    {name: "About", link: "#about"},
    {name: "Experience", link: "#exp"},
    {name: "Projects", link: "#projects"},
    {name: "Skills", link: "#skills"},
    {name: "Contact", link: "#contact"}
  ];

  return (
    <NextUIProvider theme={isDark ? darkTheme : lightTheme}>
      <div className="App">
        <Navbar variant="sticky" isBordered maxWidth="fluid">
          <Navbar.Brand>
            <Navbar.Toggle aria-label="toggle navigation" />
          </Navbar.Brand>
          <Navbar.Content>
            <Navbar.Link href="mailto: turzo68@gmail.com" >
              <HiOutlineMail size="2em"/>
            </Navbar.Link>
            <Navbar.Link href='https://www.linkedin.com/in/samin-ahsan/' target="_blank" >
              <BsLinkedin size="1.5em"/>
            </Navbar.Link>
            <Navbar.Link href='https://github.com/speedyGonzal0' target="_blank" >
              <AiOutlineGithub size="2em"/>
            </Navbar.Link>
            <Navbar.Item>
              <Button
                auto
                bordered
                color="#333333"
                icon={<BsMoon size="1.25em"/>}
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
      </div>
    </NextUIProvider>
  );
}

export default App;
