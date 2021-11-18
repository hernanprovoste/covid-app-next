import { getSession } from 'next-auth/client'
import Dashboard from '../../components/Dashboard/Dashboard'
import LayoutAdmin from '../../components/Layout/LayoutAdmin'

const AdminPage = () => {
  return <Dashboard />
}

AdminPage.Layout = LayoutAdmin

export const getServerSideProps = async (context) => {
  const session = await getSession({ req: context.req })
  console.log(session)

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

export default AdminPage
