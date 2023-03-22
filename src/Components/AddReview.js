import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addReviewData } from '../Action';

const AddReview = ({addReviewData}) => {

    const [reviewData, SetReviewData] = useState({
        fullName: '',
        email: '',
        phoneNo: '',
        star: '',
        comment: '',
    })

    const [fullNameError, setFullNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneNoError, setPhoneNoError] = useState('');
    const [starError, setStarError] = useState('');

    const handleInputData = (e) => {
        const { name, value } = e?.target;
        SetReviewData({...reviewData, [name]: value})
    }

       

    const handleSubmitReview = (e) => {
        e.preventDefault();
        if (!starError && !fullNameError && !emailError && !phoneNoError) { 
            addReviewData(reviewData);
            console.log(reviewData);
            SetReviewData({
                fullName: '',
                email: '',
                phoneNo: '',
                star: '',
                comment: '',
            });
        }
    }

    const handleStartInput = (e) => {
        const { name, value } = e.target;
        if (name === "fullName") {
            setFullNameError(!value.trim() ? 'Please Enter Full Name.' : '')
        }
        if (name === "email") {
            setEmailError(!value.trim() ? 'Please Enter Email.' : '')
        }
        if (name === "phoneNo") {
            setPhoneNoError(!value.trim() ? 'Please Enter Phone No.' : parseInt(value.trim()).length === 10 ? '' :'Please Enter Valid Phone No.' )
        }
        if (name === "star") {
            setStarError(!value.trim() ? 'Please Enter Star.' : parseInt(value.trim()) > 5 ? 'please enter Between 0 to 5 star' :'')
        }
    }

  return (
      <div className='add-review-container'>
          <h2 className='header-title'>Add Review</h2>
          <div className='review-form-container'>
              <form className='form' onSubmit={handleSubmitReview}>
                  <div className='form-group'>
                      <label htmlFor='fullName'>Full Name<span className='requireed'>*</span></label>
                      <input name='fullName' onBlur={handleStartInput} onChange={handleInputData}  value={reviewData?.fullName} type='text' id='fullName' className={`input-field ${fullNameError? 'error-field input-field' : ''}`} />
                      {fullNameError ? <span className='error'>{fullNameError}</span> : null}
                  </div>
                  <div className='form-group'>
                      <label htmlFor='email'>Email<span className='requireed'>*</span></label>
                      <input name='email' type='email' onBlur={handleStartInput} onChange={handleInputData}  value={reviewData?.email} id='email' className={`input-field ${emailError? 'error-field input-field' : ''}`} />
                      {emailError ? <span className='error'>{emailError}</span> : null}
                  </div>
                  <div className='form-group'>
                      <label htmlFor='phone_no'>Phone No<span className='requireed'>*</span></label>
                      <input name='phoneNo' type='number' onBlur={handleStartInput} onChange={handleInputData}  value={reviewData?.phoneNo} id='phone_no' className={`input-field ${phoneNoError? 'error-field input-field' : ''}`} />
                      {phoneNoError ? <span className='error'>{phoneNoError}</span> : null}
                  </div>
                  <div className='form-group'>
                      <label htmlFor='star'>Start Out of 5<span className='requireed'>*</span></label>
                      <input name='star' type='number' onBlur={handleStartInput} onChange={handleInputData} value={reviewData?.star} id='star' className={`input-field ${starError? 'error-field input-field' : ''}`} />
                      {starError ? <span className='error'>{starError}</span> : null}
                  </div>
                  <div className='form-group'>
                      <label htmlFor='comment'>Comment</label>
                      <textarea name='comment' onChange={handleInputData} value={reviewData?.comment} id='comment' className='text-area-field' />
                  </div>
                  <button className='btn' type='submit'>Submit Review</button>
              </form>
          </div>
    </div>
  )
}

const mapDispatchToProps = {
    addReviewData,
}

export default connect(null,mapDispatchToProps)(AddReview)