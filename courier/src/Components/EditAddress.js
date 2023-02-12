import { useState } from 'react';
import { useParams } from 'react-router-dom';

function EditAddress() {
  const params = useParams();
  const [recipient, setRecipient] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleEditAddress = () => {
    const registerData = {
      recipient,
      address,
      phone,
    };

    const requestOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('idToken')}`,
      },
      body: JSON.stringify(registerData),
    };

    fetch(`http://localhost:8080/addresses/${params.id}`, requestOptions)
      .then((response) => response.json());
  };

  return (
    <div className="container">
      <h1>Edit Address</h1>
      <form>
        <p>recipient</p>
        <input
          type="text"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />
        <p>address</p>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <p>Phone Number</p>
        <input
          type="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="button" onClick={handleEditAddress}>Edit</button>
      </form>
    </div>
  );
}

export default EditAddress;
