import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const Orders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const url = `https://whispering-mesa-36934.herokuapp.com/orders?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);

  const handleDelete = (id) => {
    const deleting = window.confirm("Are you sure to delete this item?");
    if (deleting) {
      const url = `https://whispering-mesa-36934.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
            alert("Order Successfully Deleted");
          }
        });
    }
  };

  return (
    <div>
      <h2 className="brand-name">Hello {user.displayName}! Your orders...</h2>
      <div>
        <Table striped bordered hover responsive="sm">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Adress</th>
              <th>Cancelation</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr>
                <td>{order?.product}</td>
                <td>{order?.price}</td>
                <td>{order?.adress}</td>
                <td>
                  <button
                    onClick={() => handleDelete(order._id)}
                    className="btn text-danger"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Orders;
