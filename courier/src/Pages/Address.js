import AddAddress from '../Components/AddAddress';
import AddressList from '../Components/AddressList';

function Address({ addresses }) {
  return (
    <div className="container">
      <AddAddress />
      <AddressList
        addresses={addresses}
      />
    </div>
  );
}

export default Address;
