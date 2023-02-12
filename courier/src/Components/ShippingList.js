import { useEffect, useState } from 'react';

function ShippingList() {
  const [shippings, setShippings] = useState([]);

  const requestOptions = {
    method: 'GET',
    headers: { Authorization: `Bearer ${localStorage.getItem('idToken')}` },
  };

  useEffect(() => {
    fetch('http://localhost:8080/shippings', requestOptions)
      .then((response) => response.json())
      .then((data) => setShippings(data));
  }, []);

  const tableRow = shippings.map((item) => (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.status}</td>
      <td>{item.review}</td>
      <td>{item.size.name}</td>
      <td>{item.size.price}</td>
      <td>{item.category.name}</td>
      <td>{item.category.price}</td>
      <td>{item.add_on.name}</td>
      <td>{item.add_on.price}</td>
      <td>{item.size.price + item.category.price + item.add_on.price}</td>
    </tr>
  ));
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Status</th>
            <th scope="col">Review</th>
            <th scope="col">Size</th>
            <th scope="col">Size price</th>
            <th scope="col">Category</th>
            <th scope="col">Category price</th>
            <th scope="col">Add On</th>
            <th scope="col">Add On price</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {tableRow}
        </tbody>
      </table>
    </div>
  );
}

export default ShippingList;
