import React from 'react'
import StartForFree from '../buttons/StartForFree'

function ConnectorLeft() {
    return (
        <>
            {/* <div className='container'> */}
                <div className='connectorLeftContent'>
                    <h3>More than 20 Connectors Available</h3>
                    <p>Easily connect multiple data sources and automatically build your first dashboard in minutes without needing any data science or engineering skills.</p>
                    <div className='navBtn bannerStartForFreeBtn'>
                        <StartForFree />
                    </div>
                </div>
            {/* </div> */}
        </>
    )
}

export default ConnectorLeft