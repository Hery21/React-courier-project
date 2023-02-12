import ShowProfile from '../Components/ShowProfile';
import EditProfile from '../Components/EditProfile';

function Profile({ token }) {
  return (
    <div className="container">
      <ShowProfile
        token={token}
      />
      <EditProfile />
    </div>
  );
}

export default Profile;
