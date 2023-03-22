export const setReviewData = (data = {}) => {
    if (!localStorage.getItem("reviewData")) {
        localStorage.setItem("reviewData", JSON.stringify([data]));
    } else {
        const reviews = JSON.parse(localStorage.getItem("reviewData"));
        localStorage.setItem("reviewData", JSON.stringify([...reviews, data]))
    }
}