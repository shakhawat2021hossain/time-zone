import React, { useEffect, useState } from "react";
import "./Review.css";
import avatar from "../../../images/avatar.png";
import Rating from "@mui/material/Rating";

const Review = () => {
  const [reviews, setreviews] = useState([]);
  useEffect(() => {
    fetch("https://whispering-mesa-36934.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setreviews(data));
  }, []);
  return (
    <div className="my-5 container reviews">
      <h2 className="brand-name text-center mb-3">Client Reviews</h2>
      <div className="reviews-container my-3">
        {reviews.map((review) => (
          <div>
            <div className="img">
              <img src={avatar} alt="" />
            </div>
            <div className="body">
              <h4>{review?.name}</h4>
              <h5>{review?.profession}</h5>

              <Rating name="read-only" value={review?.ratting} readOnly />

              <p>{review?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
