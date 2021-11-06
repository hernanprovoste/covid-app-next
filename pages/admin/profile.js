import LayoutAdmin from '../../components/Layout/LayoutAdmin'
import UserProfile from '../../components/Profile/UserProfile'

const ProfilePage = () => {
  return <UserProfile />
}

ProfilePage.Layout = LayoutAdmin

export default ProfilePage

// ProfilePage.getLayout = (page) => {
//   return <LayoutAdmin>{page}</LayoutAdmin>
// }
