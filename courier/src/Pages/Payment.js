import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Payment() {
  const params = useParams();
  const [promoID, setPromoID] = useState(0);

  const requestOptions = {
    method: 'GET',
    headers: { Authorization: `Bearer ${localStorage.getItem('idToken')}` },
  };

  useEffect(() => {
    fetch('http://localhost:8080/promos', requestOptions)
      .then((response) => response.json())
      .then((data) => setPromoID(data));
    fetch(`http://localhost:8080/payment/${params.id}`, requestOptions)
      .then((response) => response.json())
      .then((data) => setPromoID(data));
  }, []);

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

export default Payment;
