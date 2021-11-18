import { getSession } from 'next-auth/client'
import LayoutAdmin from '../../../components/Layout/LayoutAdmin'
import Worker from '../../../components/Worker/Worker'

const WorkerPage = (props) => {
  return <Worker data={props} />
}

WorkerPage.Layout = LayoutAdmin

export default WorkerPage

export const getServerSideProps = async (context) => {
  const session = await getSession({ req: context.req })

  const res = await fetch('http://localhost:3000/api/admin/workers/workers-all')
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
      workers: data
    }
  }
}
