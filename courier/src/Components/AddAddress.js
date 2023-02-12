import { useState } from 'react';

function AddAddress() {
  const [recipient, setRecipient] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleCreateAddress = () => {
    const registerData = {
      recipient,
      address,
      phone,
    };

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('idToken')}`,
      },
      body: JSON.stringify(registerData),
    };

    fetch('http://localhost:8080/addresses', requestOptions)
      .then((response) => response.json());
  };

  return (
    <div className="container">
      <h1>Create Address</h1>
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
        <button type="button" onClick={handleCreateAddress}>Create</button>
      </form>
    </div>
  );
}

export default AddAddress;
