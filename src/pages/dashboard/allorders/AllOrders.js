import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const AllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    fetch("https://whispering-mesa-36934.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);
  console.log(allOrders);
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
            const remaining = allOrders.filter((order) => order._id !== id);
            setAllOrders(remaining);
            alert("Order Successfully Deleted");
          }
        });
    }
  };
  return (
    <div>
      <h2 className="text-center brand-name">Manage All Orders</h2>
      <div>
        <Table striped bordered hover responsive="sm">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Adress</th>
              <th>Deletation</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((order) => (
              <tr>
                <td>{order?.product}</td>
                <td>{order?.price}</td>
                <td>{order?.adress}</td>
                <td>
                  <button
                    onClick={() => handleDelete(order._id)}
                    className="btn text-danger"
                  >
                    Delete
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

export default AllOrders;
