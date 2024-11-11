import Navbar from '../components/Navbar'
import ReviewTab from '../components/ReviewTab'

import Settings from '../components/UserProfile/Settings'


function MySettings() {
  return (
    <div sx={{
      backgroundColor: '#000000',
    }}>
      {/* <Navbar /> */}
      <ReviewTab />
      <Settings />

    </div>
  );
}

export default MySettings;
