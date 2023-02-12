import { useState } from 'react';

function TopUp() {
  const [amount, setAmount] = useState(0);

  const handleTopUp = () => {
    const topUpData = {
      amount: parseInt(amount, 10),
    };

    const requestOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('idToken')}`,
      },
      body: JSON.stringify(topUpData),
    };

    fetch('http://localhost:8080/top-up', requestOptions)
      .then((response) => response.json());
  };

  return (
    <div className="container">
      <h1>Top Up</h1>
      <form>
        <p>Amount</p>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value, 10))}
        />
        <button type="button" onClick={handleTopUp}>Edit</button>
      </form>
    </div>
  );
}

export default TopUp;
