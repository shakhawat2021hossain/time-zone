import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const Orders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/orders?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);

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
                  <button className="btn text-danger">Cancel</button>
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
