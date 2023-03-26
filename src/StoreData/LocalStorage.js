export const setReviewData = (data = {}) => {
    if (!localStorage.getItem("reviewData")) {
        localStorage.setItem("reviewData", JSON.stringify([data]));
    } else {
        const reviews = JSON.parse(localStorage.getItem("reviewData"));
        localStorage.setItem("reviewData", JSON.stringify([...reviews, data]))
    }
}

export const deleteReviewFromLocal = (id = '') => {
    const reviews = JSON.parse(localStorage.getItem("reviewData"));
    const remainReview = reviews.filter(item => item?.id !== id);
     localStorage.setItem("reviewData", JSON.stringify(remainReview))
}