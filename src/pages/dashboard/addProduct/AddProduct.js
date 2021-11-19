import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddProduct.css";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://whispering-mesa-36934.herokuapp.com/addProduct", data)
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="add-product my-3">
      <h2 className="heading text-center">Add a new product</h2>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("Name", { required: true })}
          placeholder="Product Name"
        />
        <textarea
          type="text"
          {...register("Description", { required: true })}
          placeholder="Description"
        />
        <input
          type="number"
          {...register("Price", { required: true })}
          placeholder="price"
        />
        <input
          {...register("img", { required: true })}
          placeholder="image url"
        />
        <input type="submit" className="btn add-btn" value="Add Product" />
      </form>
    </div>
  );
};

export default AddProduct;
