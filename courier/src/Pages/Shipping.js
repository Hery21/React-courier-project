import AddShipping from '../Components/AddShipping';
import ShippingList from '../Components/ShippingList';

function Shipping({
  addresses,
}) {
  return (
    <div className="container">
      <AddShipping
        addresses={addresses}
      />
      <ShippingList />
    </div>
  );
}

export default Shipping;
