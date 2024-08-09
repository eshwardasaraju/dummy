import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Navc1 from './Navc1'
import Navc2 from './Navc2'
import Navc3 from './Navc3'
// import { NavLink } from 'react-router-dom'

const Nav = () => {
    let Navp = styled.div`
    height:100px;
    // border:2px solid;
    
    `
    let Navc = styled.div`
    // border:2px solid;
    height:inherit;
    width:98%;
    margin:auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
     `


    return (
        <div style={{position:"fixed",width:"100%",backgroundColor:"white"}}>        
            <Navp>
            <Navc>

                <NavLink to=""><Navc1 /></NavLink>
                <NavLink to=""><Navc2/></NavLink>
                <NavLink to=""><Navc3/></NavLink>
            </Navc>
        </Navp>
        </div>

    )
}

export default Nav