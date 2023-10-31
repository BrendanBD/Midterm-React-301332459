import React, { useState } from "react";
import "./Form.css"; //styles for form
import { isFormValid } from "./Validate"; // function to check if fields are filled

export default function Multiple() {
  const initialFormData = {
    name: "",
    description: "",
    category: "",
    quantity: "",
    price: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (isFormValid(formData)) {
      alert(
    
      `Name: ${formData.name}, 
    Description: ${formData.description},
    Category: ${formData.category},
    Quantity: ${formData.quantity}, 
    Price: ${formData.price}`
      );
    } else {
      alert("Please fill in all the fields before submitting.");
    }
  };

  const handleCancel = () => {
    
    setFormData(initialFormData);
  };

  return (
    <form onSubmit={handleSubmit} className="multiple">
      <div className="form-group">
        <label className="multiple__text" htmlFor="name">
          Name:
        </label>
        <input
          type="text"
          id="name"
          className="multiple__input"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label className="multiple__text" htmlFor="description">
          Description:
        </label>
        <input
          type="text"
          id="description"
          className="multiple__input"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label className="multiple__text" htmlFor="category">
          Category:
        </label>
        <input
          type="text"
          id="category"
          className="multiple__input"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label className="multiple__text" htmlFor="quantity">
          Quantity:
        </label>
        <input
          type="text"
          id="quantity"
          className="multiple__input"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label className="multiple__text" htmlFor="price">
          Price:
        </label>
        <input
          type="text"
          id="price"
          className="multiple__input"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
      </div>

      <div className="button-group">
        <button className="multiple__button" type="submit">
          Submit
        </button>
        <button className="multiple__button" type="button" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}
