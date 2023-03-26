import { combineReducers } from 'redux';
import { deleteReviewFromLocal, setReviewData } from '../StoreData/LocalStorage';


const initialState = []

const addUserReview = (state = initialState, action) => {
    switch (action?.type) {
        case 'ADD_REVIEW_DATA':
            setReviewData(action?.payload)
            return [...state, action?.payload]
        case 'FETCH_REVIEW_DATA':
            return [...action?.payload]
        case 'DELETE_REVIEW': 
            deleteReviewFromLocal(action?.payload)
            const reviews = state.filter(item => item?.id !== action?.payload)
            return reviews
        default:
            return state;
    }
}

const reducer = combineReducers({
    reviews: addUserReview
})

export default reducer;
