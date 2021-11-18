import { getSession } from 'next-auth/client'
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

export const getServerSideProps = async (context) => {
  const session = await getSession({ req: context.req })

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  return {
    props: {
      session
    }
  }
}
