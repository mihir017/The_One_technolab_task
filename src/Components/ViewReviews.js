import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchReviewData } from '../Action'

const ViewReviews = ({ reviews, fetchReviewData }) => {
    
    useEffect(() => {
        const reviews = JSON.parse(localStorage.getItem("reviewData"));
        fetchReviewData(reviews)
    }, [fetchReviewData])
    
  return (
      <div className='review-list-container'>
          <h2 className='header-title'>Review Lists</h2>
          <div className='review-list'>
              {reviews?.length ? reviews?.map((review,index) => (
                  <div className='review-item' key={index}>
                    <div className='user-details d-flex align-center'>
                        <div className='detail'>
                            <p className='title'>Name</p>
                            <p className='desc'>{review?.fullName}</p>
                        </div>
                        <div className='detail'>
                            <p className='title'>Email</p>
                            <p className='desc'>{review?.email}</p>
                        </div>
                        <div className='detail'>
                            <p className='title'>Phone No</p>
                            <p className='desc'>{review?.phoneNo}</p>
                        </div>
                        <div className='detail'>
                            <p className='title'>Star</p>
                            <p className='desc'>{`${review?.star}/5`}</p>
                        </div>
                    </div>
                    <div className='comment-detail'>
                        <p className='title'>Comment</p>
                        <p className='desc'>{review?.comment}</p>
                    </div>
                  </div>
              )) : (
                  <p className='review-not-available'>Reviews Not Available.</p>
              )}
              
          </div>
      </div>
  )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        reviews: state?.reviews
    }
}

const mapDispatchToProps = {
    fetchReviewData,
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewReviews);