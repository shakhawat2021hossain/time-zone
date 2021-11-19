import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./Booking.css";

const Booking = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { Name, Price } = product;
  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/addOrder", data).then((res) => {
      console.log(res);
    });
  };
  return (
    <div className="d-flex my-5 booking">
      <div className="details half-width">
        <img src={product?.img} alt="" />
        <h3>{product?.Name}</h3>
        <p>{product?.Description}</p>
      </div>

      <div className="half-width user-form">
        <h1 className="text-center brand-name">Your Information</h1>
        <div className="login-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("name")}
              placeholder="Name"
              defaultValue={user?.displayName}
              className="p-2"
            />
            <br />
            <input
              {...register("email", { required: true })}
              placeholder="Email"
              defaultValue={user?.email}
              className="p-2"
            />
            <br />
            {product.Name && (
              <input
                {...register("product")}
                defaultValue={Name}
                className="p-2"
              />
            )}
            <br />
            {product.Price && (
              <input
                {...register("price")}
                defaultValue={Price}
                className="p-2"
              />
            )}
            <br />
            <input
              {...register("adress", { required: true })}
              placeholder="Your Adress"
              type="text"
              className="p-2"
            />
            <br />
            <input
              {...register("mobile", { required: true })}
              placeholder="Mobile Number"
              type="number"
              className="p-2"
            />
            <br />
            <input
              type="submit"
              className="btn add-btn"
              value="Confirm Booking"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
