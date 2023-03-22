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