import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import "./AddReview.css";

const AddReview = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://whispering-mesa-36934.herokuapp.com/addReview", data)
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <div className="my-3 container add-review">
      <h2 className="heading text-center">Make Review</h2>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("name", { required: true })}
          placeholder="Your Name"
          defaultValue={user.displayName}
        />
        <input
          type="text"
          {...register("profession", { required: true })}
          placeholder="Your Profession?"
        />
        <input
          step="any"
          type="number"
          {...register("ratting", { required: true })}
          placeholder="Rate out of 5"
        />
        <textarea
          type="text"
          {...register("description", { required: true })}
          placeholder="Description"
        />
        <input type="submit" className="btn add-btn" value="Post Review" />
      </form>
    </div>
  );
};

export default AddReview;
