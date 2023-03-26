import React from 'react'

const Alert = ({message, error}) => {
  return (
      <div className={`alert-container ${message ? 'alert-show' : ''}`}>
          <div className={`${error ?'error-alert' : 'sucess-alert'} alert-box`}>
              <p className='alert-msg'>{message}</p>
          </div>
    </div>
  )
}

export default Alert