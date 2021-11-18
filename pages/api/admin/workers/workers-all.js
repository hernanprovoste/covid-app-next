import { connectDataBase, getAllDocuments } from '../../../../herlpers/db-utils'

const handler = async (req, res) => {
  if (req.method !== 'GET') return

  let client

  try {
    client = await connectDataBase()
  } catch (error) {
    res.status(500).json({ message: 'Connecting to the database failed' })
    return
  }

  try {
    const getAllWorkers = await getAllDocuments(client, 'workers')
    res.status(200).json({ workers: getAllWorkers })
  } catch (error) {
    res.status(500).json({ message: 'Finding data failed!' })
    return
  }

  client.close()
}

export default handler
