import React from 'react'
import AddIconSvg from '../Icons/AddIconSvg'
import EditIconSvg from '../Icons/EditIconSvg'
import FilterIconSvg from '../Icons/FilterIconSvg'

function CreativePerformanceLeft() {
    return (
        <>
            <div className='creativePerformanceLeft globalFlex'>
                <div>
                    <AddIconSvg />
                    <p>Add</p>
                </div>
                <div>
                    <EditIconSvg />
                    <p>Edit</p>
                </div>
                <div>
                    <FilterIconSvg />
                    <p>Filters</p>
                </div>
            </div>
        </>
    )
}

export default CreativePerformanceLeft