import {
  connectDataBase,
  findOneDocument,
  insertDocument
} from '../../../herlpers/db-utils'

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return
  }

  const data = req.body

  const {
    dni,
    cellphone,
    physicalFeeling,
    symptoms,
    symptomsChecked,
    physicalContact,
    created_at
  } = data

  if (
    !dni &&
    !cellphone &&
    !physicalFeeling &&
    !symptomsChecked &&
    !physicalContact
  ) {
    res.status(422).json({ message: 'Datos ingresados no validos' })
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
      await insertDocument(client, 'declarations', {
        dni: dni,
        cellphone: cellphone,
        physicalFeeling: physicalFeeling,
        symptoms: symptoms,
        symptomsChecked: symptomsChecked,
        physicalContact: physicalContact,
        created_at: created_at
      })
      client.close()
    }
  } catch (error) {
    res.status(500).json({ message: 'Inserting data failed!' })
    return
  }

  res.status(201).json({ message: 'Declaration created!' })
}

export default handler
