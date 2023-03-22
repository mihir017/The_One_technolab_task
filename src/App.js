import { NavBar, ViewReviews, AddReview } from "./Components";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { } from 'react-router'
import { useEffect } from "react";

function App() {
  useEffect(() => {
    if (!localStorage.getItem("reviewData")) {
      localStorage.setItem("reviewData", JSON.stringify([]));
    }
  },[])
  return (
      <BrowserRouter>
    <div className="App app-container">
      <NavBar />
      <Routes>
        <Route path="/" element={<ViewReviews />} exact/>
        <Route path="/addReview" element={<AddReview /> } exact/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
