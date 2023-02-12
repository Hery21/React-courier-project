import { useState, useEffect } from 'react';

function AddShipping({ addresses }) {
  const [size, setSize] = useState([]);
  const [category, setCategory] = useState([]);
  const [addOn, setAddOn] = useState([]);

  const requestOptions = {
    method: 'GET',
    headers: { Authorization: `Bearer ${localStorage.getItem('idToken')}` },
  };

  useEffect(() => {
    fetch('http://localhost:8080/sizes', requestOptions)
      .then((response) => response.json())
      .then((data) => setSize(data));
    fetch('http://localhost:8080/categories', requestOptions)
      .then((response) => response.json())
      .then((data) => setCategory(data));
    fetch('http://localhost:8080/add-ons', requestOptions)
      .then((response) => response.json())
      .then((data) => setAddOn(data));
  }, []);
  const [sizeID, setSizeID] = useState(0);
  const [categoryID, setCategoryID] = useState(0);
  const [addOnID, setAddOnID] = useState(0);
  const [addressID, setAddressID] = useState(0);

  const handleAddShipping = () => {
    const shippingData = {
      sizeID,
      categoryID,
      addOnID,
      addressID,
    };

    console.log(shippingData);

    const requestShipping = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('idToken')}`,
      },
      body: JSON.stringify(shippingData),
    };

    fetch('http://localhost:8080/shippings', requestShipping)
      .then((response) => response.json());
  };

  return (
    <div className="container">
      <h1>Add Shipping</h1>
      <div>
        <p>Size</p>
        <select id="show-field" onChange={(e) => setSizeID(e.target.value)}>
          <option disabled selected value> -- select an option -- </option>
          {size.map((option) => (
            <option key={option.name} value={option.id}>
              {option.name}
              {option.description}
              {option.price}
            </option>
          ))}
        </select>
      </div>
      <div>
        <p>Category</p>
        <select id="show-field" onChange={(e) => setCategoryID(e.target.value)}>
          <option disabled selected value> -- select an option -- </option>
          {category.map((option) => (
            <option key={option.name} value={option.id}>
              {option.name}
              {option.description}
              {option.price}
            </option>
          ))}
        </select>
      </div>
      <div>
        <p>Add On</p>
        <select id="show-field" onChange={(e) => setAddOnID(e.target.value)}>
          <option disabled selected value> -- select an option -- </option>
          {addOn.map((option) => (
            <option key={option.name} value={option.id}>
              {option.name}
              {option.description}
              {option.price}
            </option>
          ))}
        </select>
      </div>
      <div>
        <p>Address</p>
        <select id="show-field" onChange={(e) => setAddressID(e.target.value)}>
          <option disabled selected value> -- select an option -- </option>
          {addresses.map((option) => (
            <option key={option.address} value={option.id}>
              {option.address}
              {option.phone}
            </option>
          ))}
        </select>
      </div>
      <button type="button" onClick={handleAddShipping}>Add</button>
    </div>
  );
}

export default AddShipping;
