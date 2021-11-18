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

  const {
    dni,
    name,
    last_name,
    second_last_name,
    email,
    address,
    phone,
    mobile,
    created_by
  } = data

  if (
    !dni &&
    !name &&
    !last_name &&
    !email &&
    !email.includes('@') &&
    !address
  ) {
    res.status(422).json({
      message: `Datos ingresados no son validos.`
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
    const existingWorker = await findOneDocument(client, 'workers', {
      dni: dni
    })

    if (existingWorker) {
      res
        .status(422)
        .json({ message: 'Colaborador ya se encuentra registrado.' })
      client.close()
      return
    }
  } catch (error) {
    res.status(500).json({ message: 'Finding data failed!' })
    return
  }

  try {
    await insertDocument(client, 'workers', {
      dni: dni,
      name: name,
      last_name: last_name,
      second_last_name: second_last_name,
      email: email,
      address: address,
      phone: phone,
      mobile: mobile,
      created_by: created_by,
      created_at: new Date()
    })
    client.close()
  } catch (error) {
    res.status(500).json({ message: 'Inserting data failed!' })
    return
  }

  res.status(201).json({ message: 'Worker created!' })
}

export default handler
