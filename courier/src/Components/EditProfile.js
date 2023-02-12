import { useState } from 'react';

function EditProfile() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [photo, setPhoto] = useState('');

  function handleEditProfile() {
    const registerData = {
      email,
      name,
      phone,
      photo,
    };

    const requestOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('idToken')}`,
      },
      body: JSON.stringify(registerData),
    };

    fetch('http://localhost:8080/profile', requestOptions)
      .then((response) => response.json());
  }

  return (
    <div className="container">
      <h1>Edit Profile</h1>
      <form>
        <p>Email</p>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>Full Name</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Phone Number</p>
        <input
          type="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <p>Photo</p>
        <input
          type="text"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />
        <button type="button" onClick={handleEditProfile}>Edit</button>
      </form>
    </div>
  );
}

export default EditProfile;
