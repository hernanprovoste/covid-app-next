import { getSession } from 'next-auth/client'
import LayoutAdmin from '../../../components/Layout/LayoutAdmin'
import FormUser from '../../../components/Users/FormUser'

const UserDetail = (props) => {
  console.log(props)
  return (
    <>
      <FormUser typeForm={'edit'} userId={props.users} />
    </>
  )
}

UserDetail.Layout = LayoutAdmin

export default UserDetail

export const getServerSideProps = async ({ params, req }) => {
  const session = await getSession({ req: req })

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  const res = await fetch(
    `http://localhost:3000/api/admin/users/${params.userId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
  const users = await res.json()

  return {
    props: {
      session,
      users
    }
  }
}
