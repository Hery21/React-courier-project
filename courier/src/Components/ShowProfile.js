import { useEffect, useState } from 'react';

function ShowProfile() {
  // const [id, setID] = useState('');
  // const [email, setEmail] = useState('');
  // const [name, setName] = useState('');
  // const [phone, setPhone] = useState('');
  // const [photo, setPhoto] = useState('');
  // const [balance, setBalance] = useState(0);

  const [profile, setProfile] = useState([]);

  const requestOptions = {
    method: 'GET',
    headers: { Authorization: `Bearer ${localStorage.getItem('idToken')}` },
  };

  useEffect(() => {
    fetch('http://localhost:8080/profile', requestOptions)
      .then((response) => response.json())
      .then((data) => setProfile(data));
  }, []);

  return (
    <div className="container">
      <h1>Profile</h1>
      <p>
        ID:
        {profile.id}
      </p>
      <p>
        Email:
        {profile.email}
      </p>
      <p>
        Name:
        {profile.name}
      </p>
      <p>
        Phone:
        {profile.phone}
      </p>
      <p>{profile.photo}</p>
    </div>
  );
}

export default ShowProfile;
