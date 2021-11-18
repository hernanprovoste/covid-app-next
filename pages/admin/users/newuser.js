import { getSession } from 'next-auth/client'
import LayoutAdmin from '../../../components/Layout/LayoutAdmin'
import FormUser from '../../../components/Users/FormUser'

const NewUserPage = () => {
  return (
    <div>
      <FormUser />
    </div>
  )
}

NewUserPage.Layout = LayoutAdmin

export default NewUserPage

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
