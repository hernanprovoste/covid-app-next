import { getSession } from 'next-auth/client'
import Declarations from '../../../components/Declarations/Declarations'
import LayoutAdmin from '../../../components/Layout/LayoutAdmin'

const DeclarationsPage = () => {
  return <Declarations />
}

DeclarationsPage.Layout = LayoutAdmin

export default DeclarationsPage

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
