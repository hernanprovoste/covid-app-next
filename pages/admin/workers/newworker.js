import { getSession } from 'next-auth/client'
import LayoutAdmin from '../../../components/Layout/LayoutAdmin'
import FormWorker from '../../../components/Worker/FormWorker'

const NewWorkerPage = () => {
  return (
    <div>
      <FormWorker />
    </div>
  )
}

NewWorkerPage.Layout = LayoutAdmin

export default NewWorkerPage

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
