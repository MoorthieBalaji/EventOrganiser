import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header"; // Ensure this import is correct
import { Button, Table } from "react-bootstrap";
import "./Cart.css"; // Ensure the path to your CSS is correct

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const userName = sessionStorage.getItem("userName");

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/cart/${userName}`
        );
        setCartItems(response.data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, [userName]);

  const handleDelete = async (itemIndex) => {
    try {
      const updatedItems = cartItems.filter((_, index) => index !== itemIndex);
      const response = await axios.put(
        `http://localhost:5001/api/cart/${userName}`,
        { items: updatedItems }
      );

      if (response.status === 200) {
        setCartItems(updatedItems);
        console.log("Item deleted successfully");
      } else {
        console.error("Failed to delete item from cart");
      }
    } catch (error) {
      console.error("Error deleting cart item:", error);
    }
  };

  const totalSum = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="main">
      {" "}
      {/* Apply background here */}
      <div className="cart-container">
        <Header />
        <div className="cart-body">
          <div className="table-container">
            <Table striped bordered hover className="cart-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Item Name</th>
                  <th>Price (Rs.)</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="text-center">
                      No items in your cart
                    </td>
                  </tr>
                ) : (
                  cartItems.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <h5>{index + 1}</h5>
                      </td>
                      <td>
                        <h5>{item.name}</h5>
                      </td>
                      <td>
                        <h5>{item.price}</h5>
                      </td>
                      <td>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => handleDelete(index)}
                        >
                          remove
                        </Button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
          </div>
          {cartItems.length > 0 && (
            <h5 className="text-right ts">Total Price: Rs.{totalSum}</h5>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
