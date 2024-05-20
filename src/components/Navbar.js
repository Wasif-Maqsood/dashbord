import React, { useContext, useState } from 'react'
import LogoSvg from '../svgs/LogoSvg'
import { NavLink } from 'react-router-dom'
import StartForFree from '../buttons/StartForFree'
import { appThemeContext } from '../context/ThemeContext'

function Navbar() {
    let { handleTheme, theme } = useContext(appThemeContext);
    
    return (
        <>
            <nav>
                <div className='container'>
                    <div className='globalFlex navBar'>
                        <div>
                            <LogoSvg />
                        </div>
                        <div className='navBarMenus globalFlex'>
                            <NavLink to='/' >Product</NavLink>
                            <NavLink to='/services' >Services</NavLink>
                            <NavLink to='/resources' >Resources</NavLink>
                            <NavLink to='/pricing' >Pricing</NavLink>
                            <div className='navBtn'>
                                <StartForFree />
                            </div>
                            <div className='themeChanger navBtn' onClick={handleTheme}>
                                {theme === false ? <i className="fa-regular fa-moon"></i> : <i className="fa-regular fa-sun"></i>}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar