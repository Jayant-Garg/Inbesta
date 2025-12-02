import Navbar from '../components/Navbar'
import ReviewTab from '../components/ReviewTab'
import UserProfile from '../components/UserProfile'
import ProfileEditor from '../components/ProfileEditor'

function MySettings({ user }) {
  return (
    <div sx={{
      backgroundColor: '#000000',
    }}>
      <ReviewTab />
      <ProfileEditor user={user} />
      <UserProfile user={user} />
    </div>
  );
}

export default MySettings;
