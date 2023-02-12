function AddressList({ addresses }) {
  const tableRow = addresses.map((item) => (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.address}</td>
      <td>{item.recipient}</td>
      <td>{item.phone}</td>
    </tr>
  ));
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Address</th>
            <th scope="col">Recipient</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          {tableRow}
        </tbody>
      </table>
    </div>
  );
}

export default AddressList;
