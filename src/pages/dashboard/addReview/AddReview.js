import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddReview.css";

const AddReview = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/addReview", data).then((res) => {
      console.log(res);
    });
  };
  return (
    <div className="my-3 container add-review">
      <h2 className="heading text-center">Make Review</h2>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("Name", { required: true })}
          placeholder="Your Name"
        />
        <input
          type="text"
          {...register("Profession", { required: true })}
          placeholder="Your Profession?"
        />
        <input
          type="number"
          {...register("Ratting", { required: true })}
          placeholder="Rate out of 5"
        />
        <textarea
          type="text"
          {...register("Description", { required: true })}
          placeholder="Description"
        />
        <input type="submit" className="btn add-btn" value="Post Review" />
      </form>
    </div>
  );
};

export default AddReview;
