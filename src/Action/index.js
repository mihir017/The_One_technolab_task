export const addReviewData = (data) => {
    return {
        type: 'ADD_REVIEW_DATA',
        payload: data
    }
}

export const fetchReviewData = (data) => {
    return {
        type: 'FETCH_REVIEW_DATA',
        payload: data
    }
}

export const deleteReview = (id) => {
    return {
        type: 'DELETE_REVIEW',
        payload: id,
    }
}