import React from 'react'
import BannerLeft from './BannerLeft'
import BannerRight from './BannerRight'

function Banner() {
    return (
        <>
            <section className='bannerSection'>
                <div className='container'>
                    <div className='bannerContent globalFlex'>
                        <div className='bannerLeft'>
                            <BannerLeft />
                        </div>
                        <div className='bannerRight'>
                            <BannerRight />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner