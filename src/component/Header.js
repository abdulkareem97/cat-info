import { Navbar } from 'flowbite-react'
import React, { useState } from 'react'
import akLogo from '../img/aklogo.png'

const Header = () => {
    const [act,setAct] = useState('');
    const setActive = (v) =>{
            setAct(v)
    }
    return (

        <Navbar
        fluid={true}
        rounded={false}
      >
        <Navbar.Brand href="/">
          <img
            src={akLogo}
            className="mr-3 h-6 sm:h-9 rounded-xl"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Cat-fact
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link
            href="/"
            active={act==''}
          >
            Home
          </Navbar.Link>
          <Navbar.Link href="/fact" 
          active={act=='fact'}
          onClick={()=>setActive('fact')}>
            Facts
          </Navbar.Link>
          <Navbar.Link href="/breeds">
            Breeds
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            About
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>



    )
}

export default Header
