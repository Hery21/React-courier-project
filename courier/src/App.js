import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useEffect, useState } from 'react';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Profile from './Pages/Profile';
import TopUp from './Pages/TopUp';
import Welcome from './Pages/Welcome';
import Address from './Pages/Address';
import EditAddress from './Components/EditAddress';
import Shipping from './Pages/Shipping';
import Payment from './Pages/Payment';

function App() {
  const [addresses, setAddresses] = useState([]);

  const requestOptions = {
    method: 'GET',
    headers: { Authorization: `Bearer ${localStorage.getItem('idToken')}` },
  };

  useEffect(() => {
    fetch('http://localhost:8080/addresses', requestOptions)
      .then((response) => response.json())
      .then((data) => setAddresses(data));
  }, []);

  return (
    <div className="App">
      <div className="Pages">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={(
                <Welcome />
                  )}
            />
            <Route
              path="/login"
              element={(
                <Login />
                    )}
            />
            <Route
              path="/register"
              element={(
                <Register />
                  )}
            />
            <Route
              path="/profile"
              element={(
                <Profile />
                  )}
            />
            <Route
              path="/top-up"
              element={(
                <TopUp />
                  )}
            />
            <Route
              path="/addresses"
              element={(
                <Address
                  addresses={addresses}
                />
                  )}
            />
            <Route
              path="/addresses/:id"
              element={(
                <EditAddress />
                  )}
            />
            <Route
              path="/shippings"
              element={(
                <Shipping
                  addresses={addresses}
                />
                  )}
            />
            <Route
              path="/payment/:shipping-id"
              element={(
                <Payment />
                  )}
            />
            <Route
              path="*"
              element={
                <h1>404 NOT FOUND</h1>
                  }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
