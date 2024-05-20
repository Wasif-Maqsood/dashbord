import React from 'react'
import KeepUpWithThem from '../buttons/KeepUpWithThem'
import UserReviewsCard from './UserReviewsCard'

function UserReviews() {
    return (
        <>
            <section>
                <div className='container'>
                    <div className='userReviewsBg'>
                        <h1 className='mainHeading userReviewHd'>The Clever People in Your Industry Use <span>Dashbord</span></h1>
                        <div className='navBtn bannerStartForFreeBtn keepUpWithThem'>
                            <KeepUpWithThem />
                        </div>
                        <div>
                            <UserReviewsCard />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UserReviews