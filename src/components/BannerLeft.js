import React from 'react'
import { NavLink } from 'react-router-dom'
import StartForFree from '../buttons/StartForFree'
import BookADemo from '../buttons/BookADemo'

function BannerLeft() {
    return (
        <>
            <div className='bannerLeftContent'>
                <h1>Build Customizable Dashboards in few minutes with <span>Dashbord</span></h1>
                <div className='bannerBtn globalFlex'>
                    <div className='navBtn bannerStartForFreeBtn'>
                        <StartForFree />
                    </div>
                    <div className='navBtn bookAdemoBtn'>
                        <BookADemo />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BannerLeft