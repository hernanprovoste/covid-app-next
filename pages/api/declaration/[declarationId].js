import { connectDataBase, findOneDocument } from '../../../herlpers/db-utils'

const handler = async (req, res) => {
  const userId = req.query.declarationId

  let client

  try {
    client = await connectDataBase()
  } catch (error) {
    res.status(500).json({ message: 'Connecting to the database failed!' })
    return
  }

  if (req.method === 'GET') {
    try {
      const documents = await findOneDocument(client, 'workers', {
        dni: userId
      })

      res.status(200).json({ workers: documents })
      client.close()
    } catch (error) {
      res.status(500).json({ message: 'Getting users failed.' })
    }
  }
}

export default handler
