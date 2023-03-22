import { combineReducers } from 'redux';
import { setReviewData } from '../StoreData/LocalStorage';

const initialState = []

const addUserReview = (state = initialState, action) => {
    switch (action?.type) {
        case 'ADD_REVIEW_DATA':
            setReviewData(action.payload)
            return [...state, action.payload]
        case 'FETCH_REVIEW_DATA':
            return [...action.payload]
        default:
            return state;
    }
}

const reducer = combineReducers({
    reviews: addUserReview
})

export default reducer;
