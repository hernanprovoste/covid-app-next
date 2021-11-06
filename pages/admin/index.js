import Dashboard from '../../components/Dashboard/Dashboard'
import LayoutAdmin from '../../components/Layout/LayoutAdmin'

const AdminPage = () => {
  return <Dashboard />
}

AdminPage.Layout = LayoutAdmin

export default AdminPage

// AdminPage.getLayout = (page) => {
//   return <LayoutAdmin>{page}</LayoutAdmin>
// }
