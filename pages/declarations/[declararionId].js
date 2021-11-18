import DeclarationsDetails from '../../components/DeclareFront/Details'

const DeclarationsDetail = (props) => {
  return (
    <>
      <DeclarationsDetails data={props} />
    </>
  )
}

export default DeclarationsDetail

export const getServerSideProps = async ({ params }) => {
  const { declararionId } = params
  const res = await fetch(
    `http://localhost:3000/api/declaration/${declararionId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
  const worker = await res.json()

  return {
    props: { worker }
  }
}
