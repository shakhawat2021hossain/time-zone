import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://whispering-mesa-36934.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h2 className="text-center brand-name">Manage Product</h2>
      <div>
        <Table striped bordered hover responsive="sm">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Deletation</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr>
                <td>{product?.Name}</td>
                <td>{product?.Price}</td>
                <td>
                  <button
                    // onClick={() => handleDelete(product._id)}
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

export default ManageProducts;
