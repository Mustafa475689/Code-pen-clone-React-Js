import React from 'react'

// import images
import logo from "../assets/pen.png"

// import Material UI
import  { AppBar, Toolbar, styled } from "@mui/material"

const Container = styled(AppBar)`
  background: #060606;
  height: 9vh;
`

const Header = () => {
  return (
    <div>
        <Container position='static'>
            <Toolbar>
              <img src={logo} alt='logo' style={{width: 160}} />
            </Toolbar>
        </Container>
    </div>
  )
}

export default Header