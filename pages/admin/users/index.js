import { getSession } from 'next-auth/client'
import LayoutAdmin from '../../../components/Layout/LayoutAdmin'
import Users from '../../../components/Users/Users'

const UsersPage = (props) => {
  return <Users data={props} />
}

UsersPage.Layout = LayoutAdmin

export default UsersPage

// export const getStaticProps = async (ctx) => {
//   const res = await fetch('http://localhost:3000/api/admin/users/users-all')
//   const data = await res.json()

//   return {
//     props: { users: data }
//   }
// }

export const getServerSideProps = async (context) => {
  const session = await getSession({ req: context.req })

  const res = await fetch('http://localhost:3000/api/admin/users/users-all')
  const data = await res.json()

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
      session,
      users: data
    }
  }
}
