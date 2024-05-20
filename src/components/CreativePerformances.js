import React from 'react'
import CreativePerformanceLeft from './CreativePerformanceLeft'
import CreativePerformanceRight from './CreativePerformanceRight'

function CreativePerformances() {
    return (
        <>
            <section>
                <div className='container'>
                    <div className='creativePerformanceSection globalFlex'>
                        <CreativePerformanceLeft />
                        <CreativePerformanceRight />
                    </div>
                </div>
            </section>
        </>
    )
}

export default CreativePerformances