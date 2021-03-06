import {
  connectDataBase,
  findOneDocument,
  insertDocument
} from '../../../../herlpers/db-utils'
import { hashPassword } from '../../../../herlpers/hash-pwd'

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return
  }

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

  if (
    !dni &&
    !name &&
    !last_name &&
    !email &&
    !email.includes('@') &&
    !password &&
    !password.trim().length < 7
  ) {
    res.status(422).json({
      message: `Datos ingresados no son v&aacute;lidos, la constrase&ntilde;a debe tener m&iacute;nimo 7 caracteres.`
    })
    return
  }

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

  const hashedPassword = await hashPassword(password)

  try {
    await insertDocument(client, 'users', {
      dni: dni,
      name: name,
      last_name: last_name,
      second_last_name: second_last_name,
      email: email,
      password: hashedPassword,
      created_by: created_by,
      created_at: new Date()
    })
    client.close()
  } catch (error) {
    res.status(500).json({ message: 'Inserting data failed!' })
    return
  }

  res.status(201).json({ message: 'User created!' })
}

export default handler
