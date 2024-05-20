import React from 'react'
import ConnectorLeft from './ConnectorLeft'
import ConnectorRight from './ConnectorRight'

function Connectors() {
    return (
        <>
            <section className='container'>
                <h1 className='mainHeading'>Just Upload Your <span>Dataset</span> and Leave the rest to us</h1>
                <div className='connectorFlex globalFlex'>
                    <div className='connectorLeft'>
                        <ConnectorLeft />
                    </div>
                    <div className='connectorRight'>
                        <ConnectorRight />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Connectors