import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchReviewData, deleteReview } from '../Action'
import Alert from './Alert';

const ViewReviews = ({ reviews, fetchReviewData, deleteReview }) => {
    
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        const reviews = JSON.parse(localStorage.getItem("reviewData"));
        fetchReviewData(reviews)
    }, [fetchReviewData])

    const showMessages = (message, error) => {
        setMessage(message);
        setError(error);
        setTimeout(() => {
            setMessage('')
            setError(false)
        }, 4000)
    }
    
    const handleDeleteReview = (review) => {
        console.log(review);
        deleteReview(review?.id)
        showMessages('Review Deleted Successfully.', false);
    }

  return (
      <div className='review-list-container'>
          <Alert message={message} error={error} />
          <h2 className='header-title'>Total Reviews</h2>
          <div className='review-list'>
              {reviews?.length ? reviews?.map((review,index) => (
                  <div className='review-item' key={index}>
                      <button className='delete-btn' onClick={() => handleDeleteReview(review)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>
                      </button>
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
                        <p className='desc'>{review?.comment || '-'}</p>
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
    deleteReview,
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewReviews);