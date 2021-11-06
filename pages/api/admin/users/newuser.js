import {
  connectDataBase,
  findOneDocument,
  insertDocument
} from '../../../../herlpers/db-utils'

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return
  }

  const data = req.body

  const { dni, name, last_name, second_last_name, email, password } = data

  let client

  try {
    client = await connectDataBase()
  } catch (error) {
    res.status(500).json({ message: 'Connecting to the database failed' })
    return
  }

  try {
    const existingUser = await findOneDocument(client, 'users', { dni: dni })

    if (existingUser) {
      res.status(422).json({ message: 'Usuario ya se encuentra registrado.' })
      client.close()
      return
    }
  } catch (error) {
    res.status(500).json({ message: 'Finding data failed!' })
    return
  }

  try {
    await insertDocument(client, 'users', {
      dni: dni,
      name: name,
      last_nam: last_name,
      second_last_name: second_last_name,
      email: email,
      password: password
    })
    client.close()
  } catch (error) {
    res.status(500).json({ message: 'Inserting data failed!' })
    return
  }

  res.status(201).json({ message: 'User created!' })
}

export default handler
