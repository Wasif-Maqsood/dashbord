import React, { useContext } from 'react'
import FbSvg from '../Icons/FbSvg'
import { appThemeContext } from '../context/ThemeContext'

function ConnectorRight() {
    let { theme } = useContext(appThemeContext)
    return (
        <>
            <>
                <div className='connectorRightContent'>
                    <div className='container'>
                        <h4 className={theme === true ? 'darkModeText' : ''}>You connect the data while we handle everything</h4>
                        <div className='connectorBrands globalFlex'>
                            <p>Fomous Connectors</p>
                            <p>All Connectors</p>
                            <p>Maketing</p>
                            <p>Sales</p>
                        </div>
                        <div className='connectorCardsFlex globalFlex'>
                            <div className='connectorIcons globalFlex'>
                                <div className='connectorIconsContent'>
                                    <img src="/images/facebook.png" alt="" />
                                    <p>Facebook Ads</p>
                                </div>
                            </div>
                            <div className='connectorIcons globalFlex'>
                                <div className='connectorIconsContent'>
                                    <img src="/images/sheets.png" alt="" />
                                </div>
                            </div>
                            <div className='connectorIcons globalFlex'>
                                <div className='connectorIconsContent'>
                                    <img src="/images/shopify.png" alt="" />
                                </div>
                            </div>
                            <div className='connectorIcons globalFlex'>
                                <div className='connectorIconsContent'>
                                    <img src="/images/googleDrive.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="polygonLine" src="/images/Polygon.png" alt="" />
                </div>
            </>
        </>
    )
}

export default ConnectorRight