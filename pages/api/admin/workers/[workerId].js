import { getSession } from 'next-auth/client'
import {
  connectDataBase,
  findOneDocument,
  updateDocument
} from '../../../../herlpers/db-utils'
import { verifyPassword, hashPassword } from '../../../../herlpers/hash-pwd'

const handler = async (req, res) => {
  // const session = await getSession({ req: req })

  // // protect the incomming request fron outside api
  // if (!session) {
  //   res.status(401).json({ message: 'Not authenticated!' })
  //   return
  // }

  const userId = req.query.userId

  const data = req.body

  const {
    dni,
    name,
    last_name,
    second_last_name,
    email,
    password,
    created_by
  } = data

  console.log(data)

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

  // if (req.method === 'PATCH') {
  //   try {
  //     const user = await findOneDocument(client, 'workers', { dni: userId })

  //     const currentPassword = user.password

  //     const passwordsAreEqual = await verifyPassword(password, currentPassword)

  //     console.log(passwordsAreEqual)

  //     if (!passwordsAreEqual) {
  //       res.status(403).json({ message: 'Invalid password.' })
  //       client.close()
  //       return
  //     }

  //     const documents = await updateDocument(
  //       client,
  //       'users',
  //       { dni: userId },
  //       {
  //         dni: dni,
  //         name: name,
  //         last_name: last_name,
  //         second_last_name: second_last_name,
  //         email: email,
  //         password: hashedPassword,
  //         created_by: created_by,
  //         created_at: new Date()
  //       }
  //     )
  //     res.status(200).json({ users: documents })
  //     client.close()
  //   } catch (error) {}
  // }
}

export default handler
